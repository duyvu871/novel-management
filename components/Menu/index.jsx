import React, { useState } from "react";
import MenuBar from "./menuBar";
import SideBar from "./sideBar";
import PageMode from "../PageMode";
import ModalWrap from "../Modal/modalWrap";
import UserCard from "../User/UserCard";
import { useAuth } from "../../context/AuthUserProvider";
import ProviderButton from "../Button/ProviderButton";

export default function Menu() {
  const { authUser, providers, signOut } = useAuth();

  const [isCloseSideBar, showSideBar] = useState(false);
  const [isPageModeOpen, showPageMode] = useState(false);
  const [isOpenUserCard, setOpenUserCard] = useState(false);
  // console.log(authUser);

  return (
    <div>
      <div>
        <MenuBar
          setIsOpenSideBar={showSideBar}
          setIsOpenPageMode={showPageMode}
          setIsOpenUserCard={setOpenUserCard}
        />
      </div>

      <div
        className=" flex fixed top-[0] z-[100] to-left h-[100vh] flex-col"
        style={{ transform: `translateY(${isOpenUserCard ? "0" : "-100%"})` }}
      >
        {authUser ? (
          <UserCard signOut={signOut} />
        ) : (
          <div className="relative shadow-lg rounded-[30px] w-full h-fit bg-white p-4">
            <h3 className="font-semibold">Chào mừng người mới hãy đăng nhập và sử dụng dịch vụ của chúng tôi</h3>
            {providers.length &&
              providers.map((item, index) => (
                <ProviderButton
                  name={item.name}
                  icon={item.icon}
                  handle={item.handle}
                  key={"provider-" + index}
                />
              ))}
          </div>
        )}
        <div
          style={{ height: "100%" /* background: "#ababab7a"*/ }}
          onClick={() => setOpenUserCard(false)}
        ></div>
      </div>

      <div
        className=" flex fixed top-[0] z-[100] to-left w-[100vw]"
        style={{ transform: `translateX(${isCloseSideBar ? "0" : "-100%"})` }}
      >
        <SideBar />
        <div
          style={{ width: "calc(100% - 16rem)" /* background: "#ababab7a"*/ }}
          onClick={() => showSideBar(!isCloseSideBar)}
        ></div>
      </div>
      <ModalWrap
        isOpen={isPageModeOpen}
        setClose={showPageMode}
        position={{ top: "80px", left: "178px" }}
      >
        <PageMode />
      </ModalWrap>
    </div>
  );
}
