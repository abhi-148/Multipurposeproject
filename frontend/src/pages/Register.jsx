import { useState } from "react";

import axios from "axios";

import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {

  const [formData, setFormData] =
    useState({

      name: "",
      email: "",
      password: "",

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(

        "http://localhost:5000/register",

        formData

      );

      alert(res.data.message);

    } catch (err) {

      console.log(err);

      alert("Registration Failed");

    }

  };

  return (

    <section className="register-page">

      {/* LEFT SIDE */}

      <div className="register-left">

        <div className="register-overlay">

          <h1>
            Create Account
          </h1>

          <p>
            Join the next generation
            creative digital platform
            with secure authentication
            and modern experience.
          </p>

          <div className="register-features">

            <div className="register-feature">

              <i className="fa-solid fa-user-shield"></i>

              <span>
                Secure User System
              </span>

            </div>

            <div className="register-feature">

              <i className="fa-solid fa-code"></i>

              <span>
                Full Stack Integration
              </span>

            </div>

            <div className="register-feature">

              <i className="fa-solid fa-rocket"></i>

              <span>
                Fast & Responsive UI
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="register-right">

        <div className="register-card">

          <h2>
            Register Now
          </h2>

          <p>
            Fill your information to
            create a new account
          </p>

          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <div className="register-input">

              <i className="fa-solid fa-user"></i>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />

            </div>

            {/* EMAIL */}

            <div className="register-input">

              <i className="fa-solid fa-envelope"></i>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />

            </div>

            {/* PASSWORD */}

            <div className="register-input">

              <i className="fa-solid fa-lock"></i>

              <input
                type="password"
                name="password"
                placeholder="Create password"
                onChange={handleChange}
                required
              />

            </div>

            {/* BUTTON */}

            <button type="submit">

              Create Account

            </button>

          </form>

          <div className="register-bottom">

  Already have an account?

  <Link to="/login">
    Login
  </Link>

</div>
        </div>

      </div>

    </section>
  );
};

export default Register;