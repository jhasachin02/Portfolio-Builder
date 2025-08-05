import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  Building, 
  Gavel,
  ArrowRight,
  Zap,
  Search,
  DollarSign,
  Users,
  FileCheck,
  Briefcase,
  Scale
} from "lucide-react";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

const Services = () => {
  const servicesRef = useScrollAnimation();
  const businessSetupRef = useScrollAnimation();
  const auditsRef = useScrollAnimation();
  const taxationRef = useScrollAnimation();
  const companyLawRef = useScrollAnimation();
  const fundRaisingRef = useScrollAnimation();

  const businessSetupServices = [
    "Formation of a Legal entity (LLP, Co., OPC. & Partnership Etc)",
    "Legal Drafting",
    "Special Economic Zone",
    "Business Advisory",
    "Various other registrations for start-ups under various laws"
  ];

  const auditServices = [
    "Tax Audits",
    "Internal & Statutory Audits of Indian Companies & Foreign companies having operations in India",
    "Stock & Book Debt Audits",
    "System Audits",
    "Investigations & Special Audits as required by the management",
    "Fixed Assets Verification etc."
  ];

  const taxationServices = [
    "Tax planning & Filing of Returns for all entities viz., Individuals, HUF's, Firms, Companies, and Trusts etc.",
    "Transfer Pricing Certification under the (Indian) Income Tax Act, 1961",
    "Income Tax Consultancy Work including guidance for transfer pricing, proper tax planning",
    "Indirect tax advisory services - including GST and Custom Duty",
    "Representing clients before tax authorities"
  ];

  const companyLawServices = [
    "Incorporation of company",
    "Consultancy on Company Law matters",
    "Planning for Mergers, Acquisitions, De-mergers, and Corporate re-organizations",
    "Filing of annual returns and various forms, documents",
    "Clause 49 review for compliance with fiscal, corporate and tax laws",
    "Secretarial Matters including share transfers",
    "Maintenance of Statutory records",
    "Consultancy on Public/Rights/Bonus Issue of shares",
    "Change of Name, Objects, Registered Office, etc."
  ];

  const fundRaisingServices = [
    "Preparation Bank Loan Application",
    "Preparation of project report",
    "Preparation of CMA data",
    "Working Capital",
    "Term Loan",
    "Project Finance",
    "Bank guarantee",
    "Loan against property",
    "Collateral free loans",
    "MSME Loans",
    "Bills Discounting",
    "Venture capital"
  ];

  const mainServices = [
    {
      icon: Building,
      title: "Business Setup",
      description: "Complete business formation and registration services for all types of legal entities in India.",
      features: businessSetupServices.slice(0, 4)
    },
    {
      icon: Search,
      title: "Audits & Investigation",
      description: "Comprehensive audit services including statutory, internal, tax audits and special investigations.",
      features: auditServices.slice(0, 4)
    },
    {
      icon: Calculator,
      title: "Taxation Services",
      description: "Expert tax advisory covering direct taxes, indirect taxes, GST, and international taxation.",
      features: taxationServices.slice(0, 4)
    },
    {
      icon: Scale,
      title: "Company Law Matters",
      description: "Complete corporate legal services including incorporation, compliance, and regulatory matters.",
      features: companyLawServices.slice(0, 4)
    },
    {
      icon: DollarSign,
      title: "Fund Raising & Finance",
      description: "Comprehensive financing solutions from loan applications to venture capital funding.",
      features: fundRaisingServices.slice(0, 4)
    },
    {
      icon: Users,
      title: "Management Consultancy",
      description: "Strategic business advisory and management consulting services for organizational growth.",
      features: ["Business Strategy", "Process Improvement", "Organizational Development", "Risk Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={servicesRef} className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-accent mr-2" />
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">Services Rendered</span>
          </div>
          <h2 className="heading-2 text-foreground mb-4">
            Our <span className="gradient-text">Professional Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            The Firm has identified critical parameters for organization&apos;s success, ranging from optimum utilization 
            of resources to legal compliances. Based on diverse business requirements, we provide comprehensive services 
            to enable organizations meet their objectives.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <Card 
              key={index} 
              className="group interactive-card hover-lift border-border/50 bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all hover-glow"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Services Sections */}
        
        {/* Business Setup Section */}
        <div ref={businessSetupRef} className="animate-on-scroll mb-16">
          <Card className="p-8">
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Building className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Business Setup Services</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {businessSetupServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-all">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Audits Section */}
        <div ref={auditsRef} className="animate-on-scroll mb-16">
          <Card className="p-8">
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Search className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Audit Services</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {auditServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-all">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Taxation Section */}
        <div ref={taxationRef} className="animate-on-scroll mb-16">
          <Card className="p-8">
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Calculator className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Taxation Services</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {taxationServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-all">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Company Law Section */}
        <div ref={companyLawRef} className="animate-on-scroll mb-16">
          <Card className="p-8">
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Scale className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Company Law Matters</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companyLawServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-all">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Fund Raising Section */}
        <div ref={fundRaisingRef} className="animate-on-scroll mb-16">
          <Card className="p-8">
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <DollarSign className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Fund Raising</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Financing is necessary at every stage of a business life cycle. We build detailed forecast models 
                and advise on ideal & minimum size of funding required for the business, based on multiple sensitivity 
                scenarios. We leverage our experience in negotiating with all parties involved, to bargain the best 
                deal for our client company and its promoters.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fundRaisingServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-all">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="gradient" size="lg" className="hover-glow pulse-on-hover">
            Contact Us for Consultation
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
