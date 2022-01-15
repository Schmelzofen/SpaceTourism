import Planet from "../Planet"
import data from "../../data.json"
const Moon = () => {
    return (
        <>
            <Planet />
            <section className="planetSection">
                <div className="planetLeft">
                    <img src={data.destinations[0].images.png} alt={data.destinations[0].name} />
                </div>
                <div className="planetRightTop">
                    <h1>{data.destinations[0].name} </h1>
                    <p>{data.destinations[0].description} </p>
                </div>
                <div className="planetRightBottom">
                    <hr />
                    <span>AVG. DISTANCE</span>
                    <span>EST. TRAVEL TIME</span>
                    <br />
                    <span>{data.destinations[0].distance} </span>
                    <span>{data.destinations[0].travel} </span>
                </div>
            </section>
        </>
    );
}

export default Moon;