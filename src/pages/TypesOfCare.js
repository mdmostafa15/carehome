import { useState, useEffect } from "react";
import CareCardCont from "../components/CareCardCont";
import SearchSec from "../components/SearchSec";
import banner from "../images/banner2.jpg";
import Hero from "../components/Hero.js";
import fetchData from "../components/myFunctions.js";
import { useLocation } from "react-router-dom";
import NotFoundComp from "../components/NotFundComp";


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
        
        // const postal = e.target[0].value;
        // const hName = e.target[1].value;
        // const area = e.target[2].value;


        // if (postal !== "") {
        //     url = `${url}?postal=${postal}`;

        //     if (hName !== ""){
        //         url=`${url}&home=${hName}`
        //     }
        //     if (area !== ""){
        //         url=`${url}&area=${area}`
        //     }
            
        // }else if (hName !== ""){
        //     url = `${url}?home=${hName}`

        //     if (postal !== ""){
        //         url=`${url}&postal=${postal}`
        //     }
        //     if (area !== ""){
        //         url=`${url}&area=${area}`
        //     }
            
        // }else if (area !== "") {
        //     url = `${url}?area=${area}`

        //     if (hName !== ""){
        //         url=`${url}&home=${hName}`
        //     }
        //     if (postal !== ""){
        //         url=`${url}&postal=${postal}`
        //     }
        // } 
        // if(postal === "" || area === "" || hName === "")
        if(temp === "")
            url = 'http://localhost:5000/api/carehome/';
        
        fetchData(url).then((data)=>{
            setState(data);
        }).catch((err)=>{
            console.log(err);
        })
        
    }
    
    const temp = (state.length === 0)?<NotFoundComp />
    :<CareCardCont state={state} len={state.length} />

    return (
        <>
        <Hero bnr={banner} />
        <SearchSec fHandler={formHandler} />
        {
           temp
        }
        </>
    )
}