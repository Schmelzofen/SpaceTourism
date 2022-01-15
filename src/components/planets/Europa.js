import Planet from "../Planet"
import data from "../../data.json"

const Europa = () => {
    return (  
        <>
            <Planet />
            <section className="planetSection">
                <div className="planetLeft">
                    <img src={data.destinations[2].images.png} alt={data.destinations[2].name} />
                </div>
                <div className="planetRightTop">
                    <h1>{data.destinations[2].name} </h1>
                    <p>{data.destinations[2].description} </p>
                </div>
                <div className="planetRightBottom">
                    <hr />
                    <span>AVG. DISTANCE</span>
                    <span>EST. TRAVEL TIME</span>
                    <br />
                    <span>{data.destinations[2].distance} </span>
                    <span>{data.destinations[2].travel} </span>
                </div>
            </section>
        </>
    );
}

export default Europa;