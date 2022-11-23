import React from "react";
import { FiSearch } from "react-icons/fi";
import { Timeline } from "react-twitter-widgets";

function Widgets() {
  return (
    <aside className="w-80">
      <div className="flex items-center space-x-2 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus:focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base">
        <FiSearch className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="placeholder-gray-dark bg-transparent outline-none w-full text-sm focus:outline-none"
        />
      </div>
      <div className="mt-5">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "oguzzxyz",
          }}
          options={{
            username: "oguzhanorhan",
            height: "1000",
          }}
        />
      </div>
    </aside>
  );
}

export default Widgets;