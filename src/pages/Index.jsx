import { useEffect, useState } from "react";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { GitHubCalendar } from "react-github-calendar";
import profileImage from "@/assets/hero-image.jpg";

const GITHUB_USERNAME = "achibhossengit";

const contributionTheme = {
  light: ["#eee8d5", "#b9e4db", "#6fc9bb", "#2aa198", "#1a7a72"],
  dark: ["#1a222d", "#244842", "#3a7a6e", "#5aafa0", "#7dd3c0"],
};

const Hl = ({ children }) => <span className="hl">{children}</span>;

/** Career start — change this to adjust experience years */
const CAREER_START = new Date("2025-01-01");

const getExperienceLabel = (lang) => {
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = (Date.now() - CAREER_START.getTime()) / msPerYear;
  const rounded = Math.max(0.5, Math.floor(years * 2) / 2);
  return lang === "bn" ? `${rounded}+ বছর` : `${rounded}+ years`;
};

const copy = {
  en: {
    name: "Achib Hossen",
    projectsTitle: "Projects",
    activityTitle: "GitHub",
    visitsLabel: "visits",
    intro: (
      <p>
        Hi, I&apos;m <Hl>Achib Hossen</Hl>, a <Hl>Backend Developer</Hl>{" "}
        specializing in building scalable, maintainable, and reliable backend
        solutions with <Hl>Django</Hl>, <Hl>Django REST Framework</Hl>, and{" "}
        <Hl>PostgreSQL</Hl>.
      </p>
    ),
    bio: (experience) => (
      <>
        <p>
          Over the past <Hl>{experience}</Hl>, I&apos;ve built and maintained
          production-ready APIs, focusing on clean architecture, performance,
          and long-term maintainability.
        </p>
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
  },
  bn: {
    name: "আছিব হোসেন",
    projectsTitle: "প্রজেক্টস",
    activityTitle: "গিটহাব",
    visitsLabel: "ভিজিট",
    intro: (
      <p>
        হাই, আমি <Hl>আছিব হোসেন</Hl> — একজন <Hl>Backend Developer</Hl>.{" "}
        <Hl>Django</Hl>, <Hl>Django REST Framework</Hl> এবং <Hl>PostgreSQL</Hl>{" "}
        দিয়ে scalable, maintainable ও reliable backend solution বানাতে
        বিশেষজ্ঞ।
      </p>
    ),
    bio: (experience) => (
      <>
        <p>
          গত <Hl>{experience}</Hl> ধরে production-ready API বানিয়েছি ও maintain
          করেছি — clean architecture, performance এবং long-term
          maintainability-এর উপর ফোকাস রেখে।
        </p>
        <p>
          এখন একটি <Hl>multi-tenant SaaS</Hl> অ্যাপে কাজ করছি, যা construction
          company-দের বিভিন্ন site-এ worker ও expense ম্যানেজ করতে সাহায্য করে।
        </p>
        <p>
          সফটওয়্যার ডেভেলপমেন্ট যাত্রা শুরু হয়েছিল <Hl>DSA</Hl>,{" "}
          <Hl>algorithms</Hl> ও <Hl>problem-solving</Hl> দিয়ে — <Hl>C</Hl>,{" "}
          <Hl>C++</Hl> এবং <Hl>Python</Hl> ব্যবহার করে। পথে <Hl>React</Hl>,{" "}
          <Hl>Node.js</Hl>সহ আরও কিছু এক্সপ্লোর করেছি পুরো web development
          workflow বোঝার জন্য। এখন মূল ফোকাস backend development — reliable,
          scalable ও maintainable সিস্টেম বানানো।
        </p>
      </>
    ),
    freeTime: {
      before: "কোডিংয়ের বাইরে আমি ",
      read: "পড়া",
      middle: ", জার্নাল লেখা এবং নতুন জায়গা ঘোরা — ",
      bicycle: "সাইকেল",
      after: " নিয়ে উপভোগ করি।",
    },
  },
};

const VISIT_CACHE_KEY = "portfolio-visit-count";
const VISIT_COUNTER_URL =
  "https://hitscounter.dev/api/hit?url=https%3A%2F%2Fachibhossen.me&label=Visitors&color=%237dd3c0";

const parseVisitCount = (svgText) => {
  const labelMatch = svgText.match(/aria-label="[^"]*?(\d[\d,]*)\s*\/\s*(\d[\d,]*)"/i);
  if (labelMatch) return Number(labelMatch[1].replace(/,/g, ""));
  const titleMatch = svgText.match(/<title>[^<]*?(\d[\d,]*)\s*\/\s*(\d[\d,]*)/i);
  if (titleMatch) return Number(titleMatch[1].replace(/,/g, ""));
  return null;
};

const Index = () => {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("en");
  const [projects, setProjects] = useState([]);
  const [visits, setVisits] = useState(null);
  const t = copy[lang];
  const experience = getExperienceLabel(lang);

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

  useEffect(() => {
    const cached = sessionStorage.getItem(VISIT_CACHE_KEY);
    if (cached) {
      setVisits(Number(cached));
      return;
    }

    let active = true;
    fetch(VISIT_COUNTER_URL)
      .then((res) => res.text())
      .then((svg) => {
        const count = parseVisitCount(svg);
        if (!active || count == null) return;
        sessionStorage.setItem(VISIT_CACHE_KEY, String(count));
        setVisits(count);
      })
      .catch(() => {});

    return () => {
      active = false;
    };
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
          <h1 className="sr-only">{t.name}</h1>
          <img
            src={profileImage}
            alt={t.name}
            className="avatar"
          />
          <div className="intro">{t.intro}</div>
        </section>

        <div className="divider" role="separator" />

        <section className="content">
          <div className="bio">{t.bio(experience)}</div>
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

        <div className="divider" role="separator" />

        <section className="activity">
          <h2 className="section-title">{t.activityTitle}</h2>
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

        {visits != null && (
          <p className="visit-count" aria-live="polite">
            {visits.toLocaleString(lang === "bn" ? "bn-BD" : "en-US")} {t.visitsLabel}
          </p>
        )}
      </div>
    </main>
  );
};

export default Index;
