import React from "react";
import styles from "./VideoComponent.module.css"; // Import your CSS file

const VideoComponent = ({ id }: { id: string }) => {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        className={styles.videoIframe}
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
