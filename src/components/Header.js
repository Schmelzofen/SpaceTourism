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
                        <li><span>00</span><Link className="link" to="/">HOME</Link></li>
                        <li><span>01</span><Link className="link" to="/destination">DESTINATION</Link></li>
                        <li><span>02</span><Link className="link" to="/crew">CREW</Link></li>
                        <li><span>03</span><Link className="link" to="/tech">TECHNOLOGY</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="blurBar">
                
            </div>
        </div>
    );
}

export default Header;