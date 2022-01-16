import { NavLink } from "react-router-dom"


const Crew = ({ title, person, text, image }) => {
    return (
        <section className="crew">
            <h1><span>02</span> MEET YOUR CREW</h1>
            <div>
                <section className="crewMember">
                    <div className="left">
                        <p>{title}</p>
                        <h1>{person}</h1>
                        <p>{text}</p>
                    </div>
                    <div className="right">
                        <img src={image} alt={person} height="650" />
                    </div>
                </section>
                <div className="whiteballs">
                    <NavLink to="/crew/douglas" className="link4 ball1" style={({ isActive }) => ({
                        background: isActive ? 'white' : null
                    })}><div className="ball1"></div></NavLink>
                    <NavLink to="/crew/mark" className="link4 ball2" style={({ isActive }) => ({
                        background: isActive ? 'white' : null
                    })}><div className="ball2"></div></NavLink>
                    <NavLink to="/crew/victor" className="link4 ball3" style={({ isActive }) => ({
                        background: isActive ? 'white' : null
                    })}><div className="ball3"></div></NavLink>
                    <NavLink to="/crew/ansari" className="link4 ball4" style={({ isActive }) => ({
                        background: isActive ? 'white' : null
                    })}><div className="ball4"></div></NavLink>
                </div>
            </div>
        </section>
    );
}

export default Crew;
