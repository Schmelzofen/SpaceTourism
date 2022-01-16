import Technology from "../Technology"
import data from "../../data.json"

const Launch = () => {
    return (
        <Technology
            terminology={"THE TERMINOLOGY..."}
            name={data.technology[0].name.toUpperCase()}
            description={data.technology[0].description}
            image={data.technology[0].images.portrait}
        />
    );
}

export default Launch;