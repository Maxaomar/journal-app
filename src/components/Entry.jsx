export default function  Entry() {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
            <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount fuji image" className="main-image"/>
            </div>

            <div className="container">
                <img src="src/images/marker.png" alt="marker image" />
                <span>Japan</span>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google</a>
                <h1>Mount Fuji</h1>
                <p className="trip-dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </article>
    )
}