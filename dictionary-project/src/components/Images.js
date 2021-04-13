export default function Images(props) {
    
    if(props.images) {
        return (
            <section className="image-container">
                {props.images.map(function(image, i) {
                    return (
                        <div key={i}>
                            <a href={image.src.original} target="_blank" rel="noreferrer">
                                <img src={image.src.tiny} alt={props.word}/>
                            </a>
                        </div>
                    )
                })}
            </section>
        );
    } else {
        return null;
    }
}