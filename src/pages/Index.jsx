import { useEffect, useState } from "react";
import About from "@/components/About";
import Divider from "@/components/Divider";
import GithubActivity from "@/components/GithubActivity";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Topbar from "@/components/Topbar";

const Index = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <main className="page">
      <div className="frame">
        <Topbar theme={theme} onToggleTheme={toggleTheme} />
        <Profile />
        <Divider />
        <About />
        <Divider />
        <GithubActivity theme={theme} />
        <Divider />
        <Projects />
      </div>
    </main>
  );
};

export default Index;
