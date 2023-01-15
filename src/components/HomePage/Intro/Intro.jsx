import IconBar from "../contactIconBar";

const Intro = () => {
  return (
    <div className="intro-section-inner-div">
      <h1 className="intro-section-heading-hi intro-section-item">Hi, I'm</h1>
      <h2 className="intro-section-heading-name intro-section-item">
        Tushar Rajpoot
      </h2>
      <h3 className="intro-section-profile-heading intro-section-item">
        Software/Web Developer | DevOps Engineer
      </h3>
      <h3 className="intro-section-build-things intro-section-item">
        I build things for the web on Cloud.
      </h3>
      <p className="intro-section-paragraph">
        I'm a DevOps Engineer and a passionate Developer having 2+ years of
        hands-on experience in automating and optimizing critical deployments
        over a large infrastructure.
        <br />
        Passionate about Web development and Cloud-Native technologies.
      </p>
      <div className="icon-bar-wrapper">
        <IconBar />
      </div>
    </div>
  );
};
export default Intro;
