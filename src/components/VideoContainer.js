import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const videoData = await data.json();

    setVideos(videoData.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard items={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          {" "}
          <VideoCard items={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
