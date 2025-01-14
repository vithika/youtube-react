import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
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
        return <Button key={item.name} name={item}></Button>;
      })}
    </div>
  );
};

export default ButtonList;
