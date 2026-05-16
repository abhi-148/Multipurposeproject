import { useState } from "react";

import axios from "axios";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import "./Login.css";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({

      email: "",
      password: "",

    });

  /* =========================
     HANDLE CHANGE
  ========================= */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value,

    });

  };

  /* =========================
     HANDLE SUBMIT
  ========================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res =
      await axios.post(

        "http://localhost:5000/login",

        formData

      );

      /* SAVE TOKEN */

      localStorage.setItem(

        "token",

        res.data.token

      );

      /* SAVE USER */

      localStorage.setItem(

        "user",

        JSON.stringify(
          res.data.user
        )

      );

      /* SUCCESS */

      alert(
        "Login Successful"
      );

      /* REDIRECT */

      navigate("/dashboard");

    } catch (err) {

      console.log(err);

      alert("Login Failed");

    }

  };

  return (

    <section className="login-page">

      {/* =========================
          LEFT SIDE
      ========================= */}

      <div className="login-left">

        <div className="login-overlay">

          <h1>
            Welcome Back
          </h1>

          <p>
            Sign in to continue your
            creative journey with
            Modena Studio Platform.
          </p>

          <div className="login-features">

            {/* FEATURE 1 */}

            <div className="feature-box">

              <i className="fa-solid fa-shield-halved"></i>

              <span>
                Secure Authentication
              </span>

            </div>

            {/* FEATURE 2 */}

            <div className="feature-box">

              <i className="fa-solid fa-bolt"></i>

              <span>
                Fast Performance
              </span>

            </div>

            {/* FEATURE 3 */}

            <div className="feature-box">

              <i className="fa-solid fa-layer-group"></i>

              <span>
                Modern UI Experience
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* =========================
          RIGHT SIDE
      ========================= */}

      <div className="login-right">

        <div className="login-card">

          <h2>
            Login Account
          </h2>

          <p>
            Enter your credentials
            to access dashboard
          </p>

          {/* FORM */}

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}

            <div className="input-box">

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

            <div className="input-box">

              <i className="fa-solid fa-lock"></i>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />

            </div>

            {/* BUTTON */}

            <button type="submit">

              Login Now

            </button>

          </form>

          {/* BOTTOM */}

          <div className="bottom-text">

            Don’t have an account?

            <Link to="/register">

              Register

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Login;