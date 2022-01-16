import Technology from "../Technology"
import data from "../../data.json"

const Spaceport = () => {
    return (
        <Technology
            terminology={"THE TERMINOLOGY..."}
            name={data.technology[1].name.toUpperCase()}
            description={data.technology[1].description}
            image={data.technology[1].images.portrait}
        />
    );
}

export default Spaceport;