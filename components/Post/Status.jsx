import React from "react";
import Img from "../Img";
import moment from "moment";

export default function Status({ post }) {
  return (
    <div className="w-full p-2 py-4 border-b hover:bg-lighter flex">
      <div className="flex-none mr-4">
        <Img src={post.src} className="h-12 w-12 rounded-full flex-none" />
      </div>
      <div className="w-full">
        <div className="flex items-center w-full">
          <p className="font-semibold"> {post.name} </p>
          <p className="text-sm text-dark ml-2"> {post.handle} </p>
          <p className="text-sm text-dark ml-2"> {post.time} </p>
          <Img src={"/angle-down.svg"} className="w-4 h-4 ml-auto" />
        </div>
        <p className="py-2">{post.tweet}</p>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center text-sm text-dark">
            <Img src={"/comment.svg"} className=" w-4 h-4 mr-2" />

            <p> {post.comments} </p>
          </div>
          <div className="flex items-center text-sm text-dark">
            <Img src={"/reply.svg"} className="w-4 h-4 mr-2" />

            <p> {post.retweets}</p>
          </div>
          <div className="flex items-center text-sm text-dark">
            <Img src={"/heart.svg"} className="w-4 h-4 mr-2" />

            <p> {post.like} </p>
          </div>
          <div className="flex items-center text-sm text-dark">
            <Img src={"/share.svg"} className="w-4 h-4 mr-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
