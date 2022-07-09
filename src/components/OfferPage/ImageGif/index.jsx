import offerGif from "../../../assets/work.gif";
const ImageGif = () => {
  return <img style={styles.image} src={offerGif} alt="" />;
};
export default ImageGif;

const styles = {
  image: {
    textAlign: "center",
    width: "80vw",
    boxShadow: "2px 3px 4px 0px",
    mixBlendMode: "plus-lighter",
    borderRadius: "1%"
  },
};
