import React from "react";

const VideoCard = ({ items }) => {
  const { snippet, statistics } = items;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72  shadow-md">
      <img
        className=" rounded-lg"
        src={thumbnails.medium.url}
        alt="video"
      ></img>
      <ul>
        <li className="font-bold py-2"> {title}</li>
        <li> {channelTitle}</li>
        <li> {statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ items }) => {
  return (
    <div className="p-1 m-1 border border-red-800">
      <VideoCard items={items} />
    </div>
  );
};

export default VideoCard;
