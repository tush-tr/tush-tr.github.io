import Projects from "../../components/Work/ProjectList";
import WorkPageWrapper from "./Workpage";
const WorkPage = () => {
  return (
    <WorkPageWrapper>
      <h2 className="heading">Here is some of my work.</h2>
      <Projects />
    </WorkPageWrapper>
  );
};
export default WorkPage;
