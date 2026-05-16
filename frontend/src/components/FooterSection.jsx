import "./FooterSection.css";

const FooterSection = () => {
  return (

    <footer className="footer-section">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-left">

          <h1>
            Modena
          </h1>

          <p>
            Creative multipurpose React template
            crafted with modern UI, smooth animations
            and elegant design experience.
          </p>

          <div className="footer-socials">

            <i className="fab fa-facebook-f"></i>

            <i className="fab fa-twitter"></i>

            <i className="fab fa-instagram"></i>

            <i className="fab fa-linkedin-in"></i>

          </div>

        </div>

        {/* RIGHT */}

        <div className="footer-right">

          <h2>
            Contact
          </h2>

          <p>
            Modena Creative
          </p>

          <p>
            Unit 66
          </p>

          <p>
            Vidal Plaza
          </p>

          <p>
            London
          </p>

          <p>
            LD55 5PQ
          </p>

          <p>
            T: 02013 546798
          </p>

          <p>
            M: 07089 544349
          </p>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          Copyright © 2026

          <span>
            Theme by Vidal Themes
          </span>
        </p>

      </div>

      {/* TOP BUTTON */}

      <a
        href="#"
        className="scroll-top"
      >

        <i className="fas fa-chevron-up"></i>

      </a>

    </footer>
  );
};

export default FooterSection;