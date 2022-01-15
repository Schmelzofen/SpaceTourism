import Planet from "../Planet"
import data from "../../data.json"
const Mars = () => {
    return (
        <>
            <Planet />
            <section className="planetSection">
                <div className="planetLeft">
                    <img src={data.destinations[1].images.png} alt={data.destinations[1].name} />
                </div>
                <div className="planetRightTop">
                    <h1>{data.destinations[1].name} </h1>
                    <p>{data.destinations[1].description} </p>
                </div>
                <div className="planetRightBottom">
                    <hr />
                    <span>AVG. DISTANCE</span>
                    <span>EST. TRAVEL TIME</span>
                    <br />
                    <span>{data.destinations[1].distance} </span>
                    <span>{data.destinations[1].travel} </span>
                </div>
            </section>
        </>
    );
}

export default Mars;