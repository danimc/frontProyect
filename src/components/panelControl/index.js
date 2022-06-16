import React from "react";
import Video from "../video";
import "./style.css"

const SECURITY = [
    'https://www.youtube.com/watch?v=tZzNART_qgA',
    'https://www.youtube.com/watch?v=xBQhGg_jmPY',
    'https://www.youtube.com/watch?v=xBQhGg_jmPY',
    'https://www.youtube.com/watch?v=xBQhGg_jmPY',
    'https://www.youtube.com/watch?v=xBQhGg_jmPY',
    'https://www.youtube.com/watch?v=xBQhGg_jmPY',
]


export default function PanelControl() {
  return (
    <>
      <h4>videos de seguridad:</h4>
      <button className="btn btn-outline-primary" type="button">Pausa</button>
      <div className="player-wrapper">
      {SECURITY.map(vid => <Video key={vid} url={vid} />)}
      </div>


    </>
  );
}
