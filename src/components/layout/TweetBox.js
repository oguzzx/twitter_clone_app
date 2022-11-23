import React from "react";
import { FiImage } from "react-icons/fi";
import { RiFileGifLine } from "react-icons/ri";
import { BiPoll } from "react-icons/bi";
import { GrSchedule } from "react-icons/gr";
import { BsEmojiSmile } from "react-icons/bs";

function TweetBox({ content, setContent, sendTweet }) {
  return (
    <div className="flex-1 flex flex-col mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent "
        placeholder="What's Happening"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div className="flex items-center justify-between ">
        <div className="flex -ml-3 ">
          <div className=" flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light">
            <FiImage className="w-6 h-6 text-primary-base " />
          </div>
          <div className=" flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light">
            <RiFileGifLine className="w-6 h-6 text-primary-base " />
          </div>
          <div className=" flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light">
            <BiPoll className="w-6 h-6 text-primary-base " />
          </div>
          <div className=" flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light">
            <BsEmojiSmile className="w-6 h-6 text-primary-base " />
          </div>
          <div className=" flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light">
            <GrSchedule className="w-6 h-6 text-primary-base " />
          </div>
        </div>
        <button
          onClick={() => sendTweet()}
          className=" bg-primary-base text-white rounded-full px-4 py-2 font-medium "
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

export default TweetBox;
