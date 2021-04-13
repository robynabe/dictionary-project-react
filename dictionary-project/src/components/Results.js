import React from 'react';
import Meaning from "./Meaning";

export default function Results(props) {
// renders searched word or displays nothing found
    if (props.result) {
        return (
        <div className="results-wrapper">
            <h2>{props.result.word}</h2>
            
            <div className="phonetics-container">
                {props.result.phonetics.map(function(phonetic, i){
                    return (
                        <div key={i}>
                            {phonetic.text}
                            {/* change to a popup or audio API */}
                            <a href={phonetic.audio} target="_blank" rel="noreferrer"><i className="fas fa-volume-up"></i></a>
                        </div>
                    )
                })}
            </div>

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
        return null;
    }

}