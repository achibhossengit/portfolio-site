import {
  SiC,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const LOGOS = [
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Django", Icon: SiDjango, color: "#44B78B" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: "light-dark(#000000, #FFFFFF)" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", Icon: SiRedis, color: "#FF4438" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "DRF", Icon: SiDjango, color: "#A30000" },
  { name: "C", Icon: SiC, color: "#A8B9CC" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
];

const LogoMarquee = () => {
  const loop = [...LOGOS, ...LOGOS];

  return (
    <div
      className="overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] hover:[&_.marquee-track]:[animation-play-state:paused]"
      aria-label="Technologies"
    >
      <div className="marquee-track flex w-max items-center gap-12 animate-marquee motion-reduce:animate-none">
        {loop.map(({ name, Icon, color }, index) => (
          <span
            className="inline-flex shrink-0 items-center justify-center text-base-content/55 transition-colors duration-200 hover:text-[var(--brand-color)]"
            key={`${name}-${index}`}
            role="img"
            aria-label={name}
            title={name}
            style={{ "--brand-color": color }}
          >
            <Icon className="size-10" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
