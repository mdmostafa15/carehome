import "../style/Service.css"




export default function Service(params) {
    
    return (
        <article className="service">
            <span>{params.item.icon}</span><h6>{params.item.title}</h6>
            <p>{params.item.info}</p>
        </article>
    )
}