import React from "react";

function UserBox() {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-300">
      <img src="" alt="profil resmi" className="h-11 w-11 rounded-full" />
      <div className="flex flex-col">
        <span className="font-bold text-md text-black">Oğuzhan Orhan</span>
        <span className="text-sm text-gray-dark">@oguzhanorhan</span>
      </div>
      <div className="flex space-x-0.5">
        <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
      </div>
    </div>
  );
}

export default UserBox;
