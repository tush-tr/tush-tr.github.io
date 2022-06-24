import gcloudactImage from "../../../assets/gcloudact.jpg";
import bookanycar from "../../../assets/bookanycar.jpg";
import nosndb from "../../../assets/noson.jpg";
import Icons from "../../../UI/Icons";
import {
  SiTerraform,
  SiGithubactions,
  SiGooglecloud,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiJavascript,
  SiExpress
} from "react-icons/si";
const list = [
  {
    id: 1,
    projectHeading: "GcloudAct",
    projectImage: gcloudactImage,
    aboutProject: `A Terraform module for hosting your own runner for CI/CD on Google Cloud to run jobs in your GitHub Actions workflows. 🚀`,
    technologies: (
      <Icons>
        <SiTerraform /> <SiGithubactions /> <SiGooglecloud />{" "}
      </Icons>
    ),
    github: "https://github.com/tush-tr/gcloudact",
    live: "https://github.com/tush-tr/gcloudact",
  },
  {
    id: 2,
    projectHeading: "Book Any Car",
    projectImage: bookanycar,
    aboutProject: `A car rental application like ola, uber.`,
    technologies: (
      <Icons>
        <SiMongodb /> <SiExpress /> <SiReact /> <SiNodedotjs />
      </Icons>
    ),
    github: "https://github.com/tush-tr/BookAnyCar",
    live: "https://tush-tr.github.io/BookAnyCar/",
  },
  {
    id: 3,
    projectHeading: "Noson DB",
    projectImage: nosndb,
    aboutProject: `A JavaScript package to use json file as a database.`,
    technologies: <Icons><SiJavascript /> <SiNodedotjs /></Icons>,
    github: "https://github.com/tush-tr/nosondb",
    live: "https://www.npmjs.com/package/@tush-tr/nosondb",
  },
];

export default list;
