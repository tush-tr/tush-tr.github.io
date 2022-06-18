import mypic from "../../assets/mypic.jpeg";
import SideMenuWrapper from "./SideMenuWrapper";
const SideMenu = () => {
  return (
    <SideMenuWrapper>
      <img src={mypic} alt="" />
      <div className="side-menu__text">
        <h3>{"<Tushar Rajpoot />"}</h3>
        <h4><li>Software/web Developer</li></h4>
        <h4><li>DevOps Engineer</li></h4>
        <p>A software engineer specialized in web development with a strong interest in Cloud-Native Technologies</p>
      </div>
    </SideMenuWrapper>
  );
};
export default SideMenu;
