import { AiFillHtml5 } from "react-icons/ai";
import { DiReact, DiCss3 } from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiGoland,
  SiGooglecloud,
  SiNodedotjs,
  SiCplusplus,
  SiExpress,
  SiDjango,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
  SiJenkins,
  SiAmazonaws,
  SiDigitalocean,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
// import { GrGraphQl } from "react-icons/gr";
import Icon from "../../../UI/Icon";
import SkillData from "./skillData";
const skillList = {
  languages: (
    <SkillData>
      <div className="skill-data__icons">
        <Icon>
          <IoLogoJavascript />
        </Icon>
        <Icon>
          <SiTypescript />
        </Icon>
        <Icon>
          <SiPython />
        </Icon>
        <Icon>
          <SiGoland />
        </Icon>
        <Icon>
          <SiCplusplus />
        </Icon>
      </div>
      <div className="skill-data_skill-names">
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Golang</li>
        </ul>
        <ul>
          <li>Python</li>
          <li>C/C++</li>
        </ul>
      </div>
    </SkillData>
  ),
  frontend: (
    <SkillData>
      <div className="skill-data__icons">
        <Icon>
          <DiReact />
        </Icon>
        <Icon>
          <SiTypescript />
        </Icon>
        <Icon>
          <SiNextdotjs />
        </Icon>
        <Icon>
          <AiFillHtml5 />
        </Icon>
        <Icon>
          <DiCss3 />
        </Icon>
      </div>
      <div className="skill-data_skill-names">
        <ul>
          <li>React.js</li>
          <li>Next.js</li>
          <li>TypeScript</li>
        </ul>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
        </ul>
      </div>
    </SkillData>
  ),
  backend: (
    <SkillData>
      <div className="skill-data__icons">
        <Icon>
          <SiNodedotjs />
        </Icon>
        <Icon>
          <SiExpress />
        </Icon>
        <Icon>
          <SiGoland />
        </Icon>
        <Icon>
          <SiDjango />
        </Icon>
        <Icon>
          <SiGraphql />
        </Icon>
      </div>
      <div className="skill-data_skill-names">
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>GraphQL</li>
        </ul>
        <ul>
          <li>Golang</li>
          <li>Django</li>
          <li>REST APIs</li>
        </ul>
      </div>
    </SkillData>
  ),
  devops: (
    <SkillData>
      <div className="skill-data__icons">
        <Icon>
          <SiDocker />
        </Icon>
        <Icon>
          <SiKubernetes />
        </Icon>
        <Icon>
          <SiTerraform />
        </Icon>
        <Icon>
          <SiAnsible />
        </Icon>
        <Icon>
          <SiGithubactions />
        </Icon>
        <Icon>
          <SiJenkins />
        </Icon>
      </div>
      <div className="skill-data_skill-names">
        <ul>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>Terraform/Terragrunt</li>
        </ul>
        <ul>
          <li>Github Actions</li>
          <li>Jenkins</li>
          <li>Ansible</li>
        </ul>
      </div>
    </SkillData>
  ),
  csp: (
    <SkillData>
      <div className="skill-data__icons">
        <Icon>
          <SiGooglecloud />
        </Icon>
        <Icon>
          <SiAmazonaws />
        </Icon>
        <Icon>
          <SiDigitalocean />
        </Icon>
      </div>
      <div className="skill-data_skill-names">
        <ul>
          <li>Google Cloud Platform</li>
          <li>Familiar with AWS, Digital Ocean</li>
        </ul>
      </div>
    </SkillData>
  ),
  db: (
    <SkillData>
      <div className="skill-data__icons">
        <Icon>
          <SiMysql />
        </Icon>
        <Icon>
          <SiPostgresql />
        </Icon>
        <Icon>
          <SiMongodb />
        </Icon>
      </div>
      <div className="skill-data_skill-names">
        <ul>
          <li>SQL databases: MySQL, PostgreSQL</li>
          <li>NoSQL Databases: MongoDB</li>
        </ul>
      </div>
    </SkillData>
  ),
};
export default skillList;
