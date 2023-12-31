import React from "react";
import Link from "next/dist/client/link";
import Img from "../Img";
import { useAuth } from "../../context/AuthUserProvider";

export default function MenuBar({
  setIsOpenSideBar,
  setIsOpenPageMode,
  setIsOpenUserCard,
}) {
  const { authUser } = useAuth();

  return (
    <div className="relative z-10 p-4">
      <div className="flex items-center rounded-md bg-white p-4 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
        <div
          className="relative z-20"
          onClick={() => setIsOpenSideBar(true)}
          // onClick={() => console.log(10)}
        >
          <svg
            className="h-6 w-6 flex-none stroke-slate-500"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          >
            <path d="M4 7h16M4 12h16M4 17h16"></path>
          </svg>
        </div>
        <Link href={"/"} passHref>
          <div className="ml-6 h-10 w-10 flex-none">
            <svg viewBox="0 0 40 40" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8322 6.12083C11.1486 5.56355 11.74 5.21924 12.3808 5.21924H27.1431C27.7322 5.21924 28.2831 5.51055 28.6148 5.99738L37.4718 18.9974C37.8542 19.5587 37.884 20.2887 37.5487 20.8793L30.1679 33.8793C29.8515 34.4366 29.2601 34.7809 28.6192 34.7809L12.3808 34.7809C11.74 34.7809 11.1486 34.4366 10.8322 33.8793L3.45137 20.8793C3.14178 20.334 3.14178 19.6661 3.45137 19.1208L10.8322 6.12083ZM12.3808 10.607L17.7138 20.0001L12.3808 29.3931L7.04787 20.0001L12.3808 10.607ZM15.4397 31.2192L27.5825 31.2192L32.9411 21.7809H20.7984L15.4397 31.2192ZM20.7984 18.2192H32.6319L26.2015 8.78092H15.4397L20.7984 18.2192Z"
                fill="#38BDF8"
              ></path>
            </svg>
          </div>
        </Link>
        <div
          className="relative z-20 ml-auto flex h-6 w-6 items-center justify-center rounded-md shadow ring-1 ring-slate-900/10"
          onClick={() => setIsOpenPageMode(true)}
        >
          <svg className="h-4 w-4 " viewBox="0 0 16 16" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2V1ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM13.6563 2.34285C13.2658 1.95232 12.6326 1.95232 12.2421 2.34285L11.535 3.04996C11.1445 3.44048 11.1445 4.07365 11.535 4.46417C11.9255 4.85469 12.5587 4.85469 12.9492 4.46417L13.6563 3.75706C14.0469 3.36654 14.0469 2.73337 13.6563 2.34285ZM12.242 13.6563L11.5349 12.9492C11.1443 12.5587 11.1443 11.9255 11.5349 11.535C11.9254 11.1445 12.5585 11.1445 12.9491 11.535L13.6562 12.2421C14.0467 12.6326 14.0467 13.2658 13.6562 13.6563C13.2656 14.0468 12.6325 14.0468 12.242 13.6563ZM16 7.99902C16 7.44674 15.5523 6.99902 15 6.99902H14C13.4477 6.99902 13 7.44674 13 7.99902C13 8.55131 13.4477 8.99902 14 8.99902H15C15.5523 8.99902 16 8.55131 16 7.99902ZM7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V14ZM4.46492 11.5352C4.0744 11.1447 3.44123 11.1447 3.05071 11.5352L2.3436 12.2423C1.95307 12.6329 1.95307 13.266 2.3436 13.6566C2.73412 14.0471 3.36729 14.0471 3.75781 13.6566L4.46492 12.9494C4.85544 12.5589 4.85544 11.9258 4.46492 11.5352ZM4.46477 3.04973C4.85529 3.44025 4.85529 4.07342 4.46477 4.46394C4.07424 4.85447 3.44108 4.85447 3.05055 4.46394L2.34345 3.75684C1.95292 3.36631 1.95292 2.73315 2.34345 2.34262C2.73397 1.9521 3.36714 1.9521 3.75766 2.34262L4.46477 3.04973ZM3 8C3 7.44772 2.55228 7 2 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H2C2.55228 9 3 8.55228 3 8Z"
              fill="#38BDF8"
            ></path>
          </svg>
        </div>
        <div className="ml-6 text-[0.8125rem] font-medium text-slate-700">
          v3.0
        </div>
        <div>
          <svg className="ml-2 h-1 w-1.5 overflow-visible fill-slate-400 stroke-slate-400">
            <path d="M0 0H6L3 4Z" strokeWidth="1" strokeLinejoin="round"></path>
          </svg>
        </div>
        <div
          onClick={() => {
            setIsOpenUserCard(true);
          }}
        >
          {Boolean(authUser) ? (
            <Img
              src={authUser.photoURL}
              className="rounded-full ml-6 h-6 w-6"
            />
          ) : (
            <Img
              src={"/profile-icon.svg"}
              className="ml-6 h-6 w-6"
            />
          )}
        </div>
      </div>
    </div>
  );
}
