import { Link } from "react-router-dom"
import '../styles/Header.css'
const Header = () => {
    return (
        <header>
            <div className="logo">
                Bloggle
            </div>
            <div className="navbarlinks">
                <Link to="/">Home</Link>
                <Link to="/Authors">Authors</Link>
                <Link to="/About">About</Link>                
                <Link to="/Login">Login</Link>

            </div>
        </header>
    )
}

export default Header