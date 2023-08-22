import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./featured.css";
import { AuthContext } from "../../context/AuthContext";

const featuredItems = [
  {
    name: "Bus",
    imgSrc: "https://thumbs.dreamstime.com/b/white-intercity-bus-rides-highway-271969260.jpg",
    linkPath: "/list"
  },
  {
    name: "Metro",
    imgSrc: "https://images.pexels.com/photos/2275288/pexels-photo-2275288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkPath: "/listMetro"
  },
  {
    name: "Train",
    imgSrc: "https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg?auto=compress&cs=tinysrgb&w=1600",
    linkPath: "/listTrain"
  }
];

const Featured = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFeaturedItemClick = (linkPath) => {
    if (user) {
      navigate(linkPath);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="featured">
      {featuredItems.map((item, index) => (
        <React.Fragment key={index}>
          <Link to={user ? item.linkPath : "/login"}>
            <div className="featuredItem" onClick={() => handleFeaturedItemClick(item.linkPath)}>
              <img src={item.imgSrc} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>{item.name}</h1>
              </div>
            </div>
          </Link>
          <h6>
            Get rewarded for your travels – unlock instant savings of 10% or more
            with a free Lamabooking account
          </h6>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Featured;
