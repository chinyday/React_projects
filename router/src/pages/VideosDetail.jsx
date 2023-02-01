import React from "react";
import { useParams } from 'react-router-dom'

export default function VideosDetail(){
  const { videoId } = useParams();

  return (
    <div>VideosDetail
      <p>videoId : {videoId}</p>
    </div>
  );
}


// useParams  객체에 어떤  Param이 있는지 전달 해줌