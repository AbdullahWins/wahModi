import { Link } from "react-router-dom";
import { banner } from "../assets/images/getImages";

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                {/* banner texts */}
                <div className="d-flex align-items-center gap-3 mb-2">
                    {/* texts  */}
                    <div style={{flex:1}}>
                        <h1 className="title">I am Narandra Modi Bot for you!</h1>
                    </div>
                    <div >
                        <Link to="/conversation" className="action-btn common-btn">Ask me anything</Link>
                    </div>
                </div>

                {/* banner  */}
                {/* banner-img  */}
                <div>
                    <div className="banner-img">
                        <img src={banner} alt="banner" className="img-fluid" />
                    </div>
                </div>
                    
            </div>
        </section>
    )
}

export default Banner;