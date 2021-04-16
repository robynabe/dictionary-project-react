export default function Images(props) {
    function showMore() {
        alert("Show more images here");
    }
    
    if(props.images) {
        return (
            <section className="image-container">
                {props.images.map(function(image, i) {
                    return (
                        <div className="images" key={i}>
                            <a href={image.src.original} target="_blank" rel="noreferrer">
                                <img src={image.src.tiny} alt={props.word}/>
                            </a>
                        </div>
                    )
                })}
                <button onClick={showMore}>See more</button>
            </section>
        );
    } else {
        return null;
    }
}