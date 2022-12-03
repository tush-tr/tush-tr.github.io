import Wrapper from "./Wrapper";
import IntroSection from "./IntroSection";
import Frontend from "./frontend";
import Backend from "./backend";
import DevOps from "./DevOps"
const OfferPage = () => {
  return (
    <Wrapper>
      <IntroSection />
      <DevOps />
      <Frontend />
      <Backend />
    </Wrapper>
  );
};
export default OfferPage;
