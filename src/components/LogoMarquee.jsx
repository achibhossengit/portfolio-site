import {
  SiDjango,
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
} from "react-icons/si";

const LOGOS = [
  { name: "Python", Icon: SiPython },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Django", Icon: SiDjango },
  { name: "React", Icon: SiReact },
  { name: "Django REST Framework", Icon: SiDjango },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "PostgreSQL", Icon: SiPostgresql },
];

const LogoMarquee = () => {
  const loop = [...LOGOS, ...LOGOS];

  return (
    <div
      className="overflow-hidden border-y border-base-content/25 py-3 hover:[&_.marquee-track]:[animation-play-state:paused]"
      aria-label="Technologies"
    >
      <div className="marquee-track flex w-max items-center gap-7 animate-marquee motion-reduce:animate-none">
        {loop.map(({ name, Icon }, index) => (
          <span
            className="inline-flex items-center gap-2 whitespace-nowrap font-mono text-xs text-base-content/70"
            key={`${name}-${index}`}
            title={name}
          >
            <Icon className="size-4 shrink-0" aria-hidden="true" />
            <span>{name}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
