import React from "react";
import "../App.css";
import Avartar from "./Avartar";

function Profile({ image, name, job, isNew }) {
  return (
    <>
      <div className="profile">
        <Avartar image={image} isNew={isNew} />
        <h3>{name}</h3>
        <h5>{job}</h5>
      </div>
    </>
  );
}
export default Profile;
