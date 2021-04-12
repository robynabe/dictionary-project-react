export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <ul className="synonyms-list">

                 {props.synonyms.map(function(synonym, i) {
                    return (
                        <li key={i}>{synonym}</li>
                    )
                })}

            </ul>
        )
    } else {
        return null;
    }
}