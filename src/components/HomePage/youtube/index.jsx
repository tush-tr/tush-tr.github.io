import Wrapper from "./Youtubewrapper";
import VideoCard from "./VideoCard";
import list from "./list";
import styles from "./style.module.css"
const Youtube = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>Some of my Youtube Videos</h2>
      <Wrapper>
        {list.map(({ name, video }) => (
          <VideoCard>
            {video}
            <h3>{name}</h3>
          </VideoCard>
        ))}
      </Wrapper>
    </div>
  );
};
export default Youtube;
