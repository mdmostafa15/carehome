import { Link } from "react-router-dom";
import "../style/Navbar.css";

const items = [
    {
        path: "/",
        name:"home"
    },
    {
        path: "/typesofcare",
        name:"care homes"
    },
    {
        path: "/helpnadvice",
        name:"Help and advice"
    },
    {
        path: "/contacts",
        name:"Contact"
    }
]



function Navbar(params) {
    
    const menu = items.map((item,i)=>{
        return(<Link key={i} to={item.path}>{item.name}</Link>);
     })

    return(
        <div id="nav" className="U-bg-clr-bw">
            <nav className="navbar U-wrap-width">
                {menu}
            </nav>
        </div>
    )
}

export default Navbar;