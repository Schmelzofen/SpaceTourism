import Crew from "../Crew"
import data from "../../data.json"

const Douglas = () => {
    console.log(data.crew[0].images.png)
    return (
        <>
            <Crew
                title={data.crew[0].role}
                person={data.crew[0].name}
                text={data.crew[0].bio}
                image={data.crew[0].images.png}
            />
        </>
    );
}

export default Douglas;
