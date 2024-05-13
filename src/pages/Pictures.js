import React from "react";
import Picture1 from "../images/IMG_4290.jpg";
import Picture2 from "../images/IMG_4811.jpg";
import Picture3 from "../images/IMG_5260.jpg";
import Picture4 from "../images/IMG_7075.jpg";
import Picture5 from "../images/IMG_7080.jpg";
import Picture6 from "../images/57a9ff34-5f7f-418c-aefb-d3ee2c400e42.JPG";
import Picture7 from "../images/IMG_4290.jpg";
import Picture8 from "../images/IMG_4811.jpg";
import Picture9 from "../images/IMG_5260.jpg";
import Picture10 from "../images/IMG_5498.JPG";
import Picture11 from "../images/IMG_5499.JPG";
import Picture12 from "../images/IMG_7075.jpg";

function Pictures() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mt-5 mb-8">
        <p className="text-4xl font-semibold text-gray-800">
          Here&apos;s my Photo Gallery
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        <div className="flex flex-col items-center justify-center">
          <img
            src={Picture1}
            alt="Profile"
            className="rounded-full w-40 h-40 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={Picture2} alt="" className="rounded-full w-40 h-40 mb-2" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={Picture3}
            alt="Friend 2"
            className="rounded-full w-40 h-40 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={Picture4}
            alt="Friend 3"
            className="rounded-full w-40 h-40 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={Picture5}
            alt="Friend 4"
            className="rounded-full w-40 h-40 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={Picture6}
            alt="Friend 4"
            className="rounded-full w-40 h-40 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={Picture7}
            alt="Friend 4"
            className="rounded-full w-40 h-40 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={Picture8}
            alt="Friend 4"
            className="rounded-full w-40 h-40 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={Picture9}
            alt="Friend 4"
            className="rounded-full w-40 h-40 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={Picture10}
            alt="Friend 4"
            className="rounded-full w-40 h-40 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={Picture11}
            alt="Friend 4"
            className="rounded-full w-40 h-40 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={Picture12}
            alt="Friend 4"
            className="rounded-full w-40 h-40 mb-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Pictures;
