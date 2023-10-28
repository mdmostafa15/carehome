import Logo  from "./Logo.js";
import Contact from "./Contact.js";
import "../style/Header.css"

function Header() {
    return (
        <div className="U-bg-clr-wb U-wrap-width header">
            <Logo />
            <Contact /> 
        </div>
    )
}

export default Header;