import React, { useState } from "react";
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for the definition of ${keyword}`);
  }
  function changeKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div>
      <div className="container text-center">
        <form onSubmit={search}>
          <input type="search" onChange={changeKeyword} />
        </form>
      </div>
      <footer className="text-center">search</footer>
    </div>
  );
}
