export default function  Entry(props) {
    const timeOfDay = new Date()
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img src={props.image.src}  className="main-image" alt={props.image.alt}/>
            </div>

            <div className="container">
                 <div className="destination">
                     <img src={props.markerimg} className="marker-image"/>
                      <span>{props.country}</span>
                      <a href={props.link}>View on Google</a>
                  </div>

                <h1>{props.title}</h1>
                <p className="trip-dates">{props.dates}</p>
                <p>{props.description}</p>
            </div>
        </article>
    )
}