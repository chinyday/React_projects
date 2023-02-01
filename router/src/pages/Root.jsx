import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/Navbar";

export default function Root(){
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}