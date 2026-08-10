import { useEffect, useState } from "react";
import { FaUser, FaSun, FaMoon } from "react-icons/fa";
import profileImage from "@/assets/hero-image.jpg";

const copy = {
  en: {
    name: "Achib Hossen",
    role: "Backend developer",
    stack: "Django, DRF, Postgres, etc.",
    bio: "Hi, I am glad to see you! I help build maintainable backend solutions. For the last 1.5+ years I have worked with Django, DRF, and Postgres. Before that I explored React, Node.js, and more to understand the full web development workflow. I started my journey with DSA, algorithms, and problem solving in C, C#, and Python.",
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
    stack: "Django, DRF, Postgres, ইত্যাদি",
    bio: "হাই, আপনাকে দেখে ভালো লাগলো! আমি মেইনটেইনেবল ব্যাকএন্ড সলিউশন বানাতে সাহায্য করি। গত ১.৫+ বছর ধরে Django, DRF এবং Postgres নিয়ে কাজ করছি। তার আগে পুরো ওয়েব ডেভেলপমেন্ট ওয়ার্কফ্লো বোঝার জন্য React, Node.js ইত্যাদি এক্সপ্লোর করেছি। যাত্রা শুরু হয়েছিল DSA, অ্যালগরিদম এবং C, C#, Python দিয়ে প্রবলেম সলভিং দিয়ে।",
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
          <button
            type="button"
            className="icon-btn"
            aria-label="Profile"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaUser />
          </button>
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
