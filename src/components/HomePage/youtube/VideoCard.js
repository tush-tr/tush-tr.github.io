import styled from "styled-components";
const VideoCard = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #020c1c;

  & h3 {
    padding: 10px;
  }
  @media only screen and (max-width: 600px) {
    padding-bottom: 56.25%;
    position: relative;
    width: 100%;
    height: 0;
    & iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
export default VideoCard;
