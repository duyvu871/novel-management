import React from "react";

export default function Button({ children, handle, ...props }) {
  return (
    <div
      onClick={handle}
      {...props}
      className="w-fit flex place-content-center pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
    >
      {children}
    </div>
  );
}
