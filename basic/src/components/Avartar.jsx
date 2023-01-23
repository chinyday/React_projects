import React from "react";

function Avartar({ image, isNew }) {
  return (
    <div className="avartar">
      <img className="photo" src={image} alt="avartar" />
      {isNew && <div className="new">new</div>}
    </div>
  );
}
export default Avartar;
