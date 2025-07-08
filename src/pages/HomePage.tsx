
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Gamepad2, Shield } from "lucide-react";

const HomePage = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Expert Developer & Game Security Researcher";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: "Python", icon: Code, level: 95 },
    { name: "Lua", icon: Gamepad2, level: 90 },
    { name: "HTML/CSS", icon: Code, level: 85 },
    { name: "Golang", icon: Database, level: 80 },
    { name: "Java", icon: Code, level: 75 },
    { name: "Security", icon: Shield, level: 90 },
  ];

  const stats = [
    { label: "Total Game Visits", value: "2.2B+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Years Experience", value: "5+" },
    { label: "Languages Mastered", value: "6+" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 matrix-bg opacity-30" />
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="floating-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-7xl md:text-9xl font-bold glow-text mb-6">
              NOTORIOUS
            </h1>
            
            <div className="text-2xl md:text-3xl text-primary/80 mb-8 font-mono h-12">
              {typedText}
              <span className="animate-pulse">|</span>
            </div>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Specializing in game development, security research, and full-stack solutions. 
              Creator of systems powering billions of user interactions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="glow-border">
                <Link to="/portfolio">
                  View Portfolio <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">Explore Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 glow-text">
            Technical Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-card border border-border rounded-lg p-6 glow-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="text-primary mr-3" size={24} />
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-sm text-muted-foreground mt-2">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 glow-text">Ready to Collaborate?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's build something extraordinary together. From game development to security solutions,
            I bring innovation and expertise to every project.
          </p>
          <Button asChild size="lg" className="glow-border">
            <Link to="/contact">
              Get In Touch <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
