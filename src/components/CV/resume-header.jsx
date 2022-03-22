import pic from "./pic2.jpeg"
import "./header.css"
const ResumeHeader = () => {
  return (
    <div className="resume-section resume-header">
      <img src={pic} alt="" />
      <div className="resume-section-text">
        <h1 className="resume-header-name">TUSHAR RAJPOOT</h1>
        <h2 className="resume-header-subname">Full-stack Developer</h2>
        <div className="resume-header-info">
          A passionate developer and DevOps Engineer having 1+ year of
          experience with handson on automating and optimizing critical
          deployments over a large infrastructure.
          Passionate about Web development and Cloud-Native technologies.
        </div>
      </div>

      <div className="resume-section-meta">
        <div className="resume-section-meta-right">
          <div className="resume-section-meta-row">
            <a className="red" href="https://tush-tr.github.io/">
              {" "}
              tush-tr.github.io{" "}
            </a>
          </div>
          <div className="resume-section-meta-row">
            <a className="red" href>
              {" "}
              tusharrajput604@gmail.com{" "}
            </a>
          </div>
          <div className="resume-section-meta-row">(+91)9058015227 </div>
          <div className="resume-section-meta-row">
            <a
              className="red"
              href="https://www.linkedin.com/in/tushar-r-849510116/"
            >
              linkedin.com/in/tushar-r-849510116/{" "}
            </a>
          </div>
          <div className="resume-section-meta-row">
            <a className="red" href="https://github.com/tush-tr">
              {" "}
              github.com/tush-tr{" "}
            </a>
          </div>
          {/* <div className="resume-section-meta-row"><a href /></div> */}
        </div>
      </div>
    </div>
  );
};
export default ResumeHeader;
