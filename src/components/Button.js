import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-1 py-1 m-2 rounded-lg bg-gray-200 text-sm ">
        {name}
      </button>
    </div>
  );
};

export default Button;
