import { useState, useEffect } from "react";
import CareCardCont from "../components/CareCardCont";
import SearchSec from "../components/SearchSec";
import banner from "../images/banner2.jpg";
import Hero from "../components/Hero.js";
import fetchData from "../components/myFunctions.js";
import { useLocation } from "react-router-dom";


export default function TypesOfCare() {
    const location = useLocation();
    const [state, setState ] = useState([]);
    
    useEffect(()=>{
        let url;
        if (location.state === null) {
            url = 'http://localhost:5000/api/carehome/';    
        }else{
            url = location.state.url
        }
        
        fetchData(url).then((dt)=>{
            setState(dt)
        }).catch((err)=>{
            console.log(err);
        })    

    },[location.state])

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
        if(postal === "" && area === "" && hName === "")
            url = 'http://localhost:5000/api/carehome/';
        
        fetchData(url).then((data)=>{
            setState(data);
        }).catch((err)=>{
            console.log(err);
        })
        
    }

    return (
        <>
            <Hero bnr={banner} />
            <SearchSec fHandler={formHandler} />
            <CareCardCont state={state} len={state.length} />
        </>
    )
}