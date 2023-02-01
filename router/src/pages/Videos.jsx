import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Videos(){

  const [input, setInput] = useState('');

  // useNavigate 코드 상에서 동적으로 이동
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit= (e) => {
    e.preventDefault();
    setInput('');
    // useNavigate 어디로 이동할지 알려주기
    navigate(`/videos/${input}`);
  };

  return( 
    <div>
      Videos
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={input} />
      </form>
    </div>
  );
}