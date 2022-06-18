import SocialBar from "./socialbar";
import { FaHackerrank } from "react-icons/fa";
import { SiHackerearth, SiLeetcode, SiTwitter,SiGithub,SiLinkedin } from "react-icons/si";
import Icon from "../../UI/Icon";
const Socials = () => {
  return (
    <SocialBar>
      <div className="social-bar-wrapper">
        <div className="social-bar__icons">
          <Icon href="https://www.hackerrank.com/tush_tr?hr_r=1">
            <FaHackerrank />
          </Icon>
          <Icon href="https://www.hackerearth.com/@tusharrajput604">
            <SiHackerearth />
          </Icon>
          <Icon href="https://leetcode.com/tush_tr/">
            <SiLeetcode />
          </Icon>
          <Icon href="https://twitter.com/tush_tr604">
            <SiTwitter />
          </Icon>
          <Icon href="https://github.com/tush-tr">
              <SiGithub />
          </Icon>
          <Icon href="https://www.linkedin.com/in/tushar-r-849510116/">
              <SiLinkedin />
          </Icon>
        </div>
        <footer>
            Copyright @tush-tr
        </footer>
      </div>
    </SocialBar>
  );
};
export default Socials;
