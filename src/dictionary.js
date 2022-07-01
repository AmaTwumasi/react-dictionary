import React, { useState } from "react";
import axios from "axios";
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation= https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
