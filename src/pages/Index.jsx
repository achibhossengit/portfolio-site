import { useEffect, useState } from "react";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { GitHubCalendar } from "react-github-calendar";
import profileImage from "@/assets/hero-image.jpg";

const GITHUB_USERNAME = "achibhossengit";

const contributionTheme = {
  light: ["#eee8d5", "#b9e4db", "#6fc9bb", "#2aa198", "#1a7a72"],
  dark: ["#1a222d", "#244842", "#3a7a6e", "#5aafa0", "#7dd3c0"],
};

const Stack = ({ children }) => <span className="hl-stack">{children}</span>;
const Key = ({ children }) => <span className="hl-key">{children}</span>;

const copy = {
  en: {
    name: "Achib Hossen",
    projectsTitle: "Projects",
    activityTitle: "GitHub",
    visitsLabel: "visits",
    intro: (
      <>
        Hi, I am <span className="hl-name">Achib Hossen</span> a{" "}
        <span className="hl-role">Backend developer</span> working with{" "}
        <Stack>Django</Stack>, <Stack>DRF</Stack>, <Stack>Postgres</Stack>,{" "}
        <Stack>Docker</Stack>, <Stack>React</Stack>, <Stack>Node.js</Stack> etc.
      </>
    ),
    bio: (
      <>
        I help to build <Key>maintainable Backend solution</Key>. Last{" "}
        <Key>1.5+ years</Key> I worked with <Stack>Django</Stack>,{" "}
        <Stack>DRF</Stack> and <Stack>Postgres</Stack> etc. Before that I
        explore <Stack>React</Stack>, <Stack>Node.js</Stack> etc to understand
        the complete <Key>web development workflow</Key>. I started my journey
        with <Key>DSA</Key>, <Key>Algorithm</Key>, <Key>Problem solving</Key>{" "}
        with <Stack>C</Stack>, <Stack>C++</Stack>, <Stack>Python</Stack>.
      </>
    ),
    freeTime: {
      before: "In free time I love to ",
      read: "read",
      middle: ", ",
      journal: "writing journal",
      and: " and ",
      explore: "explore new places",
      with: " with ",
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
      <>
        হাই, আমি <span className="hl-name">আছিব হোসেন</span> — একজন{" "}
        <span className="hl-role">Backend developer</span>. কাজ করি{" "}
        <Stack>Django</Stack>, <Stack>DRF</Stack>, <Stack>Postgres</Stack>,{" "}
        <Stack>Docker</Stack>, <Stack>React</Stack>, <Stack>Node.js</Stack>{" "}
        ইত্যাদি নিয়ে।
      </>
    ),
    bio: (
      <>
        আমি <Key>maintainable Backend solution</Key> বানাতে সাহায্য করি। গত{" "}
        <Key>১.৫+ বছর</Key> ধরে <Stack>Django</Stack>, <Stack>DRF</Stack> এবং{" "}
        <Stack>Postgres</Stack> নিয়ে কাজ করছি। তার আগে সম্পূর্ণ{" "}
        <Key>web development workflow</Key> বোঝার জন্য <Stack>React</Stack>,{" "}
        <Stack>Node.js</Stack> এক্সপ্লোর করেছি। যাত্রা শুরু{" "}
        <Key>DSA</Key>, <Key>Algorithm</Key>, <Key>Problem solving</Key> দিয়ে —{" "}
        <Stack>C</Stack>, <Stack>C++</Stack>, <Stack>Python</Stack> সহ।
      </>
    ),
    freeTime: {
      before: "ফাঁকা সময়ে আমি ",
      read: "পড়া",
      middle: ", ",
      journal: "জার্নাল লেখা",
      and: " এবং ",
      explore: "নতুন জায়গা ঘোরা",
      with: " — ",
      bicycle: "সাইকেল",
      after: " নিয়ে।",
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
          <p className="intro">{t.intro}</p>
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
            <span className="hl-key">{t.freeTime.journal}</span>
            {t.freeTime.and}
            <span className="hl-key">{t.freeTime.explore}</span>
            {t.freeTime.with}
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
