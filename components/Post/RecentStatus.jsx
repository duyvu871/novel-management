import React from "react";
import Status from "./Status";

export default function RecentStatus({ posts }) {
  return (
    <div className="relative">
      <h3 className="font-bold text-xl px-4 py-2">Bài viết gần đây</h3>
      <div className="p-2">
        {Object.keys(posts).map((post) => (
          <Status post={posts[post]} key={post} />
        ))}
      </div>
    </div>
  );
}
