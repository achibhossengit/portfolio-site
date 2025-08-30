import { Button } from "@/components/ui/button";
import { Download, Code, Database, Brain } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const handleResumeDownload = () => {
    // For demo purposes, we'll just show an alert
    // In production, this would link to an actual PDF resume
    alert("Resume download would be implemented here with a PDF file link");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium">
                  Full Stack Developer Learner
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Building the Future with{" "}
                <span className="gradient-text">Code</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Passionate Full Stack Developer specializing in backend development with 
                Django & Django REST Framework. Currently exploring React and Express.js 
                to master the complete Software Development Lifecycle.
              </p>
            </div>

            {/* Tech Stack & Skills */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-card-border">
                <Database className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Backend Expert</h3>
                  <p className="text-sm text-muted-foreground">Django & DRF</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-card-border">
                <Code className="w-6 h-6 text-secondary" />
                <div>
                  <h3 className="font-semibold">Frontend Learning</h3>
                  <p className="text-sm text-muted-foreground">React & Express.js</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-card-border">
                <Brain className="w-6 h-6 text-accent" />
                <div>
                  <h3 className="font-semibold">Problem Solver</h3>
                  <p className="text-sm text-muted-foreground">150+ DSA Problems</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="hero"
                onClick={handleResumeDownload}
                className="flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hard">
              <img 
                src={heroImage}
                alt="Professional Developer Portrait"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full blur-2xl opacity-60 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-accent rounded-full blur-2xl opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;