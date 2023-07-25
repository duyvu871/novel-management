import React, {useEffect, useState} from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import CategoryCard from "../Categories/categoryCard";

export default function PostCard({ post, inCarousel, ...props }) {
  const [categories,  setCategories]= useState([
    { title: "Hài hước", slug: "/", key: "hai-huoc" },
    { title: "Kinh dị", slug: "/", key: "kinh-di" },
    { title: "Hành động", slug: "/", key: "hanh-dong" },
  ]);
  useEffect(() => {
    console.log("Re-render")
  }, [])
  const socialMetaList = [
    { srcIcon: "/eye.svg", value: 100, key: "eye-icon" },
    { srcIcon: "/people.svg", value: 10, key: "people-icon" },
    { srcIcon: "/list.svg", value: 12, key: "list-icon" },
  ];

  const SocialMeta = ({ srcIcon, value }) => (
    <div className="text-xs font-bold flex items-center  gap-[2px]">
      <div className="relative overflow-hidden w-4 h-4">
        <Image src={srcIcon} unoptimized layout="fill" objectFit="cover" />
      </div>
      <span className="text-gray-500">{value}</span>
    </div>
  );

  return (
    <div {...props} className="flex flex-wrap place-items-center max-w-[160px] sm:max-w-xl">
      <div className="shadow-lg rounded-xl w-72 md:w-96 bg-white relative overflow-hidden">
        <div className="flex items-center justify-start py-2 px-2">
          <div className="w-8 h-8 object-cover rounded-full relative overflow-hidden">
            <Image
              alt="User avatar"
              src="/user-avatar.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="pl-3">
            <div className="font-medium text-xs">Jessica White</div>
          </div>
        </div>
        <div className="w-full h-full block">
          <div className="relative overflow-hidden w-full max-h-[130px] aspect-[4/3]">
            <Image
              src="/post.jpg"
              unoptimized
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-full p-3 pt-0">
            <div className="flex gap-3 py-2">
              {socialMetaList.map((item) => (
                <SocialMeta
                  srcIcon={item.srcIcon}
                  value={item.value}
                  key={item.key}
                />
              ))}
            </div>

            <Link href={"/"} passHref>
              <p className="text-Black font-bold text-sm mb-2 first-letter:capitalize">
                vào một ngày nọ tôi trở thành Sát thủ cấp SS
              </p>
            </Link>

            <div className="flex gap-2 flex-wrap mb-2">
              {categories.map((item) => (
                <CategoryCard
                  src={item.slug}
                  value={item.title}
                  key={item.key}
                  color={"pink"}
                />
              ))}
            </div>

            <div className="flex items-center justify-between">
              <Link href={"/"} passHref>
                <p className="text-gray-800 text-sm font-medium mb-2 cursor-pointer">
                  Chương 0
                </p>
              </Link>
              <p className="text-blue-600 text-xs font-medium mb-2 ">
                {moment(1660380408916).format("D-M-YYYY")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
