import React from "react";

export default function Checkbox() {
  return (
    <div className="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-indigo-600 ring-black/20">
      <div className="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x-4"></div>
    </div>
  );
}
