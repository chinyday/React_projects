/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";

function Product() {
  const [products, setProduct] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  /*
  
  useEffect ?
   
  해당 컴포넌트가 보여질 때 딱 한번만 네트워크 통신을 통해서 데이터를 가져오기 위해서 사용
  한번만 호출하기 위해서는 두번째 인자에 디팬던시를 사용한다 
  한번만 호출 : []
  특정 값이 변경이 될 때 : [여기에 해당 값을 넣어준다]

  */

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
    return () => {
      console.log("cleanup");
      // 컴포넌트가 언마운트될 때, 메모리 혹은 네트워크를 깨끗하게 정리
    };
  }, [checked]);

  return (
    <>
      <div>
        <input
          id="checkbox"
          type="checkbox"
          value={checked}
          onChange={handleChange}
        />
        <label htmlFor="checkbox">Show sale products!!</label>
      </div>

      <ul>
        {products.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Product;
