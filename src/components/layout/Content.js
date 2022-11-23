import React from "react";
import { BsStars } from "react-icons/bs";
import Dvider from "./Dvider";
import TweetBox from "./TweetBox";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { FiShare } from "react-icons/fi";
import { TiTimes } from "react-icons/ti";
import Avatar from "react-avatar";

function Content({ content, setContent, sendTweet, tweets, deleteTweet }) {
  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <BsStars className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex px-4 py-3 space-x-4">
        <Avatar name="Oğuzhan Orhan" size="50" round={true} />
        <TweetBox
          content={content}
          setContent={setContent}
          sendTweet={sendTweet}
        />
      </div>
      <Dvider />
      <div>
        {tweets.map((tweet) => (
          <div className="flex px-4 py-3 space-x-4">
            <Avatar name="Oğuzhan Orhan" size="50" round={true} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-xl text-gray-900">
                    Oğuzhan Orhan
                  </span>
                  <span className="ml-2">@oguuuuuuuuuu</span>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">1h</span>
                  <span className="text-gray-500 text-sm ml-2">
                    <TiTimes
                      onClick={() => deleteTweet(tweet)}
                      className="text-lg"
                    />
                  </span>
                </div>
              </div>
              <p className=" text-lg mt-2">{tweet}</p>
              <div className="flex">
                <div className="flex space-x-28 mt-5 ">
                  <div className="flex hover:text-blue-300">
                    <BiMessageRounded className="w-6 h-6 text-gray-500 rounded-full hover:bg-blue-100 hover:text-blue-300 " />
                    <span className="ml-2">30</span>
                  </div>
                  <div className="flex hover:text-blue-300">
                    <AiOutlineRetweet className="w-6 h-6 text-gray-500 rounded-full hover:bg-blue-100 hover:text-blue-300 " />
                    <span className="ml-2">145</span>
                  </div>
                  <div className="flex hover:text-blue-300">
                    <GrFavorite className="w-6 h-6 text-gray-500 rounded-full hover:bg-blue-100 hover:text-blue-300 " />
                    <span className="ml-2">40</span>
                  </div>
                  <div className="flex hover:text-blue-300">
                    <FiShare className="w-6 h-6 text-gray-500 rounded-full hover:bg-blue-100 hover:text-blue-300 " />
                    <span className="ml-2"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Content;
