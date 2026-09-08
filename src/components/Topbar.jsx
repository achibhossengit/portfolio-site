import { useEffect, useRef, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Topbar = ({ theme, onToggleTheme }) => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      let currentSection = NAV_LINKS.reduce((active, { href }) => {
        const section = document.querySelector(href);
        return section?.getBoundingClientRect().top <= 120 ? href.slice(1) : active;
      }, "");

      if (window.innerHeight + y >= document.documentElement.scrollHeight - 4) {
        currentSection = "contact";
      }

      lastY.current = y;
      setScrolled(y > 12);
      setHidden(goingDown && y > 80);
      setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-portfolio ${
        scrolled ? "bg-base-100/90 shadow-lg backdrop-blur-md" : "bg-base-100/95"
      } ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex min-h-12 w-full max-w-[800px] flex-wrap items-center justify-between px-2">
        <div className="flex gap-1">
          <a
            className="group/logo btn btn-ghost btn-square btn-sm relative overflow-hidden text-primary transition duration-200 ease-portfolio hover:-translate-y-[3px] motion-reduce:transform-none"
            href="#intro"
            aria-label="Home"
          >
            <span
              className="pointer-events-none absolute inset-y-1 left-0 w-full animate-logo-shine bg-gradient-to-tr from-transparent via-primary to-transparent opacity-30 motion-reduce:hidden"
              aria-hidden="true"
            />
            <img
              className="relative z-10 size-7 object-contain"
              src={logo}
              alt=""
              aria-hidden="true"
            />
          </a>
          <button
            type="button"
            className="btn btn-ghost btn-square btn-sm opacity-80 transition duration-200 ease-portfolio hover:-translate-y-[3px] hover:text-primary motion-reduce:transform-none"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
          >
            {theme === "dark" ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </button>
        </div>
        <nav className="flex shrink-0 gap-x-3 sm:gap-x-4" aria-label="Sections">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              className={`relative whitespace-nowrap py-2 font-mono text-sm text-primary transition-colors duration-200 ease-portfolio after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:bg-primary after:transition-transform after:duration-200 after:ease-portfolio hover:after:scale-x-100 focus-visible:after:scale-x-100 ${
                activeSection === href.slice(1) ? "after:scale-x-100" : "after:scale-x-0"
              }`}
              href={href}
              key={href}
              aria-current={activeSection === href.slice(1) ? "location" : undefined}
              onClick={() => setActiveSection(href.slice(1))}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
