import React from "react";
import Image from "next/dist/client/image";
import Badge from "../Badge";

export default function UserMedia() {
  return (
    <div className="w-full border-gray px-8 py-4">
      <div className="font-bold flex flex-col items-start justify-center gap-[8px] pr-2 w-fit border-r-2 ">
        <div className="text-xs font-bold flex flex-row items-center   gap-[2px]">
          <Badge color={"blue"}>
            <div className="flex items-center gap-2">
              <div className="relative overflow-hidden w-6 h-6 text-xs ">
                <Image
                  src={"/eye.svg"}
                  unoptimized
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className="text-sm">Following</span>
            </div>
          </Badge>
          <span className="font-bold text-[16px]">/</span>
          <span className="text-sm">100</span>
        </div>
        <div className="text-xs font-bold flex flex-row items-center   gap-[2px]">
          <Badge color={"green"}>
            <div className="flex items-center gap-2">
              <div className="relative overflow-hidden w-6 h-6 text-xs ">
                <Image
                  src={"/people.svg"}
                  unoptimized
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className="text-sm">Member</span>
            </div>
          </Badge>
          <span className="font-bold text-[16px]">/</span>
          <span className="text-sm">100</span>
        </div>
        <div className="text-xs font-bold flex flex-row items-center   gap-[2px]">
          <Badge color={"pink"}>
            <div className="flex items-center gap-2">
              <div className="relative overflow-hidden w-6 h-6 text-xs ">
                <Image
                  src={"/list.svg"}
                  unoptimized
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className="text-sm">Truyện</span>
            </div>
          </Badge>
          <span className="font-bold text-[16px]">/</span>
          <span className="text-sm">100</span>
        </div>
      </div>
    </div>
  );
}
