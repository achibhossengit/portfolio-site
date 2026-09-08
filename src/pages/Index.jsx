import { useEffect, useState } from "react";
import About from "@/components/About";
import Footer from "@/components/Footer";
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
    <main className="flex min-h-screen items-start justify-center bg-base-100 px-4 pb-6 pt-16 font-sans text-base-content">
      <Topbar theme={theme} onToggleTheme={toggleTheme} />
      <div className="flex w-full max-w-[800px] flex-col overflow-x-clip">
        <Profile />
        <About />
        <GithubActivity theme={theme} />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
