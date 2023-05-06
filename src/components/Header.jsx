import { Link } from "react-router-dom";
import { logo } from "../assets/images/getImages";

const Header = () => {
    return (
        <header >
            <div className="container">
                <nav>
                    <Link to="/" className="logo">
                        <img src={logo} alt="log" className="img-fluid" />
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;