import Synonyms from './Synonyms';

export default function Meaning(props) {

    return (
        <section className="meanings-container">
            <h3>{props.meanings.partOfSpeech}</h3>
            {/* Loops through and displays the definitions if more then one is generated */}
            {props.meanings.definitions.map(function(definition, i) {
                return (
                    <div key={i}>
                        <p>{definition.definition}</p>
                        <p><em>{definition.example}</em></p>

                        <Synonyms synoyms={definition.synonyms}/>
                    </div>
                )
            })}

        </section>
    );
}