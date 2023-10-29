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

        const temp = e.target[0].value;

        let url = 'http://localhost:5000/api/carehome/search';

        if(Number.parseInt(temp)){
            url = `${url}?postal=${temp}`;
        }
        else if(temp.trim().indexOf(" ") < 0 && temp !== ""){
            url = `${url}?area=${temp}`;
        }
        else if (temp.trim().indexOf(" ") !== -1){
            url = `${url}?home=${temp}`;
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