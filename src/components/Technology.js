import { NavLink } from "react-router-dom"


const Technology = ({ name, description, image, terminology }) => {
    return (
        <section className="tech">
            <h1><span>03</span> SPACE LAUNCH 101</h1>
            <div className="techNav">
                <NavLink className="link2 ball" to="/tech/launch" style={({ isActive }) => ({
                    background: isActive ? 'white' : null,
                    color: isActive ? "black" : null,
                    border: isActive ? "none" : null,
                })}><div className="">1</div></NavLink>
                <NavLink className="link2 ball" to="/tech/port" style={({ isActive }) => ({
                    background: isActive ? 'white' : null,
                    color: isActive ? "black" : null,
                    border: isActive ? "none" : null,
                })}><div className="">2</div></NavLink>
                <NavLink className="link2 ball" to="/tech/capsule" style={({ isActive }) => ({
                    background: isActive ? 'white' : null,
                    color: isActive ? "black" : null,
                    border: isActive ? "none" : null,
                })}><div className="">3</div></NavLink>
            </div>
            <article className="launch">
                <div className="launchLeft">
                    <p>{terminology}</p>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
                <div className="launchRight">
                    <img src={image} alt={name} />
                </div>
            </article>
        </section>
    );
}

export default Technology