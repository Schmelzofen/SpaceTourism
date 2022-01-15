import Technology from "../Technology"
import data from "../../data.json"

const Capsule = () => {
    return (
        <>
            <Technology />
            <section className="launch">
                <div className="launchLeft">
                    <p>THE TERMINOLOGY...</p>
                    <h1>{data.technology[2].name}</h1>
                    <p>{data.technology[2].description}</p>
                </div>
                <div className="launchRight">
                    <img src={data.technology[2].images.portrait} alt={data.technology[2].name} />
                </div>
            </section>
        </>
    );
}

export default Capsule;