import Divider from "@/components/Divider";
import LogoMarquee from "@/components/LogoMarquee";
import Workstation from "@/components/Workstation";

const SKILLS = [
  "Python",
  "Javascript",
  "Django",
  "React.js",
  "Django Rest Framework",
  "Express.js",
];

const About = () => (
  <section className="flex scroll-mt-20 flex-col gap-4" id="about">
    <Divider label="About Me" />
    <div className="flex max-w-3xl flex-col gap-4 text-base leading-relaxed text-base-content/80">
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
    <ul className="m-0 grid list-none grid-cols-1 gap-x-8 gap-y-2 p-0 font-mono text-sm min-[420px]:grid-cols-2">
      {SKILLS.map((skill) => (
        <li
          className="transition duration-200 ease-portfolio hover:translate-x-1 hover:text-base-content motion-reduce:transform-none"
          key={skill}
        >
          <span className="mr-1.5 text-primary" aria-hidden="true">
            &gt;
          </span>
          {skill}
        </li>
      ))}
    </ul>
    <LogoMarquee />
    <Workstation />
  </section>
);

export default About;
