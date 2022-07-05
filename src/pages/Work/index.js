import Projects from "../../components/Work/ProjectList";
import WorkPageWrapper from "./Workpage";
import IconsImage from "../../UI/iconsImage";
const WorkPage = () => {
  return (
    <WorkPageWrapper>
      <IconsImage />
      <h2 className="heading">Here is some of my work.</h2>
      <Projects />
    </WorkPageWrapper>
  );
};
export default WorkPage;
