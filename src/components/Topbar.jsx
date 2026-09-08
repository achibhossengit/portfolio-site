import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

const NAV_LINKS = [
  { index: "01", label: "About", href: "#about" },
  { index: "02", label: "GitHub", href: "#github" },
  { index: "03", label: "Projects", href: "#projects" },
];

const Topbar = ({ theme, onToggleTheme }) => (
  <header className="navbar min-h-8 px-0 mb-3">
    <div className="navbar-start gap-1">
      <a
        className="btn btn-ghost btn-square btn-sm opacity-85 hover:-translate-y-px"
        href="https://github.com/achibhossengit"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="text-lg" />
      </a>
      <a
        className="btn btn-ghost btn-square btn-sm opacity-85 hover:-translate-y-px"
        href="https://www.linkedin.com/in/achibhossen/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-lg" />
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
    <nav className="navbar-end flex-wrap gap-x-4 gap-y-2" aria-label="Sections">
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
  </header>
);

export default Topbar;
