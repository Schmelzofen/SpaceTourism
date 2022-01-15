import Crew from "../Crew"
import data from "../../data.json"

const Mark = () => {
    return (
        <>
            <Crew
                title={data.crew[1].role.toUpperCase()}
                person={data.crew[1].name.toUpperCase()}
                text={data.crew[1].bio}
                image={data.crew[1].images.png}
            />
        </>
    );
}

export default Mark;
