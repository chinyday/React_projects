import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
  return(
    <>
      <Link to="/">HOME</Link>
      <Link to="/videos">VIDEOS</Link>
    </>
  )
}