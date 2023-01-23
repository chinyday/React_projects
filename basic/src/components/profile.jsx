import React from "react";
import "../App.css";

function Profile({ image, name, job, isnew }) {
  return (
    <>
      <div className="profile">
        <img className="photo" src={image} alt="avatar" />
        {/* {isnew ? <div className="new">new</div> : null} */}
        {isnew && <div className="new">new</div>}
        <h3>{name}</h3>
        <h5>{job}</h5>
      </div>
    </>
  );
}
export default Profile;
