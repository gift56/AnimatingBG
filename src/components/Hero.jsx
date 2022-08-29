import React, { useRef, useState } from "react";
import HeroVideo from "../assets/heroVideo.mp4";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import GradientBtn from "./GradientBtn";

const Hero = ({ menuShow }) => {
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setPlaying(false);
  };

  const handleVideoPLay = () => {
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <div className="flex items-end justify-center w-full h-screen text-center">
      <video
        src={HeroVideo}
        ref={videoRef}
        loop
        muted
        autoPlay
        className="object-cover h-full w-full absolute -z-0"
      />
      <div
        className={`z-20 p-8 flex flex-col items-center justify-center duration-500 w-full ${
          playing ? "bg-transparent" : "bg-black/80"
        } ${menuShow ? "opacity-20" : "opacity-100"}`}
      >
        <h1 className="text-5xl bg-transparent lg:text-7xl">web 3.0</h1>
        <h1 className="text-5xl bg-transparent lg:text-7xl capitalize mb-12">
          the {` `}
          <span className="bg-transparent text-thBlue font-bold">future</span>{` `}
          is here
        </h1>
        <div className="bg-transparent flex flex-row justify-center items-center">
          <GradientBtn className="capitalize" title="get anton" />
          <GradientBtn className="capitalize mx-12" title="products" />
          {playing ? (
            <FaPauseCircle
              size={30}
              onClick={handleVideoPause}
              className="cursor-pointer hover:scale-110 duration-200 fill-thBlue bg-transparent"
            />
          ) : (
            <FaPlayCircle
              size={30}
              onClick={handleVideoPLay}
              className="cursor-pointer hover:scale-110 duration-200 fill-thBlue bg-transparent"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
