import profileImage from "@/assets/hero-image.jpg";

const NAME = "Achib Hossen";

const Profile = () => (
  <section className="flex w-full scroll-mt-20 items-stretch gap-5 max-[400px]:flex-col max-[400px]:items-start" id="intro">
    <div className="w-[148px] shrink-0 self-stretch max-sm:w-28 max-[400px]:h-44 max-[400px]:w-36">
      <img
        src={profileImage}
        alt={NAME}
        className="block h-full w-full rounded-sm border border-base-content/40 object-cover object-[center_18%]"
      />
    </div>
    <div className="flex min-w-0 flex-1 flex-col items-start gap-2 text-base leading-relaxed">
      <h1 className="m-0 text-3xl font-bold tracking-tight">{NAME}</h1>
      <p className="m-0 font-mono text-sm font-medium text-primary">Fullstack Developer</p>
      <p className="m-0">
        I&apos;m a self-taught programmer from Bangladesh building
        maintainable web applications driven forward by problem solving.
      </p>
      <a
        className="btn btn-outline btn-sm mt-1 hover:border-primary hover:bg-transparent hover:text-primary"
        href="https://www.linkedin.com/in/achibhossen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hire me
      </a>
    </div>
  </section>
);

export default Profile;
