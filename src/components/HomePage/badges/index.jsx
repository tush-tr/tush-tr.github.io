import HomeCard from "../../../UI/HomeCard";
import badges from "./badges";
import Wrapper from "./Wrapper";
const Badges = () => {
  return (
    <HomeCard>
      <h2>Some Badges earned by me.</h2>
      <Wrapper>{badges.map((badge) => badge)}</Wrapper>
    </HomeCard>
  );
};
export default Badges;
