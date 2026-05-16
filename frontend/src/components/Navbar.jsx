import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import "./Navbar.css";

import logo from
"../assets/images/modena_header_logo.png";

const Navbar = () => {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const navigate =
    useNavigate();

  /* =========================
     USER
  ========================= */

  const token =
    localStorage.getItem("token");

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <>

      {/* =========================
         TOPBAR
      ========================= */}

      <div className="topbar">

        <div className="envato-logo">

          envato<span>market</span>

        </div>

        <button className="buy-btn">

          Buy now

        </button>

      </div>

      {/* =========================
         NAVBAR
      ========================= */}

      <nav className="navbar">

        {/* LOGO */}

        <div className="logo">

          <Link to="/">

            <img
              src={logo}
              alt="logo"
            />

          </Link>

        </div>

        {/* HAMBURGER */}

        <div

          className="hamburger"

          onClick={() =>
            setMenuOpen(!menuOpen)
          }

        >

          <i

            className={

              menuOpen

              ?

              "fa-solid fa-xmark"

              :

              "fa-solid fa-bars"

            }

          ></i>

        </div>

        {/* NAV LINKS */}

        <ul

          className={

            menuOpen

            ?

            "nav-links active"

            :

            "nav-links"

          }

        >

          {/* HOME */}

          <li>

            <Link to="/">

              Home

            </Link>

          </li>

          {/* PAGES */}

          <li className="dropdown-parent">

            <span className="menu-title">

              Pages

              <i className="fa-solid fa-angle-down"></i>

            </span>

            <div className="dropdown-menu">

              <Link to="/left-sidebar">

                Left sidebar

              </Link>

              <Link to="/right-sidebar">

                Right sidebar

              </Link>

              <Link to="/full-width">

                Full width

              </Link>

              <Link to="/sub-page">

                Sub page

              </Link>

            </div>

          </li>

          {/* BLOCKS */}

          <li className="dropdown-parent">

            <span className="menu-title">

              Blocks

              <i className="fa-solid fa-angle-down"></i>

            </span>

            <div className="dropdown-menu large-dropdown">

              <Link to="/accordion">

                Accordion

              </Link>

              <Link to="/animated-content">

                Animated content

              </Link>

              <Link to="/buttons">

                Buttons

              </Link>

              <Link to="/hero-units">

                Offscreen hero units

              </Link>

              <Link to="/icon-boxes">

                Icon boxes

              </Link>

              <Link to="/image-slider">

                Image slider

              </Link>

            </div>

          </li>

          {/* PORTFOLIO */}

          <li className="dropdown-parent">

            <span className="menu-title">

              Portfolio

              <i className="fa-solid fa-angle-down"></i>

            </span>

            <div className="dropdown-menu">

              <a href="#">

                Standard Portfolio

              </a>

              <a href="#">

                Masonry Portfolio

              </a>

              <a href="#">

                Single Portfolio

              </a>

            </div>

          </li>

          {/* BLOG */}

          <li className="dropdown-parent">

            <span className="menu-title">

              Blog

              <i className="fa-solid fa-angle-down"></i>

            </span>

            <div className="dropdown-menu">

              <a href="#">

                Standard Blog

              </a>

              <a href="#">

                Masonry Blog

              </a>

              <a href="#">

                Single Blog

              </a>

            </div>

          </li>

          {/* TASKS */}

          {

            token && (

              <li>

                <Link to="/tasks">

                  Tasks

                </Link>

              </li>

            )

          }

          {/* DASHBOARD */}

          {

            token && (

              <li>

                <Link to="/dashboard">

                  Dashboard

                </Link>

              </li>

            )

          }

          {/* LOGIN */}

          {

            !token && (

              <li>

                <Link to="/login">

                  Login

                </Link>

              </li>

            )

          }

          {/* REGISTER */}

          {

            !token && (

              <li>

                <Link to="/register">

                  Register

                </Link>

              </li>

            )

          }

          {/* USER */}

          {

            token && (

              <li className="user-name">

                <i className="fa-solid fa-user"></i>

                {user?.name}

              </li>

            )

          }

          {/* LOGOUT */}

          {

            token && (

              <li>

                <button

                  className="logout-btn"

                  onClick={handleLogout}

                >

                  Logout

                </button>

              </li>

            )

          }

          {/* CONTACT */}

          <li>

            <a href="#">

              Contact us

            </a>

          </li>

          {/* BUY */}

          <li>

            <a href="#">

              Buy Modena

            </a>

          </li>

          {/* SEARCH */}

          <li

            className="search-icon"

            onClick={() =>

              setSearchOpen(

                !searchOpen

              )

            }

          >

            <i className="fa-solid fa-magnifying-glass"></i>

          </li>

        </ul>

      </nav>

      {/* =========================
         SEARCH BAR
      ========================= */}

      <div

        className={

          searchOpen

          ?

          "search-box active-search"

          :

          "search-box"

        }

      >

        <input

          type="text"

          placeholder="Search here..."

        />

        <button>

          Search

        </button>

      </div>

    </>

  );

};

export default Navbar;