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