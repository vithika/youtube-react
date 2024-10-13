import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className=" p-5 shadow-lg w-60">
      <ul className="p-3">
        <li className="pl-3 py-3 font-thin">
          {" "}
          <Link to="/"> 🏠 Home </Link>
        </li>
        <li className="pl-3 py-1 font-thin"> 🃑 Shorts</li>
        <li className="pl-3 py-3 font-thin "> 🎬 Subcriptions</li>
        <hr class="border-t-1 border-gray-300 " />
      </ul>
      <ul className="p-3">
        <li className="pl-3 py-3 font-bold"> You ﹥</li>
        <li className="pl-3 py-3 font-thin"> 🕓 History</li>
        <li className="pl-3 py-3 font-thin"> ▶️ Playlists</li>
        <li className="pl-3 py-3 font-thin"> 🕓 Watch later </li>
        <li className="pl-3 py-3 font-thin"> 👍🏻 Liked Videos</li>
        <hr class="border-t-1 border-gray-300 " />
      </ul>
      <ul className="p-3">
        <li className="pl-3 py-3 font-bold"> Explore </li>
        <li className="pl-3 py-3 font-thin"> 🔥 Trending</li>
        <li className="pl-3 py-3 font-thin"> 🛍 Shopping</li>
        <li className="pl-3 py-3 font-thin"> 𝄞 Music </li>
        <li className="pl-3 py-3 font-thin"> 🎬 Movies</li>
        <li className="pl-3 py-3 font-thin"> 🎮 Gaming</li>
        <li className="pl-3 py-3 font-thin"> 📰 News</li>
        <li className="pl-3 py-3 font-thin"> 🥼 Fashion & Beauty</li>
        <li className="pl-3 py-3 font-thin"> 💢 Podcasts</li>
        <li className="pl-3 py-3 font-thin"> 🏆 Sports</li>
        <hr class="border-t-1 border-gray-300 " />
      </ul>
      <ul className="p-3">
        <li className="pl-3 py-3 font-bold"> More from Youtube </li>
        <li className="pl-3 py-3 font-thin"> Youtube Premium</li>
        <li className="pl-3 py-3 font-thin"> Youtube Music</li>
        <li className="pl-3 py-3 font-thin"> Youtube Kids </li>
        <hr class="border-t-1 border-gray-300 " />
      </ul>
      <ul className="p-3">
        <li className="pl-3 py-3 font-thin"> Settings </li>
        <li className="pl-3 py-3 font-thin"> Report History</li>
        <li className="pl-3 py-3 font-thin"> ? Help</li>
        <li className="pl-3 py-3 font-thin"> Send Feedback </li>
        <hr class="border-t-1 border-gray-300 " />
      </ul>
    </div>
  );
};

export default Sidebar;
