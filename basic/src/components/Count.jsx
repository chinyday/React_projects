import React, { useState } from "react";

function Count({ total, onClick }) {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((prev) => prev + 1);
    onClick();
  };

  return (
    <>
      <div className="container">
        <div className="count">
          <p className="number">
            {count} <span className="total">/{total}</span>
          </p>
          <button className="btn" onClick={addCount}>
            add +
          </button>
        </div>
      </div>
    </>
  );
}
export default Count;

/* 

useState ? 

변경이 가능한 데이터고, 그 값이 변경이 되면 알려줘!를 하기 위해서 사용.

상태가 변경이 되면 내부 컴포넌트 함수 전체를 리렌더링하는데,
리액트는 가상돔을 사용하기 때문에 변경된 요소만 별도 업데이트를 친다. (위의 경우 UI에서 count만 변경)
useState는 업데이트 된 값을 기억하고 있기 때문에, 여러번 불러도 초기값으로(0으로) 돌아가지 않는다.

이전 상태값을 전달받아서 콜백함수로 사용할 수 있기 때문에, 
(이전 상태의 값을 기억하고 있음) 그것을 가지고 와서 set하는 것이 안전하기 때문에 콜백 형태로 사용한다.

*/
