import React, { useRef, useEffect } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Input, Select, Button, Card, Space, Typography, Collapse, Grid } from 'antd';
import { PlusOutlined, DeleteOutlined, DownOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title, Text } = Typography;
const { Panel } = Collapse;
const { useBreakpoint } = Grid;

const FIELD_TYPES = [
  { value: 'string', label: 'String' },
  { value: 'number', label: 'Number' },
  { value: 'boolean', label: 'Boolean' },
  { value: 'array', label: 'Array' },
  { value: 'object', label: 'Object' },
  { value: 'nested', label: 'Nested' },
  { value: 'null', label: 'Null' },
  { value: 'date', label: 'Date' },
];

// Recursive Field Renderer
function FieldArray({ nestIndex = 0, control, register, name, getValues, remove, append }) {
  const { fields, append: appendField, remove: removeField, update: updateField } = useFieldArray({
    control,
    name,
  });

  // Only add a new field on focus of the last field
  const handleFocus = (fieldIndex) => {
    const currentFields = getValues(name) || [];
    const isLast = fieldIndex === currentFields.length - 1;
    const hasEmptyAtEnd = currentFields.length > 0 && !currentFields[currentFields.length - 1].name;
    if (isLast && !hasEmptyAtEnd) {
      appendField({ name: '', type: 'string', fields: [] });
    }
    // Remove duplicate empty fields at the end
    if (currentFields.length > 1) {
      const last = currentFields[currentFields.length - 1];
      const secondLast = currentFields[currentFields.length - 2];
      if (!secondLast?.name && !last?.name) {
        removeField(currentFields.length - 1);
      }
    }
  };

  // Custom onChange for key input (no auto-add logic here)
  const handleKeyChange = (e, fieldIndex) => {
    updateField(fieldIndex, {
      ...fields[fieldIndex],
      name: e.target.value,
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {fields.map((field, index) => {
        const fieldName = `${name}[${index}]`;
        const isNested = (getValues(`${fieldName}.type`) === 'nested');
        const indent = nestIndex * 24;
        return (
          <Card
            key={field.id}
            size="small"
            style={{ marginBottom: 0, marginLeft: indent, boxShadow: '0 1px 4px #f0f1f2' }}
            bodyStyle={{ padding: 16 }}
          >
            <Space direction="vertical" style={{ width: '100%' }} size={8}>
              <Space wrap align="start" style={{ width: '100%' }}>
                <Input
                  value={field.name}
                  placeholder="Field Name"
                  style={{ width: 180 }}
                  onChange={e => handleKeyChange(e, index)}
                  onFocus={() => handleFocus(index)}
                />
                <Controller
                  name={`${fieldName}.type`}
                  control={control}
                  defaultValue={field.type || 'string'}
                  render={({ field: typeField }) => (
                    <Select {...typeField} style={{ width: 140 }}>
                      {FIELD_TYPES.map((type) => (
                        <Option key={type.value} value={type.value}>{type.label}</Option>
                      ))}
                    </Select>
                  )}
                />
                <Button
                  icon={<PlusOutlined />}
                  onClick={() => appendField({ name: '', type: 'string', fields: [] })}
                  type="primary"
                  size="small"
                >
                  Add Sibling
                </Button>
                <Button
                  icon={<DeleteOutlined />}
                  danger
                  size="small"
                  onClick={() => removeField(index)}
                  style={{ marginLeft: 4 }}
                  disabled={fields.length === 1 && !field.name}
                />
              </Space>
              {/* Nested Fields */}
              {isNested && (
                <Collapse
                  bordered={false}
                  style={{ background: '#fafafa', marginTop: 8 }}
                  expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
                  defaultActiveKey={["nested"]}
                >
                  <Panel header={<Text strong>Nested Fields</Text>} key="nested" style={{ padding: 0 }}>
                    <FieldArray
                      nestIndex={nestIndex + 1}
                      control={control}
                      register={register}
                      name={`${fieldName}.fields`}
                      getValues={getValues}
                      remove={removeField}
                      append={appendField}
                    />
                    <Button
                      icon={<PlusOutlined />}
                      type="dashed"
                      size="small"
                      style={{ marginTop: 8 }}
                      onClick={() => appendField({ name: '', type: 'string', fields: [] }, index)}
                    >
                      Add Child Field
                    </Button>
                  </Panel>
                </Collapse>
              )}
            </Space>
          </Card>
        );
      })}
      <Button
        icon={<PlusOutlined />}
        type="dashed"
        block
        onClick={() => appendField({ name: '', type: 'string', fields: [] })}
        style={{ marginTop: 8 }}
      >
        Add Field
      </Button>
    </div>
  );
}

// Helper to build JSON schema from form data
function buildSchema(fields) {
  const obj = {};
  fields.forEach((field) => {
    if (!field.name) return;
    if (field.type === 'nested') {
      obj[field.name] = {
        type: 'object',
        properties: buildSchema(field.fields || []),
      };
    } else if (field.type === 'object') {
      obj[field.name] = {
        type: 'object',
        properties: {},
      };
    } else if (field.type === 'array') {
      obj[field.name] = {
        type: 'array',
        items: {},
      };
    } else if (field.type === 'date') {
      obj[field.name] = { type: 'string', format: 'date-time' };
    } else {
      obj[field.name] = { type: field.type };
    }
  });
  return obj;
}

export default function SchemaBuilder() {
  const screens = useBreakpoint();
  const { control, getValues, register, watch } = useForm({
    defaultValues: {
      fields: [
        { name: '', type: 'string', fields: [] },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fields',
  });

  // Watch for live updates
  const watchedFields = watch('fields');
  const schema = buildSchema(watchedFields || []);
  const jsonString = JSON.stringify(schema, null, 2);

  // Ref and effect for auto-scroll to bottom of page
  const previewRef = useRef(null);
  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [jsonString]);

  return (
    <div style={{ padding: 24 }}>
      <Title level={2} style={{ textAlign: 'center', fontWeight: 700, marginBottom: 32 }}>
        JSON Schema Builder
      </Title>
      <Card
        style={{ maxWidth: 1400, margin: '0 auto', boxShadow: '0 2px 8px #f0f1f2' }}
        bodyStyle={{ padding: screens.xs ? 12 : 32 }}
      >
        <div
          style={{
            display: 'flex',
            gap: 40,
            alignItems: 'flex-start',
            flexDirection: screens.xs ? 'column' : 'row',
          }}
        >
          {/* Left: Field Builder */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <Text strong style={{ fontSize: 16, marginBottom: 16, display: 'block' }}>Form View</Text>
            <FieldArray
              nestIndex={0}
              control={control}
              register={register}
              name="fields"
              getValues={getValues}
              remove={remove}
              append={append}
            />
          </div>
          {/* Right: JSON Preview */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <Text strong style={{ fontSize: 16, marginBottom: 16, display: 'block' }}>Live JSON Preview</Text>
            <div
              style={{
                background: '#f6f6f6',
                padding: 20,
                borderRadius: 8,
                border: '1px solid #e4e4e4',
                fontFamily: 'monospace',
                fontSize: 15,
                minHeight: 120,
                boxShadow: '0 1px 4px #f0f1f2',
                marginBottom: 8,
                overflow: 'auto',
              }}
            >
              <pre style={{ margin: 0 }}>{jsonString}</pre>
              <div ref={previewRef} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 