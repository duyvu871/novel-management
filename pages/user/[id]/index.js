import React from "react";
// import UserHeader from "../../../components/Header/userHeader";
// import PostCard from "../../../components/Post/postCard";
// import Table from "../../../components/Table";
// import UserMedia from "../../../components/User/userMedia";
// import Carousel from "../../../components/Custom/Carousel";
// import History from "../../../components/Timeline/history";
// import RecentStatus from "../../../components/Post/RecentStatus";
import { UserHeader, Table, UserMedia, History, RecentStatus, UserDescription} from "../../../components"

import {
  getUserById,
  getHistory,
  getNovelById,
  getNovelWithListId,
  getRecentHistories,
} from "../../../services";

export default function User({ user, novels, recentHistories }) {
  const posts = {
    fqwgwergreherh: {
      src: "https://randomuser.me/api/portraits/women/52.jpg",
      name: "Giza Lamo",
      handle: "@giza",
      time: "1.2 hr",
      tweet: "The very essence of TailWindCSS??",
      comments: "500",
      retweets: "250",
      like: "52,003",
    },
    aewgwegwegweg: {
      src: "https://randomuser.me/api/portraits/women/62.jpg",
      name: "Doug mama",
      handle: "@mama",
      time: "25 min",
      tweet: "Should I use Flutter now?",
      comments: "1000",
      retweets: "500",
      like: "70,003",
    },
    wegwegwegwg: {
      src: "https://randomuser.me/api/portraits/men/63.jpg",
      name: "Ezy Pzy",
      handle: "@ezypzy",
      time: "2.7 hr",
      tweet: "Get Ready for the tech revolution",
      comments: "10,000",
      retweets: "100,002",
      like: "200,003",
    },
  };

  const userDesc = "Tôi là một con người nhỏ bé giữa thế giới này"
  // console.log(recentHistories);
  return (
    <>
      <UserHeader userInfo={user} />
      <UserDescription description={userDesc} />
      <UserMedia />
      <hr />
      <RecentStatus posts={posts} />
      <div className="relative p-4">
        <h3 className="font-bold text-xl py-2">Nội dung của bạn</h3>
        <Table tableData={novels} />
      </div>
      <div className="relative p-2">
        <h3 className="font-bold text-2xl p-2">Activity</h3>
        <div className="overflow-y-scroll h-[60vh] p-2">
          <History histories={recentHistories} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  const user = (await getUserById(id)) || {};
  const novels = await getNovelWithListId(user.novels);
  const recentHistories = await getRecentHistories(id, 5);
  // console.log("histories", recentHistories);
  return {
    props: {
      user,
      novels,
      recentHistories,
    },
  };
}
