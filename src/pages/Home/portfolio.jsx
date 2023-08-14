import AboutMe from "../../components/HomePage/AboutMe";
import Experience from "../../components/HomePage/Experience";
import SkillSection from "../../components/HomePage/Skills";
import Projects from "../../components/HomePage/projects";
import CodeChallengeSection from "../../components/HomePage/CodeChallenges";
import Youtube from "../../components/HomePage/youtube";
import JourneyComponent from "../../components/Journey";
const Portfolio = () => {
  return (
    <div className="home-page-about-section-portfolio-wrapper">
      <AboutMe />
      <JourneyComponent />
      <Experience />
      <SkillSection />
      <CodeChallengeSection />
      <Projects />
      <Youtube />
    </div>
  );
};
export default Portfolio;
