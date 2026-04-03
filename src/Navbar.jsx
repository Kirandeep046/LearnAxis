import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  // 🔥 get user after login
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🔥 logout
  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    navigate("/"); // go to home
  };

  return (

    <nav className={`navbar ${darkMode ? "dark-navbar" : ""}`}>

      <div className="logo">Learnaxis</div>

      <ul className="nav-links">
        <li><NavLink to="/" className="nav-item">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-item">About</NavLink></li>
        <li><NavLink to="/courses" className="nav-item">Courses</NavLink></li>
        <li><NavLink to="/benefits" className="nav-item">Benefits</NavLink></li>
        <li><NavLink to="/pricing" className="nav-item">Pricing</NavLink></li>
        <li><NavLink to="/blog" className="nav-item">Blog</NavLink></li>
      </ul>

      <div className="nav-buttons">

        {/* 🔥 IF USER LOGGED IN */}
        {user ? (
          <>
            <span className="user-name">Hi, {user.name}</span>

            <img 
              src="https://i.pravatar.cc/40" 
              alt="user"
              className="avatar"
            />

            <button className="signout" onClick={handleLogout}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            {/*signin Link*/}
            <NavLink to="/sign-in">
              <button className="signin">Sign in</button>
            </NavLink>

            <NavLink to="/signup">
              <button className="signup">Sign up</button>
            </NavLink>
          </>
        )}

        {/* theme toggle */}
        <div 
          className={`theme-toggle ${darkMode ? "spin" : ""}`}
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </div>

      </div>

    </nav>
  );
}

export default Navbar;
