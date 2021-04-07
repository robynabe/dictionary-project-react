import React, { useState } from 'react';
import axios from "axios";
import Results from "./Results";

export default function Search () {
    let [word, setWord] = useState(null);
    let [result, setResult] = useState(null)

    // Gathers data form the api
    function handleResponse(response) {
        //console.log(response.data[0].meanings[0].definitions[0].definition);
        setResult(response.data[0]);
    }

    // Triggers the search
    function search(event) {
        event.preventDefault();
        console.log(`Searching for ${word} definition...`); 

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleResponse);
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
        </section>
    )
}