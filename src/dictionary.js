import React, { useState } from "react";
import axios from "axios";
import Results from "./results"
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0])
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
      <Results results={results}/>
      <br />
      <br />
      <footer className="text-center">Coded by <a href="https://github.com/AmaTwumasi">AmaTwumasi</a></footer>
    </div>
  );
}
