


export default function Facilites ({items}) {
    return (
        <section className='U-bg-clr-wb'>
            <div className="U-wrap-width " style={{
                padding:"48px 0",
                fontSize:"18px",
                textTransform: "capitalize"
            }}>
                <div className="title" style={{
                    textAlign: "center",
                    padding:"20px 0",
                    fontSize:"36px"
                }}>
                    <h1>Facilites</h1>
                </div>
                <div className="grid-container facility">
                    {
                        items.map((itm, inx)=>{
                            return (
                            <li style={{
                                padding:"10px 0",
                                listStyle:"disclosure-closed"
                            }} key={inx}>{itm}</li>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}