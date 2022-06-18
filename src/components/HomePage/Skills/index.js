import HomeCard from "../../../UI/HomeCard";
import Skills from "./skills";
import AOS from "aos";
AOS.init();
const SkillSection = () => {
  return (
    <HomeCard
    data-aos="flip-right"
      data-aos-offset="200"
      data-aos-delay="20"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <h2>Tech Stacks</h2>
      <Skills />
    </HomeCard>
  );
};
export default SkillSection;
