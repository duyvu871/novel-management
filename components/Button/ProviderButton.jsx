import React from 'react'
import Img from '../Img';

export default function ProviderButton({ name, handle, icon }) {
    return (
        <div className="my-5">
          <button
            onClick={handle}
            className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
          >
            <Img src={icon} className="w-6 h-6" alt="" />{" "}
            <span>Login with {name}</span>
          </button>
        </div>
      );
}