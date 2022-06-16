import React from "react";
import ReactPlayer from "react-player";


export default function Video({url}) {
  return (
    <ReactPlayer
    className="react-player"
      url={url}
      playing={false}
      muted
      width={400}
      height={200}
      
      />
  );
}
