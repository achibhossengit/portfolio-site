import { useEffect, useState } from "react";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import profileImage from "@/assets/hero-image.jpg";

const copy = {
  en: {
    name: "Achib Hossen",
    role: "Backend developer",
    stack: "Python, Django, DRF, React, PostgreSQL",
    bio: "Hi, I am glad to see you! I am a backend developer who loves complex problems and system design. I build maintainable APIs and apps with Django, DRF, and PostgreSQL — currently focused on a Site Management system for employees, managers, and daily site records. I also work with React and JavaScript to cover the full web workflow. My foundation is DSA and problem solving with Python, C++, and JavaScript.",
    freeTime: {
      before: "In free time I love to ",
      read: "read",
      middle: ", writing journal and explore new places with ",
      bicycle: "bicycle",
      after: ".",
    },
    projectsTitle: "Projects",
  },
  bn: {
    name: "আছিব হোসেন",
    role: "ব্যাকএন্ড ডেভেলপার",
    stack: "Python, Django, DRF, React, PostgreSQL",
    bio: "হাই, আপনাকে দেখে ভালো লাগলো! আমি একজন ব্যাকএন্ড ডেভেলপার — জটিল প্রবলেম এবং সিস্টেম ডিজাইন নিয়ে কাজ করতে ভালোবাসি। Django, DRF এবং PostgreSQL দিয়ে মেইনটেইনেবল API ও অ্যাপ বানাই। এখন সাইট ম্যানেজমেন্ট সিস্টেমে কাজ করছি — এমপ্লয়ি, ম্যানেজার এবং ডেইলি সাইট রেকর্ড নিয়ে। পুরো ওয়েব ওয়ার্কফ্লোর জন্য React ও JavaScript-ও ব্যবহার করি। ভিত্তি হলো DSA এবং Python, C++, JavaScript দিয়ে প্রবলেম সলভিং।",
    freeTime: {
      before: "ফাঁকা সময়ে আমি ",
      read: "পড়া",
      middle: ", জার্নাল লেখা এবং ",
      bicycle: "সাইকেল",
      after: " নিয়ে নতুন জায়গা ঘুরতে ভালোবাসি।",
    },
    projectsTitle: "প্রজেক্টস",
  },
};

const Index = () => {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("en");
  const [projects, setProjects] = useState([]);
  const t = copy[lang];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLang = localStorage.getItem("lang");
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    if (savedLang === "en" || savedLang === "bn") setLang(savedLang);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleLang = () => setLang((prev) => (prev === "en" ? "bn" : "en"));

  return (
    <main className="page">
      <div className="frame">
        <header className="topbar">
          <a
            className="icon-btn"
            href="https://github.com/achibhossengit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <button
            type="button"
            className="lang-btn"
            aria-label="Switch language"
            onClick={toggleLang}
          >
            {lang.toUpperCase()}
          </button>
          <button
            type="button"
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </header>

        <section className="profile">
          <img
            src={profileImage}
            alt={t.name}
            className="avatar"
          />
          <div className="identity">
            <h1>{t.name}</h1>
            <p className="role">{t.role}</p>
            <p className="stack">{t.stack}</p>
          </div>
        </section>

        <div className="divider" role="separator" />

        <section className="content">
          <p className="bio">{t.bio}</p>
          <p className="free-time">
            {t.freeTime.before}
            <a
              className="tag"
              href="https://medium.com/@achibhossen"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.freeTime.read}
            </a>
            {t.freeTime.middle}
            <a
              className="tag"
              href="https://www.strava.com/athletes/164300382"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.freeTime.bicycle}
            </a>
            {t.freeTime.after}
          </p>
        </section>

        <div className="divider" role="separator" />

        <section className="projects">
          <h2 className="section-title">{t.projectsTitle}</h2>
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
