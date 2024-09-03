import { useContext, useState} from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/login");
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

 const handelLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
    navigate("/");
  };

   
  

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Transport.Tn </span>
        </Link>

        {user   ?  (
          <div className="User">
            <div className="user-container">
              
              <div className="dropdown">
                <FontAwesomeIcon icon={faCaretDown} onClick={handleToggle} />
                {isOpen && (
                  <div className="dropdown-menu">
                    <button className="dropdown-item" onClick={handelLogout}>
                      Logout{" "}
                    </button>
                  </div>
                )}
              </div>
              <div className="UserName">
                <span style={{ color: 'orange'}}> {user.user.username}</span>
            </div>
              <Link to="/setting">
                {user  ? (
                  <div className="userImg">
                    <img src={user.user.imageUrl} alt="img" />
                  </div>
                ) : (
                  <div>
                    <img
                      src="https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                      alt="img"
                      className="userImg"
                    />
                  </div>
                )}
              </Link>
            </div>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <button className="navButtonL" onClick={handelClick}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
