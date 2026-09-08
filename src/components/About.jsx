import Divider from "@/components/Divider";
import LogoMarquee from "@/components/LogoMarquee";

const SKILLS = [
  "Python",
  "Javascript",
  "Django",
  "React.js",
  "Django Rest Framework",
  "Express.js",
];

const About = () => (
  <section className="flex scroll-mt-4 flex-col gap-3" id="about">
    <Divider label="About Me" />
    <div className="flex flex-col gap-3 text-base leading-relaxed">
      <p>
        I started programming by writing code, but over time I became more
        interested in what happens behind it — how applications are structured,
        how data flows through a system, and what makes software reliable in the
        real world.
      </p>
      <p>
        I&apos;m a Backend / Full-Stack Developer focused on building practical,
        production-ready applications. I enjoy designing APIs, databases,
        authentication, and business logic, while also working across the
        frontend and deployment side when needed.
      </p>
      <p>
        I don&apos;t define myself by a fixed list of technologies. I believe
        good developers should be able to learn, adapt, and choose the right
        tools for the problem. Most of what I learn comes from building real
        projects, solving real problems, and continuously improving the way I
        design and ship software.
      </p>
    </div>
    <ul className="m-0 grid list-none grid-cols-2 gap-x-6 gap-y-1.5 p-0 font-mono text-sm">
      {SKILLS.map((skill) => (
        <li key={skill}>
          <span className="mr-1.5 text-primary" aria-hidden="true">
            &gt;
          </span>
          {skill}
        </li>
      ))}
    </ul>
    <LogoMarquee />
  </section>
);

export default About;
