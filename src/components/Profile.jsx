import profileImage from "@/assets/hero-image.jpg";

const NAME = "Achib Hossen";

const Profile = () => (
  <section className="profile">
    <img src={profileImage} alt={NAME} className="avatar" />
    <div className="intro">
      <h1 className="profile-name">{NAME}</h1>
      <p>
        I&apos;m a fullstack developer from Bangladesh experienced in building
        scalable web applications driven forward by problem solving.
      </p>
      <a
        className="hire-btn"
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
