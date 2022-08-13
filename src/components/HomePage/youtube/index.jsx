import Wrapper from "./Youtubewrapper";
import VideoCard from "./VideoCard";
import Frame from "./Frame";
import list from "./list";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
const Youtube = () => {
  const [latestVideos, setLatestVideos] = useState([]);
  const apiUrl =
    "https://script.googleusercontent.com/macros/echo?user_content_key=UtCau4QXjfnKgEeNo2BoNJJc6lTqCOixuHB5Umii-zXijRzo2u4ENCfL8g6qz5p-NVpdqdx_Mmwx0_bvnZCDMYdgVIf5Er-Ym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIm2BjvkZHuilZLQ4bR_EdgrjQlQnvEjOgUEd1PmILXtxpFSxwBbi_Xylf17bW_a3EyW9x89dtcJtNnvflrrIhAAOpjuOURCgtz9Jw9Md8uu&lib=MeFhPfNrU9zObmlZxerQuzk8ANnoPQvAh";
  const getData = async () => {
    const apiData = await fetch(apiUrl);
    const data = await apiData.json();
    setLatestVideos(data.data);
  };
  useEffect(() => {
    getData();
  });
  console.log(latestVideos)
  if (latestVideos.length === 0) {
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
  }
  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>Some of my Youtube Videos</h2>
      <Wrapper>
        {latestVideos.map(({ name, video }) => (
          <VideoCard>
            <Frame
            sourceVideo={video}
             />
             <h3>{name}</h3>
          </VideoCard>
        ))}
      </Wrapper>
    </div>
  );
};
export default Youtube;
