import React from "react";
import "./phonetics.css"

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="phonetics">
     <em> <a href={props.phonetic.audio} target="blank">
        {" "}
        Listen
      </a>
      {props.phonetic.text}</em>
    </div>
  );
}
