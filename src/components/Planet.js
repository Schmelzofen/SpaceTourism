import { Link } from "react-router-dom"

const Planet = ({ img }) => {
    return (
        <section className="destination">
            <h2><span>01</span> PICK YOUR DESTINATION</h2>
            <section className="grid">
                <img src={img} alt="" />
                <article className="planetDetail">
                    <div className="planets">
                        <ul>
                            <li><Link to="/destination/moon">MOON</Link></li>
                            <li><Link to="/destination/mars">MARS</Link></li>
                            <li><Link to="/destination/europa">EUROPA</Link></li>
                            <li><Link to="/destination/titan">TITAN</Link></li>
                        </ul>
                    </div>
                </article>
            </section>
        </section>
    );
}

export default Planet;