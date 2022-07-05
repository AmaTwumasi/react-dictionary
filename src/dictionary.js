import React, { useState } from "react";
import axios from "axios";
import Results from "./results";
import Photos from "./photos";
import "./dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null)

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    //documentation= https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    //documentation= https://pexels.com/api/
    let pexelsApikey = "563492ad6f9170000100000113f5e078cc154722bc76e6c087a332bf";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
let headers = { Authorization: `Bearer ${pexelsApikey}`}    
axios.get(pexelsApiUrl, { headers: headers}).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function changeKeyword(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div>
        <div className="Dictionary">
          <section>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={changeKeyword}
                defaultValue={props.defaultKeyword}
              />
            </form>
            <p> Search for a word. eg: beach, sunset.......</p>
          </section>
        </div>

        <Results results={results} />
        <Photos photos={photos} />
        <br />
        <br />
        <footer className="text-center">
          Coded by Ama Twumasi, deployed to{" "}
          <a href="https://github.com/AmaTwumasi">Github</a> and hosted on{" "}
          <a href="https://heartfelt-paletas-77782e.netlify.app/">Netlify</a>
        </footer>
      </div>
    );
  } else {
    load();
  }
}
