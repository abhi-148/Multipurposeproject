import "./WorkProcess.css";

import workImage from "../assets/images/modena-hero-unit-left.jpg";

const WorkProcess = () => {
  return (

    <section className="process-section">

      {/* LEFT IMAGE */}

      <div className="process-left">

        <img
          src={workImage}
          alt="work"
        />

      </div>

      {/* RIGHT CONTENT */}

      <div className="process-right">

        <div className="process-content">

          <h1>How we work...</h1>

          <h3>
            LOREM IPSUM DOLOR SIT AMET,
            CONSECTETUR ADIPISICING.
          </h3>

          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
            quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo.
          </p>

          <button>
            Find out more
          </button>

        </div>

      </div>

    </section>

  );
};

export default WorkProcess;