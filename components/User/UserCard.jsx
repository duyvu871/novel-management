import React from "react";
import Img from "../Img";
import Rating from "../Rating";
import Button from "../Button";
import Badge from "../Badge";
import { useAuth } from "../../context/AuthUserProvider";

export default function UserCard() {

  const { authUser, providers, signOut } = useAuth();


  const user = {
    photoURL: authUser.photoURL,
    follows: [1, 2, 3, 4, 5, 6, , 6, 7, 8, 9, 0, , 5, 6, 7],
    followers: [1, 2, 3, 4, 5, 6, , 6, 7, 8, 9, 0, , 5, 6, 7],
    name: authUser.displayName,
    name_direct: "@jojosurvant",
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aperiam suscipit animi, rem nihil ex fugiat corporis, accusamus saepe rerum corrupti? Ipsam, quia repellendus provident beatae impedit dignissimos reprehenderit blanditiis.",
    favorite: [
      {
        title: "Xem báo",
        color_tag: "blue",
      },
      {
        title: "Xem báo",
        color_tag: "red",
      },
      {
        title: "Xem báo",
        color_tag: "yellow",
      },
      {
        title: "Xem báo",
        color_tag: "purple",
      },
    ],
  };

  return (
    <div className="relative shadow-lg rounded-[30px] w-full h-fit bg-white">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-full h-32"></div>
      <div className="flex flex-col gap-4 relative top-[-40px]">
        <div className="flex flex-row justify-start items-center gap-2 mx-3">
          <div className="w-20">
            <Img
              src={user.photoURL}
              className="border-4 border-white rounded-full w-20 h-20"
            ></Img>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center text-white">
              <p className="text-xl font-bold ">{user.name}</p>
              <p className="text-xl">/</p>
              <p className="text-xs">{user.name_direct}</p>
            </div>
            <div>
              <p className="line-clamp-2 text-xs">{user.description}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row mx-3 gap-2">
          {user.favorite.map((item, index) => (
            <Badge color={item.color_tag} key={"favorite-" + index}>
              {item.title}
            </Badge>
          ))}
        </div>
        <div className="flex flex-row mx-3 gap-3">
          <div className="flex flex-col">
            <Rating />
            <p className="text-sm">Rating</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-sm">{user.followers.length}</p>
            <p className="text-sm">Followers</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-sm">{user.follows.length}</p>
            <p className="text-sm">Following</p>
          </div>
        </div>
        <div className="mx-3">
          <Button handle={() => { signOut() }}>Đăng xuất</Button>
        </div>
      </div>
    </div>
  );
}
