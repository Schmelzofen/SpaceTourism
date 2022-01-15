import Crew from "../Crew"
import data from "../../data.json"

const Ansari = () => {
    return (
        <>
            <Crew
                title={data.crew[3].role.toUpperCase()}
                person={data.crew[3].name.toUpperCase()}
                text={data.crew[3].bio}
                image={data.crew[3].images.png}
            />
        </>
    );
}

export default Ansari;
