import React from "react";

// Pulling props.selectedVideo off into the const name "selectedVideo"
const VideoDetail = ({ selectedVideo }) => {
  //   console.log(selectedVideo);
  if (!selectedVideo) return <h2>Loading Spinner Goes Here</h2>;

  const videoId = selectedVideo.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
  console.log(videoUrl);
  return (
    <section>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          title="Video"
          src={videoUrl}
          allowFullScreen
        ></iframe>
      </div>
      <h2>{selectedVideo.snippet.title}</h2>
      <p>{selectedVideo.snippet.description}</p>
    </section>
  );
};

export default VideoDetail;
