export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <section className="synonyms-container">
                <h4>Similar Words:</h4>
                <ul className="synonyms-list">

                 {props.synonyms.map(function(synonym, i) {
                    return (
                        <li key={i}>{synonym}</li>
                    )
                })}

            </ul>
            </section>
        )
    } else {
        return null;
    }
}