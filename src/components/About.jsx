import Hl from "@/components/Hl";

const About = () => (
  <section className="content">
    <div className="bio">
      <p>
        Currently working on a <Hl>multi-tenant SaaS</Hl> application that
        helps construction companies manage workers and expenses across
        different sites.
      </p>
      <p>
        My journey into software development started with <Hl>DSA</Hl>,{" "}
        <Hl>algorithms</Hl>, and <Hl>problem-solving</Hl>, using <Hl>C</Hl>,{" "}
        <Hl>C++</Hl>, and <Hl>Python</Hl>. Along the way, I explored{" "}
        <Hl>React</Hl>, <Hl>Node.js</Hl>, and other technologies to better
        understand the complete web development workflow. Now, I&apos;m
        primarily focused on backend development, building reliable, scalable,
        and maintainable systems.
      </p>
    </div>
    <p className="free-time">
      Outside of coding, I enjoy{" "}
      <a
        className="tag"
        href="https://medium.com/@achibhossen"
        target="_blank"
        rel="noopener noreferrer"
      >
        reading
      </a>
      , writing in my journal, and exploring new places by{" "}
      <a
        className="tag"
        href="https://www.strava.com/athletes/164300382"
        target="_blank"
        rel="noopener noreferrer"
      >
        bicycle
      </a>
      .
    </p>
  </section>
);

export default About;
