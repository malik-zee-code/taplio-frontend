import { SmartToy, Star, ThumbUp } from "@mui/icons-material";
import React from "react";

const ViralCards = ({ date, likes, image, id }) => {
  return (
    <div className="bg-white shadow-md flex flex-col w-[350px] h-[450px] rounded-md border-[1px] my-2">
      <header className="flex w-full p-2 border-b-2">
        <img src="" alt="" />
        <div className="ml-auto">
          <span className="date">{date}</span>

          <button className="bg-slate-200 p-2 rounded-md mr-3">
            <SmartToy />
          </button>
          <button className="bg-slate-200 p-2 rounded-md">
            <Star />
          </button>
        </div>
      </header>

      <div className="p-3">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptas
          accusantium dolore, esse a natus! Sunt odio eum vel enim fuga
          officiis, nobis nostrum, eius eos nesciunt possimus ipsa minus.
        </p>
      </div>

      <footer className="w-full mt-auto p-3 flex items-center border-t-[1px]">
        <div className="flex items-center">
          <ThumbUp className="text-indigo-500 mr-2 " />
          <span>92</span>
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
