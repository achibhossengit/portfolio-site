import { useEffect, useState } from "react";
import About from "@/components/About";
import Footer from "@/components/Footer";
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
    <main className="flex min-h-screen items-start justify-center bg-base-100 px-5 pb-6 pt-24 font-sans text-base-content sm:px-6 lg:px-8">
      <Topbar theme={theme} onToggleTheme={toggleTheme} />
      <div className="flex w-full max-w-[800px] flex-col overflow-x-clip">
        <Profile />
        <About />
        <Projects theme={theme} />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
