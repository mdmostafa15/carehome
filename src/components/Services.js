import { FaTruckMedical,FaUserNurse } from "react-icons/fa6";
import { GiTestTubes } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import "../style/Services.css";
import Service from "./Service";

const serviceArt=[
    {
        icon: <FaUserNurse className="nur-icon"/>,
        title: "nursing care",
        info:"loElit ut qui esse nisi magna nulla ipsum cillum. Labore non reprehenderit eu irure laborum. Consectetur anim quis minim esse fugiat labore ipsum.",
      
    },
    {
        icon: <FaTruckMedical className="nur-icon"/>,
        title: "Ambulance",
        info:"loElit ut qui esse nisi magna nulla ipsum cillum. Labore non reprehenderit eu irure laborum. Consectetur anim quis minim esse fugiat labore ipsum.",
      
    },
    {
        icon: <GiTestTubes className="nur-icon"/>,
        title: "diagnostic",
        info:"loElit ut qui esse nisi magna nulla ipsum cillum. Labore non reprehenderit eu irure laborum. Consectetur anim quis minim esse fugiat labore ipsum.",
      
    },
    {
        icon: <RiMentalHealthFill className="nur-icon"/>,
        title: "mental health",
        info:"loElit ut qui esse nisi magna nulla ipsum cillum. Labore non reprehenderit eu irure laborum. Consectetur anim quis minim esse fugiat labore ipsum.",
      
    }
]


function Services(params) {
    return (
        <section className="U-bg-clr-bw">
            <div className="services U-wrap-width">
            <div className="section-title">
                <h4>Our Services</h4>
            
            </div>
            <div className="services-center">
                {serviceArt.map((item, i)=>{
                    return (
                        <Service key={i} item={item} />
                    );
                })}
            </div>
            </div>
        </section> 
    )
}
export default Services;