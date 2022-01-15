import { Link } from "react-router-dom"

const Crew = ({ title, person, text, image }) => {
    return (
        <section className="crew">
            <h1><span>02</span> MEET YOUR CREW</h1>
            <div>
                <section className="crewMember">
                    <div className="left">
                        {title}
                        {person}
                        {text}
                    </div>
                    <div className="right">
                        <img src={image} alt={person} />
                    </div>
                </section>
                <Link to="/crew/douglas"><div className="whiteballs"></div></Link>
                <Link to="/crew/mark"><div className="whiteballs"></div></Link>
                <Link to="/crew/victor"><div className="whiteballs"></div></Link>
                <Link to="/crew/ansari"><div className="whiteballs"></div></Link>
            </div>
        </section>
    );
}

export default Crew;
