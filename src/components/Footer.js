import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "../style/Footer.css";

export default function Footer(params) {
    return (
        <footer className="U-bg-clr-bw ">
            <div className ="U-wrap-width footer">
                <div className="ft-container">
                    <div className="logo-img">
                        <Link to="/">
                            <img src={logo} alt="logo" /> 
                        </Link>
                    </div>
                    <div className="ft-txt">
                        <p>Care Home</p>
                    </div>
                </div>
                <div className="ft-info">
                    <p>
                        be healthy with your family
                    </p>
                </div>
            </div>
        </footer>
    )
}