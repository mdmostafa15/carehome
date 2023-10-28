import "../style/SearchSec.css";
import INputSrch from "./InputSrch";
import { useState } from "react";

export default function SearchSec (params) {

    // const location = useLocation();

    let [postal, setPostal] = useState("");
    let [area, setArea] = useState("");
    let [hName, setHName] = useState("");

    
    function inputHandler (e) {
        e.preventDefault();
        const value = e.target.value;
        const name = e.target.name;
        if(name === "postal"){
            setPostal(value);
        }else if(name === "area"){
            setArea(value);
        }else if(name === "careHome"){
            setHName(value)
        }
    }

    return (
        <div className="seaVi U-bg-clr-bw">
            <div className="U-wrap-width">
                <h1 style={{
                    textAlign:"center",
                    lineHeight:"3"
                    }}>Find your nearest care home</h1>
                <form action="#" onSubmit={params.fHandler}>
                    <div className="form">
                        <INputSrch lableFor="postal" labelCont="Postal Code" iName="postal" iPlaceholder="Enter a location code..." iValue={postal} iType="text" iHandlerFun={inputHandler} />

                        <INputSrch lableFor="careHome" labelCont="Care Home" iPlaceholder="Care Home Name ..." iName="careHome" iValue={hName} iType="text" iHandlerFun={inputHandler} />

                        <INputSrch lableFor="area" labelCont="Area Name" iName="area" iPlaceholder="Enter your Area Name ..." iValue={area} iType="text" iHandlerFun={inputHandler} />

                        
                        <div className="btn-cont">
                            <div className="btn">
                                <input className="U-bg-clr-wb" type="submit" value="Search" />        
                            </div>
                        </div>
                        
                    </div>
                   
                </form>
            </div>
        </div>
    )
}