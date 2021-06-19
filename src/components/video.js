import React from "react";

const video = ({ videoUrl, videoTitle, ...props }) => {
  return (
    <div className="">
      <iframe
        src={videoUrl}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  );
};

export default video;
