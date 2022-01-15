import logo from "../assets/shared/logo.svg"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <img src={logo} alt="logo" />
            <div className="whiteLine"></div>
            <div className="headerBar">
                <nav>
                    <ul>
                        <li><span>00</span><Link to="/">HOME</Link></li>
                        <li><span>01</span><Link to="/destination">DESTINATION</Link></li>
                        <li><span>02</span><Link to="/crew">CREW</Link></li>
                        <li><span>03</span><Link to="/tech">TECHNOLOGY</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;