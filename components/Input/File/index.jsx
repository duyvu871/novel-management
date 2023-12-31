import React from "react";

export default function InputFile() {
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="file_input"
      >
        Upload file
      </label>
      <input
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
      />
      <p
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </p>
    </div>
  );
}
