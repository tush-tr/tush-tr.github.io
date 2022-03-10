import Template from "./template";
const Projects = () => {
  return (
    <div className="resume-section projects">
      <h3 className="resume-section-title">Projects</h3>
      <div className="resume-section-content project-info">
        <Template
          title="Book Any Car"
          desc="A car rental system website built using MERN stack(MongoDB,Express,React,Node.js)"
          link="https://tush-tr.github.io/BookAnyCar/"
        >
          <a href="https://github.com/tush-tr/BookAnyCar">Live Link</a>
        </Template>
        <Template
        title="Gcloudact"
        desc="A Terraform module for hosting your own runner for CI/CD on Google Cloud to run jobs in your GitHub Actions workflows."
        link="https://github.com/tush-tr/gcloudact"
        />
        <Template
        title="NosonDB"
        desc=" A Simple , Lightweight , Efficent JSON based database for Nodejs."
        link="https://www.npmjs.com/package/@tush-tr/nosondb"
        />
        <Template
        title="My Blog website"
        desc="A blog website, built using nodejs, react, deployed to github pages using github actions."
        link="https://tush-tr.github.io/blogs/"
        />

      </div>
      <p className="project-info">
        See more at{" "}
        <a href="https://tush-tr.github.io/#/projects">
          tush-tr.github.io/projects
        </a>
      </p>
    </div>
  );
};
export default Projects;
