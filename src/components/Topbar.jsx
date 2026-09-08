import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

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
  </header>
);

export default Topbar;
