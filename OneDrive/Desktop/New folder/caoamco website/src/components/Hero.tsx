import { Button } from "@/src/components/ui/button";
import { ArrowRight, Award, Users, Globe, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";
import Image from "next/image";

const Hero = () => {
  const heroRef = useScrollAnimation();
  const stats = [
    { icon: Award, value: "15+", label: "Years of Excellence" },
    { icon: Users, value: "200+", label: "Satisfied Clients" },
    { icon: Globe, value: "10+", label: "Service Areas" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-36 lg:pt-40 pb-0">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image 
          src="/hero-background.jpg"
          alt="Professional background" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold tracking-wide uppercase text-sm">Premier CA Firm - Est. 2009</span>
            <Sparkles className="h-6 w-6 text-yellow-400 ml-2" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Turn knowledge into{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              value for your business
            </span>{" "}
            with expert solutions
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            O A M & CO strives to provide quality services in Audit, Investigation, Due Diligence, 
            Accounting outsourcing, Taxation, Company Law Matters, and Management Consultancy with over 15 years of experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="default" 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0"
            >
              Our Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="default" 
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold border-0 shadow-lg"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-0">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6"
              >
                <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
