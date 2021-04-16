import Synonyms from './Synonyms';

export default function Meaning(props) {

    return (
        <section className="meanings-container">
            <h3>{props.meanings.partOfSpeech}</h3>
            {/* Loops through and displays the definitions if more then one is generated */}
            {props.meanings.definitions.map(function(definition, i) {
                return (
                    <div key={i}>
                        <p><b>{definition.definition}</b></p>
                        <p className="examples"><em>{definition.example}</em></p>

                        <Synonyms synonyms={definition.synonyms}/>
                    </div>
                )
            })}

        </section>
    );
}