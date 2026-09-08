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
    <div className="logo-marquee" aria-label="Technologies">
      <div className="logo-marquee-track">
        {loop.map(({ name, Icon }, index) => (
          <span className="logo-marquee-item" key={`${name}-${index}`} title={name}>
            <Icon aria-hidden="true" />
            <span>{name}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
