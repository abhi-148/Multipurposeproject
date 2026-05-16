import "./Dashboard.css";

import {
  useNavigate,
} from "react-router-dom";

const Dashboard = () => {

  const navigate =
    useNavigate();

  let user = null;

  try {

    const storedUser =
      localStorage.getItem("user");

    user = storedUser
      ? JSON.parse(storedUser)
      : null;

  } catch (error) {

    console.log(
      "Invalid User Data"
    );

    localStorage.removeItem("user");

  }

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/login");

  };

  return (

    <section className="dashboard-page">

      {/* =========================
          SIDEBAR
      ========================= */}

      <aside className="dashboard-sidebar">

        <div className="dashboard-logo">

          <h2>
            Modena
          </h2>

          <p>
            Full Stack Platform
          </p>

        </div>

        <ul className="dashboard-menu">

          <li className="active">

            <i className="fa-solid fa-house"></i>

            Dashboard

          </li>

          <li>

            <i className="fa-solid fa-user"></i>

            Profile

          </li>

          <li>

            <i className="fa-solid fa-layer-group"></i>

            Projects

          </li>

          <li>

            <i className="fa-solid fa-chart-line"></i>

            Analytics

          </li>

          <li>

            <i className="fa-solid fa-gear"></i>

            Settings

          </li>

        </ul>

      </aside>

      {/* =========================
          MAIN
      ========================= */}

      <main className="dashboard-main">

        {/* TOPBAR */}

        <div className="dashboard-topbar">

          <div>

            <h1>
              Welcome,
              {" "}
              {user?.name || "User"}
            </h1>

            <p>
              Manage your projects,
              analytics and account
              activities.
            </p>

          </div>

          <button
            onClick={handleLogout}
          >

            Logout

          </button>

        </div>

        {/* =========================
            STATS CARDS
        ========================= */}

        <div className="dashboard-cards">

          {/* CARD */}

          <div className="dashboard-card">

            <div className="card-icon purple">

              <i className="fa-solid fa-user"></i>

            </div>

            <h3>
              User Email
            </h3>

            <p>
              {user?.email}
            </p>

          </div>

          {/* CARD */}

          <div className="dashboard-card">

            <div className="card-icon blue">

              <i className="fa-solid fa-folder-open"></i>

            </div>

            <h3>
              Projects
            </h3>

            <p>
              12 Active Projects
            </p>

          </div>

          {/* CARD */}

          <div className="dashboard-card">

            <div className="card-icon green">

              <i className="fa-solid fa-chart-simple"></i>

            </div>

            <h3>
              Performance
            </h3>

            <p>
              89% Growth
            </p>

          </div>

        </div>

        {/* =========================
            CONTENT GRID
        ========================= */}

        <div className="dashboard-grid">

          {/* LEFT */}

          <div className="dashboard-box">

            <h2>
              Recent Projects
            </h2>

            <div className="project-item">

              <div>

                <h4>
                  AI Task Manager
                </h4>

                <span>
                  MERN Stack Project
                </span>

              </div>

              <button>
                View
              </button>

            </div>

            <div className="project-item">

              <div>

                <h4>
                  Student ERP System
                </h4>

                <span>
                  React + Node.js
                </span>

              </div>

              <button>
                View
              </button>

            </div>

            <div className="project-item">

              <div>

                <h4>
                  Admin Dashboard
                </h4>

                <span>
                  Full Stack App
                </span>

              </div>

              <button>
                View
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="dashboard-box">

            <h2>
              Activity
            </h2>

            <div className="activity-item">

              <i className="fa-solid fa-circle-check"></i>

              <p>
                Login Successful
              </p>

            </div>

            <div className="activity-item">

              <i className="fa-solid fa-circle-check"></i>

              <p>
                MySQL Connected
              </p>

            </div>

            <div className="activity-item">

              <i className="fa-solid fa-circle-check"></i>

              <p>
                Backend Running
              </p>

            </div>

            <div className="activity-item">

              <i className="fa-solid fa-circle-check"></i>

              <p>
                JWT Auth Enabled
              </p>

            </div>

          </div>

        </div>

      </main>

    </section>
  );
};

export default Dashboard;