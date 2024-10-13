import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-xl ">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-10 w-10 p-2 m-7 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAADIyMjZ2dkeHh7c3NwjIyPPz8+9vb0/Pz8uLi7n5+f7+/uhoaH4+Pji4uIpKSlsbGzy8vKampqAgIBcXFxQUFCHh4dHR0cSEhKqqqpnZ2cYGBi0tLQ2NjYLCwuPj48eGMLsAAAClElEQVR4nO3c6XKqQBCGYWQUREDZBCUBc/9XeeJJrNKqMMuvmcb3uYLuYpvlG6IIAAAAAAAAAAAAAchVHDCV23dS7Nv6kmyDlVzqdl/Y9ZJ2h03wDl1q00t58V2onUtp7qW9+q7S1rU19TLefNdo7zbqe4kz3xW6yGJdL83guz43Q6O7MInv8twkmktTlL6rc1Uuf27yD9/FufpYHgsoAV/LVwe12EzquzZ3y+MAmvFruRlV+a7NVbX8zKzqbbaq70wUb31X52arG5w1ne/y3HS6sVmUyho1G2abk6AXWjXpe4mOpZyZZnk0NBMd976LtLU39vKtOfsu08ZZ++w/OXWfvmvVu3Yny1Z+G9oFy60RAAAAAAAAAH8p1D5gymaV+SGu++wQsKyvtXmmJ3kmYDNwm1kt0orZpLWINQpKnA3G6yJm4+y+dabvZU0btKvaOl9TqOEo5k32oNlwXlUQaFURrVWF52jGL02scU1R4Lz2XZyr+m1ijcLezZVujnYUNAG4G7Tz51TIgbMfF0OscQw8nPXs03BMK4paMYfObsYDdFE0zb6rtDOb4qb/5R8C2pk14+VX6VD3WcD6erA6P/ur2Pk+jK2zc1nRBAAAAAAAAPCnRqXBUrYHzu+OafB7m3Vqt6hZ7HrfpdrodxY/n2xG32XaGo13WyNps8nQTTEKSpxtR/2dFovKaMz6vzWuKtYo5oH5cdPFGlvf1bnSxBpPIv448+y8HKJXwv4JutkkxBpD9SbNKAHRjFfzu8QaxYyYH3Sjs3XFGr98l+fm641ijZOk+YwxPjeKGdIkxojm97URsZ6x2fRWsUbVCvh2zu3y5/JVOnV9lQSr6rvJJdbYnFTATi5LmgAAAAAAAAAAAGH5B3/MZYTVAkkqAAAAAElFTkSuQmCC"
          alt="menu"
        ></img>
        <a href="/">
          <img
            className="h-24 w-18"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-A-EgdOgubQOK9JO2qk1kKUct0s7tkcOiHo2X7nfod7ilHldbMEwn3GzqLzv3LHKW6tk&usqp=CAU"
            alt="youtube-logo"
          ></img>
        </a>
      </div>
      <div className="my-8 py-2 col-span-10">
        <input
          className="w-6/12 px-3 text-center  rounded-l-full border border-gray-700"
          type="text"
          placeholder="Search for video"
        ></input>
        <button className="px-5 bg-gray-100 rounded-r-full border border-gray-700">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-10 w-10 p-2 m-8"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          alt="user"
        ></img>
      </div>
    </div>
  );
};

export default Header;
