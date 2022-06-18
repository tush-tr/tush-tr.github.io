import HomeCard from "../../../UI/HomeCard";
import ExperienceSection from "./experience";
import AOS from "aos";
AOS.init();
const Experience = () => {
  return (
    <HomeCard
      data-aos="slide-left"
      data-aos-offset="200"
      data-aos-delay="20"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <h2>Where I've worked?</h2>
      <ExperienceSection />
    </HomeCard>
  );
};
export default Experience;
