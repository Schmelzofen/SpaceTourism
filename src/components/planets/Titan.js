import Planet from "../Planet"
import data from "../../data.json"
const Titan = () => {
    return (
        <>
            <Planet
                img={data.destinations[3].images.png}
                name={data.destinations[3].name.toUpperCase()}
                description={data.destinations[3].description}
                distanceText={"AVG. DISTANCE"}
                travelText={"EST. TRAVEL TIME"}
                distance={data.destinations[3].distance}
                travel={data.destinations[3].travel}
                hr={<hr />}
            />
        </>
    );
}

export default Titan;