import Header from "./components/Header";
import Entry from "./components/Entry";

export default function App() {
    return (
        <>
        <Header />
        <Entry
             image={{
                  src: "https://scrimba.com/links/travel-journal-japan-image-url",
                  alt: "mount fuji image"
                  }}
             markerimg="src/images/marker.png"
             country="Japan"
             link="https://www.google.com/maps/place/Mount+Fuji/"
             title="Mount Fuji"
             dates="Dates: 12 Jan, 2021 - 24 Jan, 2021"
             description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
        <Entry
              image={{
                  src: "",
                  alt: ""
                  }}
              markerimg="src/images/marker.png"
              country=""
              link=""
              title=""
              dates=""
              description=""
        />
        <Entry
              image={{
                  src: "",
                  alt: ""
                  }}
              markerimg="src/images/marker.png"
              country=""
              link=""
              title=""
              dates=""
              description=""
        />
        <Entry
              image={{
                  src: "",
                  alt: ""
                  }}
              markerimg="src/images/marker.png"
              country=""
              link=""
              title=""
              dates=""
              description=""
        />
        <Entry
              image={{
                  src: "",
                  alt: ""
                  }}
              markerimg="src/images/marker.png"
              country=""
              link=""
              title=""
              dates=""
              description=""
        />
        <Entry
              image={{
                  src: "",
                  alt: ""
                  }}
              markerimg="src/images/marker.png"
              country=""
              link=""
              title=""
              dates=""
              description=""
        />
        <Entry
              image={{
                  src: "",
                  alt: ""
                  }}
              markerimg="src/images/marker.png"
              country=""
              link=""
              title=""
              dates=""
              description=""
        />
        <Entry
              image={{
                  src: "",
                  alt: ""
                  }}
              markerimg="src/images/marker.png"
              country=""
              link=""
              title=""
              dates=""
              description=""
        />
        </>
    )
}