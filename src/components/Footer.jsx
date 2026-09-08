import { FaGithub, FaLinkedin } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/achibhossengit",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/achibhossen/",
    Icon: FaLinkedin,
  },
];

const SocialLinks = ({ className = "" }) => (
  <div className={className} aria-label="Social links">
    {SOCIAL_LINKS.map(({ label, href, Icon }) => (
      <a
        className="text-xl text-base-content/65 transition hover:-translate-y-1 hover:text-primary"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        key={label}
      >
        <Icon aria-hidden="true" />
      </a>
    ))}
  </div>
);

const Footer = () => (
  <footer className="mt-20 pb-6 text-center font-mono text-xs text-base-content/65">
    <aside className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-5 lg:flex">
      <SocialLinks className="flex flex-col items-center gap-5" />
      <span
        className="block h-28 w-px shrink-0 bg-base-content opacity-60"
        aria-hidden="true"
      />
    </aside>

    <aside className="fixed bottom-0 right-6 z-40 hidden flex-col items-center gap-5 lg:flex">
      <a
        className="font-mono text-xs tracking-widest text-base-content/70 transition-colors [writing-mode:vertical-rl] hover:text-primary"
        href="mailto:mail.achibhossen@gmail.com"
      >
        mail.achibhossen@gmail.com
      </a>
      <span
        className="block h-28 w-px shrink-0 bg-base-content opacity-60"
        aria-hidden="true"
      />
    </aside>

    <SocialLinks className="mb-7 flex items-center justify-center gap-6 lg:hidden" />

    <div className="flex flex-col gap-3">
      <p className="m-0">
        Inspired from{" "}
        <a
          className="transition-colors hover:text-primary"
          href="https://github.com/mustaquenadim/mustaquenadim.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mustaque Nadim
        </a>
      </p>
      <p className="m-0">
        Developed by{" "}
        <a
          className="transition-colors hover:text-primary"
          href="https://github.com/achibhossengit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Achib Hossen
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
