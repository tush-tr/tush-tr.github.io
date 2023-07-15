import { useState } from "react";
import skillList from "./skillsList";
import SkillsCard from "./skillsCard";
const Skills = () => {
  const [skillSet, setSkillSet] = useState(skillList.languages);
  const [activeSkillSet, setActiveSkillSet] = useState("languages");
  const selectHandler = (event) => {
    setSkillSet(skillList[event.target.value]);
    setActiveSkillSet(event.target.value);
  };
  return (
    <SkillsCard>
      <div className="skills-list__skills">
        <button
          onClick={selectHandler}
          className={activeSkillSet === "languages" ? "activeSkillSet" : ""}
          value="languages"
        >
          Programming Languages
        </button>
        <button
          onClick={selectHandler}
          className={activeSkillSet === "backend" ? "activeSkillSet" : ""}
          value="backend"
        >
          Backend
        </button>
        <button
          onClick={selectHandler}
          className={activeSkillSet === "frontend" ? "activeSkillSet" : ""}
          value="frontend"
        >
          Frontend
        </button>
        <button
          onClick={selectHandler}
          className={activeSkillSet === "devops" ? "activeSkillSet" : ""}
          value="devops"
        >
          DevOps
        </button>
        <button
          onClick={selectHandler}
          className={activeSkillSet === "csp" ? "activeSkillSet" : ""}
          value="csp"
        >
          CSPs
        </button>
        <button
          onClick={selectHandler}
          className={activeSkillSet === "monitoring" ? "activeSkillSet" : ""}
          value="monitoring"
        >
          Monitoring
        </button>
        <button
          onClick={selectHandler}
          className={activeSkillSet === "db" ? "activeSkillSet" : ""}
          value="db"
        >
          Databases
        </button>
      </div>
      <div className="skills-card__data">
        <p>{skillSet}</p>
      </div>
    </SkillsCard>
  );
};
export default Skills;
