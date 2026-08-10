import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="page">
      <div className="frame" style={{ minHeight: "auto", padding: "3rem 1.5rem", textAlign: "center" }}>
        <h1 style={{ margin: "0 0 0.5rem", fontSize: "2rem" }}>404</h1>
        <p style={{ margin: "0 0 1.25rem", color: "var(--muted)" }}>Page not found</p>
        <a href="/" style={{ color: "var(--tag)", textDecoration: "underline" }}>
          Return home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
