import gcloudactImage from "../../../assets/gcloudact.jpg";
import bookanycar from "../../../assets/bookanycar.gif";
import nosndb from "../../../assets/noson.jpg";
import runodePng from "../../../assets/RU.png"
import cicdTfPng from "../../../assets/devops-project1.jpg"
import shareSecrets from "../../../assets/share-secrets.gif"
import Icons from "../../../UI/Icons";
import {
  SiTerraform,
  SiGithubactions,
  SiGooglecloud,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiJavascript,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiDocker
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
  {
    id: 4,
    projectHeading: "Share Secrets",
    projectImage: shareSecrets,
    aboutProject: `A vanilla js website to share secrets`,
    technologies: <Icons><SiHtml5 /> <SiCss3/> <SiJavascript /></Icons>,
    github: "https://github.com/tush-tr/vanilla-js-projects/tree/main/share-secrets",
    live:"https://tush-tr.github.io/vanilla-js-projects/share-secrets/"
  },
  {
    id: 5,
    projectHeading: "Runode",
    projectImage: runodePng,
    aboutProject: `A node.js server runner to run server in development mode.`,
    technologies: <Icons><SiNodedotjs /> <SiJavascript /></Icons>,
    github: "https://github.com/tush-tr/vanilla-js-projects/tree/main/share-secrets",
    live:"https://tush-tr.github.io/vanilla-js-projects/share-secrets/"
  },{
    id: 6,
    projectHeading: "CI/CD with Terraform and AWS",
    projectImage: cicdTfPng,
    aboutProject: `Complete CI/CD project with AWS, Docker, Terraform, Github Actions.`,
    technologies: <Icons><SiNodedotjs /> <SiAmazonaws /><SiTerraform /><SiGithubactions /><SiDocker /></Icons>,
    github: "https://github.com/tush-tr/DevOps-Projects/tree/Complete-CI/CD-with-Terraform-AWS",
    live:"https://youtu.be/5sZAx2ylsOo"
  }
];

export default list;
