import Crew from "../Crew"
import data from "../../data.json"

const Victor = () => {
    return (
        <>
            <Crew
                title={data.crew[2].role.toUpperCase()}
                person={data.crew[2].name.toUpperCase()}
                text={data.crew[2].bio}
                image={data.crew[2].images.png}
            />
        </>
    );
}

export default Victor;
