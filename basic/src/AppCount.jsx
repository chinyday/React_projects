import React, { useState } from "react";
import "./App.css";
import Count from "./basic/components/Count";

function AppCount() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div className="totalCount">
        total Count: {count} {count > 10 ? "👻" : "💕"}
      </div>
      <Count total={count} onClick={handleClick} />
      <Count total={count} onClick={handleClick} />
    </>
  );
}

export default AppCount;

/*

컴포넌트가 공통으로 필요한 데이터 (공통데이터)는 필요한 곳 제일 근접한 부모에게 두고 필요한 데이터를 props로 전달
개별적으로 필요한 State가 있다면, 내부 컴포넌트에서 State를 사용

*/
