import { useEffect, useRef, useState } from "react";
import { FaSun, FaMoon, FaHome } from "react-icons/fa";

const NAV_LINKS = [
  { index: "01", label: "About", href: "#about" },
  { index: "02", label: "Projects", href: "#projects" },
];

const Topbar = ({ theme, onToggleTheme }) => {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      lastY.current = y;
      setHidden(goingDown && y > 8);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-base-100/95 backdrop-blur-md transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex min-h-10 w-full max-w-[800px] flex-wrap items-center justify-between px-2">
        <div className="flex gap-1">
          <a
            className="btn btn-ghost btn-square btn-sm opacity-85 hover:-translate-y-px"
            href="#intro"
            aria-label="Home"
          >
            <FaHome className="text-lg" />
          </a>
          <button
            type="button"
            className="btn btn-ghost btn-square btn-sm opacity-85 hover:-translate-y-px"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
          >
            {theme === "dark" ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </button>
        </div>
        <nav className="flex shrink-0 gap-x-3 sm:gap-x-4" aria-label="Sections">
          {NAV_LINKS.map(({ index, label, href }) => (
            <a
              className="font-mono text-sm whitespace-nowrap hover:text-primary"
              href={href}
              key={href}
            >
              <span className="text-primary mr-1">{index}.</span>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
