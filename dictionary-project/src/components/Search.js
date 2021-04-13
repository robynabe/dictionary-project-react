import React, { useState } from 'react';
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import { apiUrl, pApiKey, pApiUrl } from "../variables/variables";

export default function Search () {
    let [word, setWord] = useState(null);
    let [result, setResult] = useState(null)
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

        // Dictionary API call
        axios.get(`${apiUrl}${word}`).then(handleDResponse);

        // Pexel API call
        let headers = { Authorization : `Bearer ${pApiKey}`};
        axios.get(`${pApiUrl}${word}&per_page=4`, { headers : headers }).then(handlePResponse);
    }

    // Handles the word entered into the search area
    function handleWordChange(event) {
        setWord(event.target.value);
    }

    return (
        <section className="search-container">
            <form onSubmit={search}>
                <input type="search" placeholder="Search for a word..." autoFocus={true} onChange={handleWordChange}/>
                <input type="submit" value="search"/>
            </form>
            <Results result={result}/>
            <Images images={images}/>
        </section>
    )
}