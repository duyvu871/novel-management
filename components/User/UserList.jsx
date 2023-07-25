import React from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

export default function UserList({ user }) {
  const userList = [
    {
      name: "JoJo cusent",
      nameForDirect: "jojocusent",
      avatarURL: "/user-avatar.jpg",
      id: "sflemwglmweg",
    },
    {
      name: "JoJo cusent",
      nameForDirect: "jojocusent",
      avatarURL: "/user-avatar.jpg",
      id: "gưegwegweg",
    },
    {
      name: "JoJo cusent",
      nameForDirect: "jojocusent",
      avatarURL: "/user-avatar.jpg",
      id: "egwegweg",
    },
    {
      name: "JoJo cusent",
      nameForDirect: "jojocusent",
      avatarURL: "/user-avatar.jpg",
      id: "gưekmgwmelmg",
    },
  ];

  return (
    <div className="relative p-4">
      <h3 className="font-bold text-2xl p-2">Các tác giả</h3>
      <div className="divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
        {userList.map((user) => (
          <div className="flex items-center p-4" key={user.id}>
            <div className="h-10 w-10 flex-none rounded-full relative overflow-hidden">
              <Image
                unoptimized
                src={user.avatarURL}
                alt=""
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="ml-4 flex-auto">
              <div className="font-medium">{user.name}</div>
              <div className="mt-1 text-slate-700">@{user.nameForDirect}</div>
            </div>
            <Link href={`/user/${user.id}`} passHref>
              <div className="pointer-events-auto ml-4 flex-none rounded-md py-[0.3125rem] px-2 font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                View
              </div>
            </Link>
          </div>
        ))}
        <div className="p-4">
          <div className="pointer-events-auto rounded-md py-2 px-4 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
            View all
          </div>
        </div>
      </div>
    </div>
  );
}
