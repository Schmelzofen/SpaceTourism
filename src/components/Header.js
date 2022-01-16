import logo from "../assets/shared/logo.svg"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <div className="whiteLine"></div>
            <div className="headerBar">
                <nav>
                    <ul>
                        <li><NavLink className="link3" to="/" style={({ isActive }) => ({
                            borderBottom: isActive ? '3px solid white' : null,
                        })}><span>00</span>HOME</NavLink></li>
                        <li><NavLink className="link3" strict to="/destination" style={({ isActive }) => ({
                            borderBottom: isActive ? '3px solid white' : null,
                        })}><span>01</span>DESTINATION</NavLink></li>
                        <li><NavLink className="link3" strict to="/crew" style={({ isActive }) => ({
                            borderBottom: isActive ? '3px solid white' : null,
                        })}><span>02</span>CREW</NavLink></li>
                        <li><NavLink className="link3" strict to="/tech" style={({ isActive }) => ({
                            borderBottom: isActive ? '3px solid white' : null,
                        })}><span>03</span>TECHNOLOGY</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div >
    );
}

export default Header;