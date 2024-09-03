import React, { useContext, useState } from "react";
import "./profileSetting.css";
import Navbar from "../../components/navbar/Navbar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";


const ProfileSettings = () => {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user.user.username,
    email: user.user.email,
    imageUrl: user.user.imageUrl,
    password: "",
  });

 
  const updateUser = async () => {
    try {
      const formdata = new FormData();
      formdata.append("image", formData.imageUrl);
      formdata.append("name", formData.name);
      formdata.append("email", formData.email);
      formdata.append("password", formData.password);
      
      const response = await axios.put(
        `http://localhost:8000/user/update/${user.user.id}/`,
        formdata
      );
      console.log("Update successful:", response.data);
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    await updateUser(); 
    
  };

  return (
    <div>
      <Navbar />
      <div className="profile-settings">
        <h2>Profile Settings</h2>
        <form onSubmit={handleSubmit}>
        <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : user.user.imageUrl
              }
              alt=""
              className="rimg"
            />
          </div>
          <div className="formInput">
            <label htmlFor="file">
              image : <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              disabled={true}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
            {" "}
            <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;