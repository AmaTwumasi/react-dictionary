import React from "react";
import "./photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="photo">
        <div className="row">
        {props.photos.map(function (photo, index) {
        return (<div className="col-sm-4" key={index}> 
         <img src={photo.src.landscape}  className="img-fluid" alt=""/>
         </div>);
        })}
         </div>
      </section>
    );
  } else {
    return null;
  }
}
