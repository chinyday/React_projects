import React, { useState } from "react";
import "./AppXY.css";

function AppXY() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleCurser = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });

    // //만약에 x만 변경 가능하게 하려면?
    // setCursor((prev) => ({ x: e.clientX, y: e.prev }));
    // // x의 값만 변경을 원할 때
    // setCursor((prev) => ({ ...prev, x: e.clientX }));
  };

  return (
    <div className="container" onMouseMove={handleCurser}>
      <div className="pointer" style={{ left: cursor.x, top: cursor.y }}></div>
    </div>
  );
}

export default AppXY;
