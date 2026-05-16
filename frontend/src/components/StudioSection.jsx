import "./StudioSection.css";

import studioImage from "../assets/images/modena-hero-unit-right.jpg";

const StudioSection = () => {
  return (

    <section className="studio-section">

      {/* LEFT */}

      <div className="studio-left">

        <div className="studio-content">

          <h1>Our studio...</h1>

          <h3>
            LOREM IPSUM DOLOR SIT AMET,
            CONSECTETUR ADIPISICING ELIT.
            A VOLUPTATIBUS, POSSIMUS VENIAM CULPA.
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

        </div>

      </div>

      {/* RIGHT */}

      <div className="studio-right">

        <img
          src={studioImage}
          alt="studio"
        />

      </div>

    </section>

  );
};

export default StudioSection;