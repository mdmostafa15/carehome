import { useLocation } from "react-router-dom";
import AboutSec from "../components/AboutSec";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Facilites from "../components/Facilities";


export default function CareCenter(params) {
    const {state} = useLocation();

    return (
        <>
            <Hero bnr={state.image} />
            <AboutSec  name={state.home} />
            <Services />
            <Facilites items={state.facilities} />
        </>
    )
}