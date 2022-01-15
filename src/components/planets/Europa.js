import Planet from "../Planet"
import data from "../../data.json"

const Europa = () => {
    return (
        <>
            <Planet
                img={data.destinations[2].images.png}
                name={data.destinations[2].name.toUpperCase()}
                description={data.destinations[2].description}
                distanceText={"AVG. DISTANCE"}
                travelText={"EST. TRAVEL TIME"}
                distance={data.destinations[2].distance}
                travel={data.destinations[2].travel}
                hr={<hr />}
            />
        </>
    );
}

export default Europa;