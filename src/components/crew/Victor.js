import Crew from "../Crew"
import data from "../../data.json"

const Victor = () => {
    return (
        <>
            <Crew
                title={data.crew[2].role}
                person={data.crew[2].name}
                text={data.crew[2].bio}
                image={data.crew[2].images.png}
            />
        </>
    );
}

export default Victor;
