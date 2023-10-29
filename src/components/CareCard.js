// Imported Dependencies

import "../style/CareCard.css";
import { Link } from "react-router-dom";



function myFunc(state, arrLen) {
    const arr = state.slice(0,arrLen).map((item, i)=>{
        let len = item.tags.length;
        len = (len > 4)? 4 : len;
        return (
            <article key={i} className="card">
                <div className="img-container">
                    <img src={item.image} alt="nursing" />
                    <div className="care-item U-bg-clr-bw">
                        <h4>{item.home}</h4>
                        <p>{`${item.holding} ${item.area} ${item.postal}`}</p>
                    </div>
                    <div className="facility">
                        {
                            item.tags.slice(0,len).map((itm, inx)=>{
                                return (
                                    <li key={inx}>{itm}</li>
                                )
                            })
                        }
                    </div>
                </div>
                <Link to="/carecenter" state={item} className="card-info U-bg-clr-bw">Find more ...</Link>
            </article>
        )
    })
    return arr;
}

export default function CareCard({state, arrLen}) {
    return (
        myFunc(state, arrLen)
    )
}