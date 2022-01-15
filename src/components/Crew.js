import { Link } from "react-router-dom"

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
                        <img src={image} alt={person} />
                    </div>
                </section>
                <div className="whiteballs">
                    <Link to="/crew/douglas"><div className="ball1"></div></Link>
                    <Link to="/crew/mark"><div className="ball2"></div></Link>
                    <Link to="/crew/victor"><div className="ball3"></div></Link>
                    <Link to="/crew/ansari"><div className="ball4"></div></Link>
                </div>
            </div>
        </section>
    );
}

export default Crew;
