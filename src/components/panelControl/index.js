import React from "react";
import ReactPlayer from "react-player";

export default function PanelControl() {
  return (
    <>
      <h1>video:</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=JSpK8LxBKqQ"
       playing
       controls
      />
         <ReactPlayer
        url="https://www.youtube.com/watch?v=fcSk_DZFjf4"
       playing
       muted       
      />

   
    </>
  );
}
