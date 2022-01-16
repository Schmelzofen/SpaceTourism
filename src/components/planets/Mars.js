import Planet from "../Planet"
import data from "../../data.json"

const Mars = () => {
    return (
        <>
            <Planet
                img={data.destinations[1].images.png}
                name={data.destinations[1].name.toUpperCase()}
                description={data.destinations[1].description}
                distanceText={"AVG. DISTANCE"}
                travelText={"EST. TRAVEL TIME"}
                distance={data.destinations[1].distance}
                travel={data.destinations[1].travel}
                hr={<hr />}
            />
        </>
    );
}

export default Mars;