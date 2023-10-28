import { useState, useEffect } from "react";
import Hero from "../components/Hero.js";
import Services from "../components/Services.js";
import CareCardCont from "../components/CareCardCont.js";
import banner from "../images/banner3.jpg";
import AboutSec from "../components/AboutSec.js";
import SearchSec from "../components/SearchSec.js";
import fetchData from "../components/myFunctions.js";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const [state, setState ] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        const url = 'http://localhost:5000/api/carehome/';
        fetchData(url).then((dt)=>{
            setState(dt);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    function formHandler(e) {
        e.preventDefault();

        const postal = e.target[0].value;
        const hName = e.target[1].value;
        const area = e.target[2].value;

        let url = 'http://localhost:5000/api/carehome/search';

        if (postal !== "") {
            url = `${url}?postal=${postal}`;
        }
        if (area !== "") {
            if(postal !== "")
                url = `${url}&area=${area}`;
            else
                url = `${url}?area=${area}`
        } 
        if (hName !== ""){
            if(area !=="" )
                url=`${url}&home=${hName}`;
            else
                url=`${url}?home=${hName}`
            
        }
        
        navigate("/typesofcare",{
            state:{
                url
            }
        })
                
    }


    return (
        <>
        <Hero bnr={banner} />
        <SearchSec fHandler={formHandler}  />
        <AboutSec />
        <Services />
        <CareCardCont state={state} len={3} />
        </>
    )
}