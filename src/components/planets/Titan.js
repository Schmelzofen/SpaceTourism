import Planet from "../Planet"
import data from "../../data.json"
const Titan = () => {
    return (
        <>
            <Planet />
            <section className="planetSection">
                <div className="planetLeft">
                    <img src={data.destinations[3].images.png} alt={data.destinations[3].name} />
                </div>
                <div className="planetRightTop">
                    <h1>{data.destinations[3].name} </h1>
                    <p>{data.destinations[3].description} </p>
                </div>
                <div className="planetRightBottom">
                    <hr />
                    <span>AVG. DISTANCE</span>
                    <span>EST. TRAVEL TIME</span>
                    <br />
                    <span>{data.destinations[3].distance} </span>
                    <span>{data.destinations[3].travel} </span>
                </div>
            </section>
        </>
    );
}

export default Titan;