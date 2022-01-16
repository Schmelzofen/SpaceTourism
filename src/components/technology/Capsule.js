import Technology from "../Technology"
import data from "../../data.json"

const Capsule = () => {
    return (
        <Technology
            terminology={"THE TERMINOLOGY..."}
            name={data.technology[2].name.toUpperCase()}
            description={data.technology[2].description}
            image={data.technology[2].images.portrait}
        />
    );
}

export default Capsule;