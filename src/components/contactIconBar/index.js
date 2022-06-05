import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillMail,
} from "react-icons/ai";
import Icon from "../../UI/Icon";
const IconBar = () => {
  return (
    <div>
      <Icon href="https://twitter.com/tush_tr604">
        <AiOutlineTwitter />
      </Icon>
      <Icon href="https://github.com/tush-tr">
        <AiFillGithub />
      </Icon>
      <Icon href="https://www.linkedin.com/in/tushar-r-849510116/">
        <AiFillLinkedin />
      </Icon>
      <Icon href="https://www.youtube.com/channel/UCSL_wYi9WB-uPz2_OzKb7bg">
        <AiFillYoutube />
      </Icon>
      <Icon href="mailto: tusharrajpoot43@gmail.com">
        <AiFillMail />
      </Icon>
    </div>
  );
};

export default IconBar;
