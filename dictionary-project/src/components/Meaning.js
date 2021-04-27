import Synonyms from './Synonyms';

export default function Meaning(props) {

    return (
        <section className="meanings-container">
            <h3>{props.meanings.partOfSpeech}</h3>
            {/* Loops through and displays the definitions if more then one is generated */}
            {props.meanings.definitions.map(function(definition, i) {
                return (
                    <div key={i}>
                        <div className="definition">
                            <p>{definition.definition}</p>
                            <p><em>{definition.example}</em></p>
                        </div>

                        <Synonyms synonyms={definition.synonyms}/>
                    </div>
                )
            })}

        </section>
    );
}