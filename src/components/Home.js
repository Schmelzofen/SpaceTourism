import { Link } from "react-router-dom"

const Home = () => {
    return (
        < div className="home" >
            <article className="travel">
                <p>SO, YOU WANT TO TRAVEL TO</p>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </article>
            <div className="explore">
                <Link className="link2" to="/destination/moon">EXPLORE</Link>
            </div>
        </div>
    );
}

export default Home;