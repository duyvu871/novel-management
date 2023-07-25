import React from "react";
import Image from "next/dist/client/image";
import Rating from "../Rating";

export default function UserHeader({ userInfo }) {
  return (
    <div className="flex px-4 items-center gap-4">
      <div className="relative overflow-hidden w-24 h-24 rounded-full">
        <Image
          src={userInfo.photoURL}
          unoptimized
          layout="fill"
          objectFit="cover"
          alt="Avatar"
        />
      </div>
      <div className="flex flex-col ">
        <div className="flex items-center"> 
          <p className="text-xl">{userInfo.name}</p>
          <p className="text-xl">/</p>
          <p className="text-xs">{userInfo.name_direct}</p>
        </div>
        <Rating />
        <div className="mt-2">
          <div className="w-full border-2 border-gray-600 px-4 rounded-lg text-center">Chỉnh sửa hồ sơ</div>
        </div>
      </div>
    </div>
  );
}
