"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "../constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const colorMap = {
  "yellow-300": "bg-amber-400",
  "cyan-400": "bg-cyan-500",
  "teal-300": "bg-teal-300",
};
const SkilllSection = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen  flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-20 max-w-[95%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-[20px]">
            Using the latest tech this world has to offer
          </p>
        </div>

        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={7000}
          modules={[Autoplay]}
          className="max-w-[95%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide
              key={index}
              className="relative flex flex-col items-center"
            >
              <div className="top-0 w-full text-center bg-gray-50 bg-opacity-80 z-10 mb-3">
                <p className="text-transparent bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text font-bold whitespace-nowrap">
                  {skill.name}
                </p>
              </div>
              <div
                className={`bg-white rounded-full w-24 h-24 mx-auto flex items-center justify-center`}
              >
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={90}
                  height={80}
                  className="object-cover rounded-full"
                />
              </div>
              <div
                className={`top-0 w-24 text-center ${
                  colorMap[skill.color]
                } bg-opacity-80 z-10 mb-3 rounded-full py-0`}
                style={{ marginLeft: "calc(30% - 12px)" }} // Ajustar el ancho deseado (en este caso, 24) y el margen izquierdo
              >
                <p className="text-transparent text-white font-bold whitespace-nowrap mt-5 mx-auto">
                  {skill.nivel}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SkilllSection;