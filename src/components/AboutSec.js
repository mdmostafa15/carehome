import "../style/AboutSec.css";

export default function AboutSec(params) {
    return (
        <section id="about-sec" className="U-bg-clr-wb">
            <div className="U-wrap-width ab-sec">
                <div className="ab-container">
                    <h1>{params.name||"About Us"}</h1>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum Generato. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum Generato
                    </p>
                </div>
            </div>
        </section>
    
    )
}