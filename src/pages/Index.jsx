import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { GitHubCalendar } from "react-github-calendar";
import profileImage from "@/assets/hero-image.jpg";

const GITHUB_USERNAME = "achibhossengit";

const contributionTheme = {
  light: ["#eee8d5", "#b9e4db", "#6fc9bb", "#2aa198", "#1a7a72"],
  dark: ["#1a222d", "#244842", "#3a7a6e", "#5aafa0", "#7dd3c0"],
};

const Hl = ({ children }) => <span className="hl">{children}</span>;

const copy = {
  name: "Achib Hossen",
  projectsTitle: "Projects",
  activityTitle: "GitHub",
  intro: (
    <p>
      Hi, I&apos;m <Hl>Achib Hossen</Hl>, a <Hl>Backend Developer</Hl>{" "}
      specializing in building scalable, maintainable, and reliable backend
      solutions with <Hl>Django</Hl>, <Hl>Django REST Framework</Hl>, and{" "}
      <Hl>PostgreSQL</Hl>.
    </p>
  ),
  bio: (
    <>
      <p>
        Currently working on a <Hl>multi-tenant SaaS</Hl> application that
        helps construction companies manage workers and expenses across
        different sites.
      </p>
      <p>
        My journey into software development started with <Hl>DSA</Hl>,{" "}
        <Hl>algorithms</Hl>, and <Hl>problem-solving</Hl>, using <Hl>C</Hl>,{" "}
        <Hl>C++</Hl>, and <Hl>Python</Hl>. Along the way, I explored{" "}
        <Hl>React</Hl>, <Hl>Node.js</Hl>, and other technologies to better
        understand the complete web development workflow. Now, I&apos;m
        primarily focused on backend development, building reliable, scalable,
        and maintainable systems.
      </p>
    </>
  ),
  freeTime: {
    before: "Outside of coding, I enjoy ",
    read: "reading",
    middle: ", writing in my journal, and exploring new places by ",
    bicycle: "bicycle",
    after: ".",
  },
};

const Index = () => {
  const [theme, setTheme] = useState("dark");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <main className="page">
      <div className="frame">
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
              onClick={toggleTheme}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </header>

        <section className="profile">
          <h1 className="sr-only">{copy.name}</h1>
          <img
            src={profileImage}
            alt={copy.name}
            className="avatar"
          />
          <div className="intro">{copy.intro}</div>
        </section>

        <div className="divider" role="separator" />

        <section className="content">
          <div className="bio">{copy.bio}</div>
          <p className="free-time">
            {copy.freeTime.before}
            <a
              className="tag"
              href="https://medium.com/@achibhossen"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.freeTime.read}
            </a>
            {copy.freeTime.middle}
            <a
              className="tag"
              href="https://www.strava.com/athletes/164300382"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.freeTime.bicycle}
            </a>
            {copy.freeTime.after}
          </p>
        </section>

        <div className="divider" role="separator" />

        <section className="activity">
          <h2 className="section-title">{copy.activityTitle}</h2>
          <div className="calendar-wrap">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              colorScheme={theme === "dark" ? "dark" : "light"}
              theme={contributionTheme}
              blockSize={11}
              blockMargin={3}
              fontSize={11}
              hideColorLegend={false}
              hideMonthLabels={false}
            />
          </div>
        </section>

        <div className="divider" role="separator" />

        <section className="projects">
          <h2 className="section-title">{copy.projectsTitle}</h2>
          <ul className="project-list">
            {projects.map((project) => (
              <li key={project.title} className="project-item">
                <div className="project-head">
                  <a
                    className="project-title"
                    href={project.live_link || project.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                  {project.repo_link && (
                    <a
                      className="project-link"
                      href={project.repo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      code
                    </a>
                  )}
                </div>
                <p className="project-desc">{project.description}</p>
                <p className="project-stack">{project.techStack.join(", ")}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Index;
