import {
  SiC,
  SiCplusplus,
  SiCloudflare,
  SiCloudinary,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
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
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Cloudflare", Icon: SiCloudflare, color: "#F38020" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Django", Icon: SiDjango, color: "#44B78B" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "Redis", Icon: SiRedis, color: "#FF4438" },
  { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "C", Icon: SiC, color: "#A8B9CC" },
  { name: "Cloudinary", Icon: SiCloudinary, color: "#3448C5" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Linux", Icon: SiLinux, color: "#FCC624" },
  { name: "Express", Icon: SiExpress, color: "light-dark(#000000, #FFFFFF)" },
  { name: "DRF", Icon: SiDjango, color: "#A30000" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "CSS", Icon: SiCss3, color: "#1572B6" },
  { name: "GitHub", Icon: SiGithub, color: "light-dark(#181717, #FFFFFF)" },
];

const LogoMarquee = () => {
  const loop = [...LOGOS, ...LOGOS];

  return (
    <div
      className="overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] hover:[&_.marquee-track]:[animation-play-state:paused]"
      aria-label="Technologies"
    >
      <div className="marquee-track flex w-max items-center gap-10 animate-marquee sm:gap-12 motion-reduce:animate-none">
        {loop.map(({ name, Icon, color }, index) => (
          <span
            className="inline-flex shrink-0 items-center justify-center text-base-content/50 transition duration-200 ease-portfolio hover:-translate-y-1 hover:scale-110 hover:text-[var(--brand-color)] motion-reduce:transform-none"
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
