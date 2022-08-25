import { Info } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";
import ViralCards from "./ViralCards";

const ViralComp = () => {
  return (
    <div className="flex flex-col  w-[80%] min-h-full px-32 mt-8">
      <div className="w-full">
        <div className="w-full flex items-center  text-2xl text-black font-semibold">
          <span className="mr-4">Post Inspirations</span>
          <Tooltip
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        architecto totam mollitia vitae natus quia a voluptatibus!
        Exercitationem, cupiditate tenetur. Eveniet corporis a, quis sit quae
        iusto repudiandae voluptates porro?"
            arrow
            className=""
          >
            <Info />
          </Tooltip>
        </div>

        <p className="my-5">
          Use these high performing posts as Inspiration for your next content!
          Our AI engine selected this for you
        </p>
        <button className="underline">Edit my personalized feed</button>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-3  ">
          <ViralCards />
          <ViralCards />
          <ViralCards />
          <ViralCards />
          <ViralCards />
        </div>
      </div>
    </div>
  );
};

export default ViralComp;
