import profileImage from "@/assets/hero-image.jpg";

const NAME = "Achib Hossen";

const Profile = () => (
  <section className="profile">
    <div className="avatar-wrap">
      <img src={profileImage} alt={NAME} className="avatar" />
    </div>
    <div className="intro">
      <h1 className="profile-name">{NAME}</h1>
      <p className="profile-role">Fullstack Developer</p>
      <p>
        I'm a self-taught programmer from Bangladesh building
        maintainable web applications driven forward by problem solving.
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
