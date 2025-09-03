import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-primary p-2 md:p-5 mt-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-2 text-center md:text-left">
          {/* Left Content */}
          <div className="hidden md:flex flex-col gap-3">
            <p className="text-muted-foreground text-sm sm:text-base">
              © 2025 Achib Hossen — Full Stack Developer
            </p>
            <p className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
              Built using React & Django REST Framework
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <a
              href="https://github.com/achibhossengit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-surface-hover hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/achibhossen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-surface-hover hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mail.achibhossen@gmail.com"
              className="p-2 rounded-full bg-surface-hover hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
