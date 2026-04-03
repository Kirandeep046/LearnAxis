import {Link} from "react-router-dom";
import "../Styles/Hero.css";



function Hero () {
    return(
        <section className="hero">
            <h1>
            Rise to the Top 1%<br/>
             with Elite Masterclasses
            </h1>


            <p>
                Learn from experts in product,growth,tech,data,expertly 
                <br/>become top 1% fast ,career-focused and effectively.
            </p>


            <Link to="/courses">
            <button className="hero-btn">
             Explore Courses
            </button>
            </Link>

        </section>

    
    );
    
}
export default Hero;