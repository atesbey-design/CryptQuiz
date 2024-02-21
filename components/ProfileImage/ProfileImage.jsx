"use client";
import React from "react";
import Image from "next/image";
import Backend from "@/data/Backend";
import axios from "axios";

const ProfileImage = () => {
  return (
    <div className="flex flex-col justify-between items-center w-1/4 px-16 py-10 bg-neu-white border border-black border-b-8 border-r-8 rounded-50 space-y-8">
      <div className="w-full relative pt-[100%]">
        <Image
          src="/images/icardi.jpg"
          alt="profile"
          objectFit="cover"
          fill
          className="w-full h-full top-0 left-0 object-cover rounded-full border border-black border-b-8 border-r-8"
        />
      </div>
      <h1 className="text-32 font-bold font-archivo">MauroIcardi</h1>
    </div>
  );
};

export default ProfileImage;
