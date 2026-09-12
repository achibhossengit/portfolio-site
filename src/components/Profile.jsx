const Profile = () => (
  <section
    className="flex w-full scroll-mt-20 items-stretch gap-6 animate-fade-up max-[400px]:flex-col max-[400px]:items-start motion-reduce:animate-none"
    id="intro"
  >
    <div className="group relative w-[148px] shrink-0 self-stretch max-sm:w-28 max-[400px]:h-44 max-[400px]:w-36">
      <div
        className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 rounded-sm border border-primary transition-transform duration-300 ease-portfolio group-hover:translate-x-3 group-hover:translate-y-3 motion-reduce:transform-none"
        aria-hidden="true"
      />
      <div className="relative h-full overflow-hidden rounded-sm border border-base-content/40 transition duration-300 ease-portfolio group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-lift motion-reduce:transform-none">
        <img
          src="/profile/images/hero-image.jpg"
          alt="Achib"
          className="block h-full w-full object-cover object-[center_18%] saturate-[.72] transition duration-300 ease-portfolio group-hover:saturate-100"
        />
        <span
          className="pointer-events-none absolute inset-0 bg-primary opacity-20 mix-blend-color transition-opacity duration-300 ease-portfolio group-hover:opacity-0"
          aria-hidden="true"
        />
      </div>
    </div>
    <div className="flex min-w-0 flex-1 flex-col items-start gap-2 text-base leading-relaxed">
      <div>
        <h1 className="m-0 text-3xl font-bold tracking-tight">Achib Hossen</h1>
        <p className="m-0 font-mono text-xl font-medium text-primary">
          Fullstack Developer
        </p>
      </div>
      <p className="m-0 max-w-xl text-base-content/80">
        I'm a self-taught programmer from Bangladesh building maintainable web
        applications to solve real-world problems.
      </p>
      <a
        className="btn btn-outline btn-sm mt-2 transition duration-200 ease-portfolio hover:-translate-x-1 hover:-translate-y-1 hover:border-primary hover:bg-transparent hover:text-primary hover:shadow-[4px_4px_0_0_var(--color-primary)] focus-visible:-translate-x-1 focus-visible:-translate-y-1 focus-visible:border-primary focus-visible:text-primary focus-visible:shadow-[4px_4px_0_0_var(--color-primary)] motion-reduce:transform-none"
        href="/resume/Achib-Hossen-Fullstack-Developer-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  </section>
);

export default Profile;
