import { Link } from "react-router-dom"

const Technology = () => {
    return (
        <section className="tech">
            <h1><span>03</span> SPACE LAUNCH 101</h1>
            <div className="techNav">
                <Link className="link2" to="/tech/launch"><div className="ball">1</div></Link>
                <Link className="link2" to="/tech/port"><div className="ball">2</div></Link>
                <Link className="link2" to="/tech/capsule"><div className="ball">3</div></Link>
            </div>
        </section>
    );
}

export default Technology