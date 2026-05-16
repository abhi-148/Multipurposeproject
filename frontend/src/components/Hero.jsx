import "./Hero.css";
import heroImage from "../assets/images/Hero.png";

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* DARK OVERLAY */}

      <div className="hero-overlay">

        {/* CONTENT */}

        <div className="hero-content">

          <h1>
            Welcome to Modena...
          </h1>

          <p>
            The stylish modern Concrete CMS theme.
          </p>

          <button>
            Find out more...
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;