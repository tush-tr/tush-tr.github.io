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
      <Icon>
        <AiFillGithub />
      </Icon>
      <Icon>
        <AiFillLinkedin />
      </Icon>
      <Icon>
        <AiFillYoutube />
      </Icon>
      <Icon href="mailto: tusharrajpoot43@gmail.com">
        <AiFillMail />
      </Icon>
    </div>
  );
};

export default IconBar;
