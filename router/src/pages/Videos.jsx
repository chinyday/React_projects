import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Videos(){

  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit= (e) => {
    e.preventDefault();
    setInput('');
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