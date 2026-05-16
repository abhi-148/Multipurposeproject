import "./BlocksPage.css";

import heroImg from "../assets/images/H1.png";

import leftHero from "../assets/images/modena-hero-unit-left.jpg";
import rightHero from "../assets/images/modena-hero-unit-right.jpg";

import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";

const BlocksPage = ({ type }) => {

  return (
    <>
      {/* HERO */}

      <section className="blocks-hero">

        <img src={heroImg} alt="" />

        <div className="blocks-overlay">

          <h1>
            {type === "accordion" && "Accordion"}
            {type === "animated" && "Animated content"}
            {type === "buttons" && "Buttons"}
            {type === "hero-units" && "Offscreen hero units"}
            {type === "icon-boxes" && "Icon boxes"}
            {type === "image-slider" && "Image slider"}
          </h1>

          <p>
            Modern component block showcase
          </p>

        </div>

      </section>

      {/* PAGE */}

      <section className="blocks-page">

        <div className="blocks-container">

          {/* ACCORDION */}

          {type === "accordion" && (

            <>

              <div className="page-heading">

                <h2>Accordion block</h2>

                <p>
                  Stylish accordion layouts with smooth UI.
                </p>

              </div>

              <div className="accordion-grid">

                <div className="accordion-box">

                  <div className="accordion-item">
                    Accordion Heading One <span>+</span>
                  </div>

                  <div className="accordion-item">
                    Accordion Heading Two <span>+</span>
                  </div>

                  <div className="accordion-item">
                    Accordion Heading Three <span>+</span>
                  </div>

                  <div className="accordion-item">
                    Accordion Heading Four <span>+</span>
                  </div>

                </div>

                <div className="accordion-box line-style">

                  <div className="accordion-line">
                    Accordion Heading One <span>+</span>
                  </div>

                  <div className="accordion-line">
                    Accordion Heading Two <span>+</span>
                  </div>

                  <div className="accordion-line">
                    Accordion Heading Three <span>+</span>
                  </div>

                  <div className="accordion-line">
                    Accordion Heading Four <span>+</span>
                  </div>

                </div>

              </div>

            </>

          )}

          {/* ANIMATED */}

          {type === "animated" && (

            <>

              <div className="page-heading">

                <h2>Animated content</h2>

                <p>
                  Elegant fade animation layouts.
                </p>

              </div>

              <div className="animated-grid">

                <div className="fade-box left-fade">

                  <h3>Fade in left animation</h3>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                </div>

                <div className="fade-box right-fade">

                  <h3>Fade in right animation</h3>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                </div>

              </div>

            </>

          )}

          {/* BUTTONS */}

          {type === "buttons" && (

            <>

              <div className="page-heading">

                <h2>Button block</h2>

                <p>
                  Different button styles showcase.
                </p>

              </div>

              <div className="button-groups">

                <div>

                  <h4>Regular buttons</h4>

                  <div className="btn-row">

                    <button className="primary-btn">
                      Primary
                    </button>

                    <button className="secondary-btn">
                      Secondary
                    </button>

                    <button className="utility-btn">
                      Utility
                    </button>

                  </div>

                </div>

                <div>

                  <h4>Pill buttons</h4>

                  <div className="btn-row">

                    <button className="pill-btn">
                      Primary
                    </button>

                    <button className="pill-btn">
                      Secondary
                    </button>

                    <button className="pill-btn">
                      Utility
                    </button>

                  </div>

                </div>

              </div>

            </>

          )}

          {/* HERO UNITS */}

          {type === "hero-units" && (

            <>

              <div className="page-heading">

                <h2>Offscreen hero units</h2>

                <p>
                  Beautiful image + content layout.
                </p>

              </div>

              <div className="hero-unit">

                <div className="hero-text">

                  <h3>Right aligned hero image</h3>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                </div>

                <div className="hero-image">

                  <img src={rightHero} alt="" />

                </div>

              </div>

            </>

          )}

          {/* ICON BOXES */}

          {type === "icon-boxes" && (

            <>

              <div className="page-heading">

                <h2>Icon boxes</h2>

                <p>
                  Highlight features with stylish cards.
                </p>

              </div>

              <div className="icon-grid">

                <div className="icon-card">

                  <i className="fa-solid fa-briefcase"></i>

                  <h3>Business</h3>

                  <p>
                    Modern creative business layouts.
                  </p>

                </div>

                <div className="icon-card">

                  <i className="fa-solid fa-headphones"></i>

                  <h3>Support</h3>

                  <p>
                    24x7 support with modern UI.
                  </p>

                </div>

                <div className="icon-card">

                  <i className="fa-solid fa-star"></i>

                  <h3>Premium</h3>

                  <p>
                    Premium looking UI components.
                  </p>

                </div>

              </div>

            </>

          )}

          {/* IMAGE SLIDER */}

          {type === "image-slider" && (

            <>

              <div className="page-heading">

                <h2>Image slider</h2>

                <p>
                  Beautiful animated image showcase.
                </p>

              </div>

              <div className="slider-box">

                <img src={p1} alt="" />

                <div className="slider-caption">

                  <h3>Caption heading</h3>

                  <p>Beautiful image slider block.</p>

                  <button>
                    Read more
                  </button>

                </div>

              </div>

              <div className="small-gallery">

                <img src={p1} alt="" />
                <img src={p2} alt="" />
                <img src={p3} alt="" />
                <img src={p4} alt="" />

              </div>

            </>

          )}

        </div>

      </section>
    </>
  );
};

export default BlocksPage;