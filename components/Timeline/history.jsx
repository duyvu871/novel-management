import React from "react";
import TimeLineItem from "./TimeLineItem";

export default function History({ histories }) {
  return (
    <ol className=" relative border-l border-gray-200 dark:border-gray-700 pb-4">
      {Object.keys(histories).map((item) => (
        <TimeLineItem data={histories[item]} key={item}/>
      ))}
    </ol>
  );
}
