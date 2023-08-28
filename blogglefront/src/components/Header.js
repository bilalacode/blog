import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        document.body.classList.toggle('dark-mode', newDarkMode);
    }
    

    return (
        <header className={darkMode ? "dark" : ""}>
            <div className="logo">
                Bloggle
            </div>
            <div className="navbarlinks">
                <Link to="/">Home</Link>
                <Link to="/Authors">Authors</Link>
                <Link to="/About">About</Link>
                <Link to="/Login">Login</Link>
                <span onClick={toggleDarkMode} className="moon-icon">
                    {darkMode ? "🌞" : "🌙"}
                </span>
            </div>
        </header>
    )
}

export default Header;
