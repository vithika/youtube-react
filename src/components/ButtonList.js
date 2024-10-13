import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "T-Series",
    "Mixes",
    "Movie musicials",
    "Arjit Singh",
    "Indian pop music",
    "Reverberation",
    "Jukebox",
    "Disha Vakani",
    "Gaming",
    "Vegetarian cuisine",
  ];
  return (
    <div className="flex">
      {list.map((item) => {
        return <Button name={item}></Button>;
      })}
    </div>
  );
};

export default ButtonList;
