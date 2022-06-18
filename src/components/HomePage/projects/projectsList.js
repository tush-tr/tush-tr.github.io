import gcloudactImage from "../../../assets/gcloudact.jpg";
import bookanycar from "../../../assets/bookanycar.jpg";
import nosndb from "../../../assets/noson.jpg";
const list = [
  {
    id: 1,
    projectHeading: "GcloudAct",
    projectImage: gcloudactImage,
    aboutProject: `Gcloudact is a Terraform module to automate the deployment and hosting process of your own runners on Google cloud to run jobs in your GitHub Actions workflows. It makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.`,
    technologies: "Terraform, Google Cloud, Github Actions",
    github: "https://github.com/tush-tr/gcloudact",
    live: "https://github.com/tush-tr/gcloudact",
  },
  {
    id: 2,
    projectHeading: "Book Any Car",
    projectImage: bookanycar,
    aboutProject: `Like Ola, Uber applications, I used same idea with some of another functionalities. I started working on this project from 24 feb 2021 and created the project using node.js, mongoDB and EJS(tightly coupled). Then I migrated the project to separate backend and frontend applications.`,
    technologies: "React.js, Node.js, MongoDB",
    github: "https://github.com/tush-tr/BookAnyCar",
    live: "https://tush-tr.github.io/BookAnyCar/",
  },
  {
    id: 3,
    projectHeading: "Noson DB",
    projectImage: nosndb,
    aboutProject: `A JavaScript package to use json file as a database. A json based database you can use in your nodejs projects just by installing the package.
    nosondb enables you to use a json file as a database for your project.`,
    technologies: "Node.js, JavaScript",
    github: "https://github.com/tush-tr/nosondb",
    live: "https://www.npmjs.com/package/@tush-tr/nosondb",
  },
];

export default list;
