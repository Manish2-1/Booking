// import "./register.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    password: "",
    img: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await axios.post("/api/auth/register", formData);
      navigate("/login");
    } catch (err) {
      console.error("Register error:", err);
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="lInput"
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="lInput"
          onChange={handleChange}
        />
        <input
          type="text"
          id="country"
          placeholder="Country"
          className="lInput"
          onChange={handleChange}
        />
        <input
          type="text"
          id="city"
          placeholder="City"
          className="lInput"
          onChange={handleChange}
        />
        <input
          type="text"
          id="phone"
          placeholder="Phone"
          className="lInput"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="lInput"
          onChange={handleChange}
        />
        <button onClick={handleClick} className="lButton">
          Register
        </button>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>{error}</span>
        )}
      </div>
    </div>
  );
};

export default Register;
