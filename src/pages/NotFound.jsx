import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-start justify-center bg-base-100 p-4 font-sans text-base-content">
      <div className="w-full max-w-[720px] border border-base-content/40 px-6 py-12 text-center">
        <h1 className="mb-2 text-3xl">404</h1>
        <p className="mb-5 text-base-content/70">Page not found</p>
        <a href="/" className="link text-primary">
          Return home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
