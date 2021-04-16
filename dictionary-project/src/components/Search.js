import React, { useState } from 'react';
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import { apiUrl, pApiKey, pApiUrl } from "../variables/variables";

export default function Search () {
    let [word, setWord] = useState("");
    let [result, setResult] = useState(null);
    let [images, setImages] = useState(null);

    // Gathers data form the api
    function handleDResponse(response) {
        setResult(response.data[0]);
    }

    function handlePResponse(response) {
        setImages(response.data.photos);
    }

    // Triggers the search
    function search(event) {
        event.preventDefault();
        let imgNumber = 16;

        // Dictionary API call
        axios.get(`${apiUrl}${word}`).then(handleDResponse);

        // Pexel API call
        let headers = { Authorization : `Bearer ${pApiKey}`};
        axios.get(`${pApiUrl}${word}&per_page=${imgNumber}`, { headers : headers }).then(handlePResponse);
    }

    // Handles the word entered into the search area
    function handleWordChange(event) {
        setWord(event.target.value);
    }

    return (
        <section className="search-container">
            <form onSubmit={search}>
                <input className="search-input" type="search" placeholder="Search for any word..." autoFocus={true} onChange={handleWordChange}/>
                <button className="search-submit" ><i className="fas fa-search"></i></button>
            </form>
            <Results result={result}/> 
            <Images images={images}/>
        </section>
    )
}