import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

const NAV_LINKS = [
  { index: "01", label: "About", href: "#about" },
  { index: "02", label: "GitHub", href: "#github" },
  { index: "03", label: "Projects", href: "#projects" },
];

const Topbar = ({ theme, onToggleTheme }) => (
  <header className="topbar">
    <div className="topbar-actions">
      <a
        className="icon-btn"
        href="https://github.com/achibhossengit"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        className="icon-btn"
        href="https://www.linkedin.com/in/achibhossen/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <button
        type="button"
        className="icon-btn"
        aria-label="Toggle theme"
        onClick={onToggleTheme}
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
    <nav className="topbar-nav" aria-label="Sections">
      {NAV_LINKS.map(({ index, label, href }) => (
        <a className="nav-link" href={href} key={href}>
          <span className="nav-link-index">{index}.</span>
          {label}
        </a>
      ))}
    </nav>
  </header>
);

export default Topbar;
