import React from "react";
import { GrTwitter } from "react-icons/gr";
import { BiHomeCircle } from "react-icons/bi";
import { SiSharp } from "react-icons/si";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { BsBookmarks } from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import UserBox from "./UserBox";

function Sidebar() {
  return (
    <div className="w-72 flex flex-col justify-between px-2 sticky top-0 h-screen">
      <div>
        <div className="hover:bg-gray-lightest flex items-center justify-center w-12 h-12 rounded-full transform transition-all duration-300 mt-1 mb-4 ml-1">
          <GrTwitter className="text-3xl text-blue-400 w-9 h-9" />
        </div>
        <nav className="mb-5">
          <ul className="flex flex-col cursor-pointer ">
            <li className="flex items-center ml-2 mb-2 hover:bg-primary-light hover:text-primary-base rounded-full py-1.5">
              <BiHomeCircle className="w-7 h-7 mr-4" />{" "}
              <span className="font-bold text-xl">Home</span>
            </li>
            <li className="flex items-center ml-2 mb-2 hover:bg-primary-light hover:text-primary-base rounded-full py-1.5">
              <SiSharp className="w-7 h-7 mr-4" />{" "}
              <span className="font-bold text-xl">Explore</span>
            </li>
            <li className="flex items-center ml-2 mb-2 hover:bg-primary-light hover:text-primary-base rounded-full py-1.5">
              <IoIosNotificationsOutline className="w-7 h-7 mr-4" />{" "}
              <span className="font-bold text-xl">Notifications</span>
            </li>
            <li className="flex items-center ml-2 mb-2 hover:bg-primary-light hover:text-primary-base rounded-full py-1.5">
              <MdOutlineMessage className="w-7 h-7 mr-4" />{" "}
              <span className="font-bold text-xl">Messages</span>
            </li>
            <li className="flex items-center ml-2 mb-2 hover:bg-primary-light hover:text-primary-base rounded-full py-1.5">
              <BsBookmarks className="w-7 h-7 mr-4" />{" "}
              <span className="font-bold text-xl">Bookmarks</span>
            </li>
            <li className="flex items-center ml-2 mb-2 hover:bg-primary-light hover:text-primary-base rounded-full py-1.5">
              <RiFileList2Line className="w-7 h-7 mr-4" />{" "}
              <span className="font-bold text-xl">Lists</span>
            </li>
            <li className="flex items-center ml-2 mb-2 hover:bg-primary-light hover:text-primary-base rounded-full py-1.5">
              <CgProfile className="w-7 h-7 mr-4" />{" "}
              <span className="font-bold text-xl">Profile</span>
            </li>
            <li className="flex items-center ml-2 mb-2 hover:bg-primary-light hover:text-primary-base rounded-full py-1.5">
              <CgMoreO className="w-7 h-7 mr-4" />{" "}
              <span className="font-bold text-xl">More</span>
            </li>
          </ul>
        </nav>
        <button className="bg-primary-base text-white rounded-full py-3 px-8 w-11/12 shadow-lg hover:bg-primary-dark transform transition-all duration-300 ">
          Tweet
        </button>
      </div>
      <UserBox />
    </div>
  );
}

export default Sidebar;
