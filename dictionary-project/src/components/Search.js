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
        console.log(`Searching for ${word} definition...`); 

        // Dictionary API call
        //let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(`${apiUrl}${word}`).then(handleDResponse);

        // Pexel API call
        //const pApiKey = "563492ad6f91700001000001dd9e8da5ec0547129b98a6f9e32bcf54";
        //let pApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=4`;
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