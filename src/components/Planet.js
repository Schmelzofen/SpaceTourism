import { Link } from "react-router-dom"

const Planet = ({ hr, img, name, description, distance, travel, distanceText, travelText }) => {
    return (
        <section className="destination">
            <h2><span>01</span> PICK YOUR DESTINATION</h2>
            <section className="grid">
                <article className="planetDetail">
                    <div className="planets">
                        <ul>
                            <li><Link className="link" to="/destination/moon">MOON</Link></li>
                            <li><Link className="link" to="/destination/mars">MARS</Link></li>
                            <li><Link className="link" to="/destination/europa">EUROPA</Link></li>
                            <li><Link className="link" to="/destination/titan">TITAN</Link></li>
                        </ul>
                    </div>
                </article>
                <section className="destinationPlanet">
                    <div className="planetLeft">
                        <img src={img} alt={name} />
                    </div>
                    <div className="planetRight">
                        <div className="planetRightTop">
                            <h1>{name} </h1>
                            <p>{description} </p>
                        </div>
                        {hr}
                        <div className="planetRightBottom">
                            <span className="customWidth">{distanceText}</span>
                            <span>{travelText}</span>
                            <br />
                            <span className="customWidth">{distance} </span>
                            <span >{travel} </span>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default Planet;