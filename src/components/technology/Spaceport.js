import Technology from "../Technology"
import data from "../../data.json"

const Spaceport = () => {
    return (  
        <>
            <Technology />
            <section className="launch">
                <div className="launchLeft">
                    <p>THE TERMINOLOGY...</p>
                    <h1>{data.technology[1].name}</h1>
                    <p>{data.technology[1].description}</p>
                </div>
                <div className="launchRight">
                    <img src={data.technology[1].images.portrait} alt={data.technology[1].name} />
                </div>
            </section>
        </>
    );
}

export default Spaceport;