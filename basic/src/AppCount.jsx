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
        total Count: {count} {count > 10 ? "๐ป" : "๐"}
      </div>
      <Count total={count} onClick={handleClick} />
      <Count total={count} onClick={handleClick} />
    </>
  );
}

export default AppCount;

/*

์ปดํฌ๋ํธ๊ฐ ๊ณตํต์ผ๋ก ํ์ํ ๋ฐ์ดํฐ (๊ณตํต๋ฐ์ดํฐ)๋ ํ์ํ ๊ณณ ์ ์ผ ๊ทผ์ ํ ๋ถ๋ชจ์๊ฒ ๋๊ณ  ํ์ํ ๋ฐ์ดํฐ๋ฅผ props๋ก ์ ๋ฌ
๊ฐ๋ณ์ ์ผ๋ก ํ์ํ State๊ฐ ์๋ค๋ฉด, ๋ด๋ถ ์ปดํฌ๋ํธ์์ State๋ฅผ ์ฌ์ฉ

*/
