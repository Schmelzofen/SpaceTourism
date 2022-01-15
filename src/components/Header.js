import logo from "../assets/shared/logo.svg"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <div className="whiteLine"></div>
            <div className="headerBar">
                <nav>
                    <ul>
                        <li><Link className="link" to="/"><span>00</span>HOME</Link></li>
                        <li><Link className="link" to="/destination"><span>01</span>DESTINATION</Link></li>
                        <li><Link className="link" to="/crew"><span>02</span>CREW</Link></li>
                        <li><Link className="link" to="/tech"><span>03</span>TECHNOLOGY</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="blurBar">

            </div>
        </div>
    );
}

export default Header;