import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "../style/Logo.css";


export default function Logo() {
    return(
        <div className="logo-img">
            <Link to="/">
                <img src={logo} alt="Care Home" />
            </Link>
        </div>
    )
}