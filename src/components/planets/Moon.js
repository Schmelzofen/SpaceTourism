
import Planet from "../Planet"
import data from "../../data.json"
const Moon = () => {
    return (
        <>
            <Planet
                img={data.destinations[0].images.png}
                name={data.destinations[0].name.toUpperCase()}
                description={data.destinations[0].description}
                distanceText={"AVG. DISTANCE"}
                travelText={"EST. TRAVEL TIME"}
                distance={data.destinations[0].distance}
                travel={data.destinations[0].travel}
                hr={<hr />}
            />
        </>
    );
}

export default Moon;