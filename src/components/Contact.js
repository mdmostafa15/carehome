import "../style/Contact.css";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export default function Contact(params) {
    return(
        <div className="contact">
            <span><BiPhoneCall className="icon" /> +880 xxxx xxx xxx</span><br/> 
            <span><MdEmail className="icon" /> info@xxx.xxx</span>
        </div>
    )
}