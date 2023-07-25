import React, { useState } from "react";
// import Search from "../components/Search";
// import UserList from "../components/user/userList";
// import PostCard from "../components/Post/postCard";
// import List from "../components/List";
// import PostItem from "../components/Post/PostItem";

import { Search, UserList, PostItem } from "../components"
import List from '../components/List'

export default function Home() {


  return (
    <>
    <Search />
    <div className="relative p-4">
      <h3 className="font-bold text-2xl p-2">Mới cập nhật</h3>
      {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div> */}
     <div className="divide-y divide-slate-100">
        <List>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </List>
     </div>
    </div>
    <UserList />
    </>
  )
}
