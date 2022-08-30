import { SmartToy, Star, ThumbUp } from "@mui/icons-material";
import React from "react";

const ViralCards = ({ date, author, likes, avatar, post, key }) => {
  return (
    <div
      className="bg-white shadow-md flex flex-col w-[350px] h-[450px] rounded-md border-[1px] my-2 place-self-center"
      key={key}
    >
      <header className="flex w-full p-2 border-b-2 items-center">
        <div className="flex items-center ">
          <img
            className="object-contain mr-2 w-[50px] h-[50px]"
            src={avatar}
            alt=""
          />
          {/* <span className="text-black font-medium text-sm">{author}</span> */}
        </div>
        <div className="ml-auto">
          <span className="date text-sm mr-2">{date}</span>

          <button className="bg-slate-200 p-1 rounded-md mr-3">
            <SmartToy />
          </button>
          <button className="bg-slate-200 p-1 rounded-md">
            <Star />
          </button>
        </div>
      </header>

      <div className="p-3 text-black">
        <div>
          {post.length > 550 ? (
            <>
              {post.slice(0, 400)}...{" "}
              <span className="font-semibold">Read More</span>
            </>
          ) : (
            post
          )}
        </div>
      </div>

      <footer className="w-full mt-auto p-3 flex items-center border-t-[1px]">
        <div className="flex items-center">
          <ThumbUp className="text-indigo-500 mr-2 " />
          <span>{likes}</span>
        </div>

        <div className="ml-auto">
          <button className="border p-2 text-black rounded-md hover:bg-slate-100 ease-in-out duration-100">
            Edit and Post
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ViralCards;
