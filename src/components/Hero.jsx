import { FaDownload, FaCode, FaDatabase, FaBrain } from "react-icons/fa";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const handleResumeDownload = () => {
    alert("Resume download would be implemented here with a PDF file link");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-2 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium">
                  Full Stack Developer Learner
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Building the Future with{" "}
                <span className="gradient-text">Code</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Passionate Full Stack Developer specializing in backend
                development with Django & Django REST Framework. Currently
                exploring React and Express.js to master the complete Software
                Development Lifecycle.
              </p>
            </div>

            {/* Tech Stack & Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-card-border">
                <FaDatabase className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    Backend Expert
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Django & DRF
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-card-border">
                <FaCode className="w-6 h-6 text-secondary" />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    Frontend Learning
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    React & Express.js
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-card-border">
                <FaBrain className="w-6 h-6 text-accent" />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    Problem Solver
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    150+ DSA Problems
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="btn btn-primary btn-lg flex items-center justify-center gap-2 w-full sm:w-auto"
                onClick={handleResumeDownload}
              >
                <FaDownload className="w-5 h-5" />
                Download Resume
              </button>

              <button
                className="btn btn-outline btn-lg w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-hard w-full">
              <img
                src={heroImage}
                alt="Professional Developer Portrait"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-full blur-2xl opacity-60 animate-float"></div>
            <div
              className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-full blur-2xl opacity-60 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
