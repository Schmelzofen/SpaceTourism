import Technology from "../Technology"
import data from "../../data.json"

const Launch = () => {
    return (
        <>
            <Technology />
            <section className="launch">
                <div className="launchLeft">
                    <p>THE TERMINOLOGY...</p>
                    <h1>{data.technology[0].name}</h1>
                    <p>{data.technology[0].description}</p>
                </div>
                <div className="launchRight">
                    <img src={data.technology[0].images.portrait} alt={data.technology[0].name} />
                </div>
            </section>
        </>

    );
}

export default Launch;