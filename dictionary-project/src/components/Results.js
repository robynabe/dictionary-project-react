import React from 'react';
import Meaning from "./Meaning";

export default function Results(props) {
// renders searched word or displays nothing found
    if (props.result) {
        return (
        <div className="results-wrapper">
            <h2>{props.result.word}</h2>
            {/* Loops through the responses "meanings" and sends result to meaning component */}
            {props.result.meanings.map(function(meaning, i) {
                return (
                    <div key={i}>
                        <Meaning meanings={meaning} />
                    </div>
                );
            })}

        </div>
        );
    } else {
        return "No results found...";
    }

}