import React from "react";
import Image from "next/image";

export default function Img({ src, loader = false, ...props }) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
      {...props}
    >
      <Image unoptimized={loader} src={src} layout="fill" objectFit="cover" />
    </div>
  );
}
