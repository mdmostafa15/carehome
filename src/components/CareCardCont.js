import CareCard from "./CareCard";

export default function CareCardCont ({state, len}) {

    const arrLen = (state.length > len) ? len : state.length;

    return (
        <section id="cards" className="U-bg-clr-wb" >
            <div className="cards grid-container U-wrap-width">
                <CareCard state={state} arrLen={arrLen} />
            </div>
        </section>
    )
}