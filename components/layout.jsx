import React, { useState } from "react";
import Footer from "../components/Footer";
// import { Header } from "../components/Header"
import Menu from "../components/Menu";

export default function Layout({children}) {

  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
}
