import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { CheckCircle, Target, Eye, Heart, Award, Users, Building, Star } from "lucide-react";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

const About = () => {
  const aboutRef = useScrollAnimation();
  const missionRef = useScrollAnimation();
  const teamRef = useScrollAnimation();
  
  const introduction = [
    "The Firm \"O A M & CO\" was established in the year 2009 and has experience in the profession more over 15 years.",
    "O A M & CO strives to provide quality services in the areas of Audit, Investigation, Due Diligence, Accounting outsourcing, Taxation (Direct and Indirect), Company Law Matters, Management Consultancy, Fixed Assets Verification, Information System Audit and FEMA.",
    "The firm is well geared to take up any professional assignments in the above areas. It has association with firms of Chartered Accountants, Management Consultants, Company Secretaries, Cost Management Accountants, and Advocates etc. to provide complete range of services.",
    "The partners of the firm having specialised knowledge and experience head each service department."
  ];

  const mission = [
    "Turn knowledge into value for the benefit of client.",
    "To continually strive to achieve excellence, identification of right source of finance with financial institutions.",
    "Our mission is to be a global corporate leader, wherein our services and expertise are cited as examples of quality expertise.",
    "Offering proactive services and delivering effective, reliable dependable advice maintaining the highest level of confidentiality and integrity.",
    "Delivering results within time frame maintaining the highest level of accuracy."
  ];

  const coreCompetencies = [
    "Business setup in India",
    "Accounting and Outsourcing Services",
    "Auditing and Assurance Services",
    "Company Formation and Secretarial Compliance",
    "International Taxation and Transfer Pricing",
    "Corporate Financing",
    "Payroll Processing outsourcing",
    "Statutory Certification",
    "Regulatory Compliance & Representation",
    "RBI, FEMA & Forex Law Compliance",
    "Income Tax, GST, Custom Duty, TDS, etc. Compliances",
    "Physical Verification of Assets & Inventory"
  ];

  const partners = [
    { name: "CA. OM PRAKASH YADAV", qualification: "B. Com. (H), FCP" },
    { name: "CA. AKHILESH KUMAR SHRIVASTAVA", qualification: "B. Sc.(H), LLB, ACP" },
    { name: "CA. MOHIT GUPTA", qualification: "FCP" }
  ];

  const associates = [
    "CMA AMIT KUMAR JHA",
    "CS SHUBHANI GUPTA",
    "ADV. SHAILESH KUMAR SHRIVASTAVA",
    "ADV. KAUSHAL KUMAR SINHA",
    "ADV. TRILOKI NATH JHA"
  ];

  const administrativeStaff = [
    "ADV. KUMARI RINKU",
    "ADV. BAIJNATH YADAV"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div ref={aboutRef} className="animate-on-scroll mb-20">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-6 w-6 text-accent mr-2" />
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">About O A M & CO</span>
          </div>
          
          <h2 className="heading-2 text-foreground mb-12 text-center">
            Established in <span className="gradient-text">2009</span> - Building Excellence for Over <span className="gradient-text">15 Years</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Introduction</h3>
              <div className="space-y-4">
                {introduction.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3 group hover:bg-muted/50 rounded-lg p-3 transition-all duration-300">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-subtle rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Our Core Competencies</h3>
              <div className="grid grid-cols-1 gap-3">
                {coreCompetencies.map((competency, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-300">
                    <Star className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{competency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div ref={missionRef} className="animate-on-scroll mb-20">
          <h3 className="heading-3 text-foreground mb-8 text-center">Our Mission</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mission.map((point, index) => (
              <Card 
                key={index} 
                className="text-center p-6 interactive-card hover-lift border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{point}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Value Addition Section */}
        <div className="mb-20 bg-gradient-subtle rounded-2xl p-8 lg:p-12">
          <h3 className="heading-3 text-foreground mb-8 text-center">Value Addition</h3>
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold text-primary mb-6 text-center">Right Team, Right Experience</h4>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Planning the business resources coupled with compliances of law has become a challenge today. 
                The above requires extensive theoretical knowledge and practical experience. The partners of 
                O A M & CO and their associates professionals have sound theoretical knowledge and vast practical experience.
              </p>
              <p>
                By sharing their knowledge and practical experience with the team members and clients, we ensure 
                effective and timely redressed of issues arising on routine basis or that can arise later.
              </p>
              <p>
                The partners are well versed with company law (including accounting standards and Ind AS), 
                indirect taxes and direct taxes. They are in a position to provide efficient, effective and 
                cost-effective professional service in the above area.
              </p>
              <p>
                The firm is in a position to take up assignments of Statutory Audit, Tax Audit, Internal Audit, 
                Management Audit, Compliance Audit, Direct and Indirect Taxation, specially consulting in the 
                field of Income Tax, GST, Custom Duty, Corporate Laws, Corporate Financing and Business Process Outsourcing.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div ref={teamRef} className="animate-on-scroll">
          <h3 className="heading-3 text-foreground mb-12 text-center">Our Core Team</h3>
          
          {/* Partners */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-primary mb-6 text-center">Partners</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="text-center p-6 interactive-card hover-lift">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      {partner.name === "CA. AKHILESH KUMAR SHRIVASTAVA" ? (
                        <img
                          src="/Partners/Akhilesh.jpg"
                          alt="CA. AKHILESH KUMAR SHRIVASTAVA"
                          className="object-cover w-20 h-20 rounded-full border border-primary"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                      ) : partner.name === "CA. MOHIT GUPTA" ? (
                        <img
                          src="/Partners/Mohit Gupta.jpeg"
                          alt="CA. MOHIT GUPTA"
                          className="object-cover w-20 h-20 rounded-full border border-primary"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                      ) : partner.name === "ADV. SHAILESH KUMAR SHRIVASTAVA" ? (
                        <img
                          src="/Partners/Shailesh.jpeg"
                          alt="ADV. SHAILESH KUMAR SHRIVASTAVA"
                          className="object-cover w-20 h-20 rounded-full border border-primary"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                      ) : (
                        <Users className="h-8 w-8 text-primary" />
                      )}
                    </div>
                    <h5 className="text-lg font-semibold text-foreground mb-2">{partner.name}</h5>
                    <p className="text-sm text-muted-foreground mb-1">Partner</p>
                    <p className="text-sm text-muted-foreground">{partner.qualification}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Associates */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-primary mb-6 text-center">Associates</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {associates.map((associate, index) => (
                <Card key={index} className="text-center p-6 interactive-card hover-lift">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      {associate === "ADV. SHAILESH KUMAR SHRIVASTAVA" ? (
                        <img
                          src="/Partners/Shailesh.jpeg"
                          alt="ADV. SHAILESH KUMAR SHRIVASTAVA"
                          className="object-cover w-20 h-20 rounded-full border border-primary"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                      ) : associate === "CS SHUBHANI GUPTA" ? (
                        <img
                          src="/Partners/shubhani.jpg"
                          alt="CS SHUBHANI GUPTA"
                          className="object-cover w-20 h-20 rounded-full border border-primary"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                      ) : (
                        <Building className="h-8 w-8 text-primary" />
                      )}
                    </div>
                    <h5 className="text-lg font-semibold text-foreground mb-2">{associate}</h5>
                    <p className="text-sm text-muted-foreground mb-3">Associate</p>
                    {/* Placeholder for about section */}
                    <p className="text-xs text-muted-foreground italic">About info coming soon...</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Administrative & Executive Staff */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-primary mb-6 text-center">Administrative & Executive Staff</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {administrativeStaff.map((staff, index) => (
                <Card key={index} className="text-center p-6 interactive-card hover-lift">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h5 className="text-lg font-semibold text-foreground mb-2">{staff}</h5>
                    <p className="text-sm text-muted-foreground mb-3">Administrative Staff</p>
                    {/* Placeholder for about section */}
                    <p className="text-xs text-muted-foreground italic">About info coming soon...</p>
                  </CardContent>
                </Card>
              ))}
              {/* Executive Staff Cards */}
              <Card className="text-center p-6 interactive-card hover-lift">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h5 className="text-lg font-semibold text-foreground mb-2">Ten Trained Staffs</h5>
                  <p className="text-sm text-muted-foreground mb-3">Executive Staff</p>
                  {/* Placeholder for about section */}
                  <p className="text-xs text-muted-foreground italic">About info coming soon...</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 interactive-card hover-lift">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h5 className="text-lg font-semibold text-foreground mb-2">Fifteen Trainees</h5>
                  <p className="text-sm text-muted-foreground mb-3">Executive Staff</p>
                  {/* Placeholder for about section */}
                  <p className="text-xs text-muted-foreground italic">About info coming soon...</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Client Focus Section */}
        <div className="mt-20 bg-gradient-subtle rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="heading-3 text-foreground mb-4">Focus of O A M & CO</h3>
            <p className="text-xl font-semibold text-primary mb-6">Client Satisfaction and Communication</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                The firm aspires to render sound professional services importance to client&apos;s satisfaction in terms of 
                timely and effective delivery of services. The firm recognizes that open and ongoing communications with 
                the client is imperative for ensuring timely response to the client&apos;s requirements and execution to be foremost.
              </p>
              <p>
                The firm, by utilizing the experience and expertise of the partners, has devised a risk-based audit approach 
                to ensure that the audits, besides ensuring compliance, help in identification of critical areas where business 
                related controls require improvements thus enabling the management to take actions to strengthen the controls.
              </p>
              <p>
                A gap between the clients&apos; expectation and perception of the client&apos;s requirements is highly undesirable. 
                Thus emphasis is on defining clients&apos; requirements, feedback and using this communication process to enhance services rendered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
