import profileImage from "@/assets/hero-image.jpg";
import Hl from "@/components/Hl";

const NAME = "Achib Hossen";

const Profile = () => (
  <section className="profile">
    <h1 className="sr-only">{NAME}</h1>
    <img src={profileImage} alt={NAME} className="avatar" />
    <div className="intro">
      <p>
        Hi, I&apos;m <Hl>Achib Hossen</Hl>, a <Hl>Backend Developer</Hl>{" "}
        specializing in building scalable, maintainable, and reliable backend
        solutions with <Hl>Django</Hl>, <Hl>Django REST Framework</Hl>, and{" "}
        <Hl>PostgreSQL</Hl>.
      </p>
    </div>
  </section>
);

export default Profile;
