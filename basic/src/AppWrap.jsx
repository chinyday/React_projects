import React from "react";
import "./App.css";

function AppWrap() {
  return <Navbar />;
}

function Navbar() {
  return (
    <>
      <header style={{ backgroundColor: "red" }}>
        <Avatar
          image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          name="James Kim"
          size="200"
        />
      </header>
    </>
  );
}

function Avatar({ image, name, size }) {
  return (
    <>
      <img className="photo" src={image} alt={name} width={size} />
    </>
  );
}
export default AppWrap;
