import "./SidebarPage.css";

import heroImg from "../assets/images/Hero.png";

import img1 from "../assets/images/portfolio-pic-15.jpg";
import img2 from "../assets/images/portfolio-pic-16.jpg";
import img3 from "../assets/images/portfolio-pic-17.jpg";
import img4 from "../assets/images/portfolio-pic-18.jpg";

const SidebarPage = ({ type = "left" }) => {

  const pageTitle =
    type === "left"
      ? "Left sidebar"
      : type === "right"
      ? "Right sidebar"
      : type === "full"
      ? "Full width"
      : "Sub page";

  const pageDesc =
    type === "sub"
      ? "Sub pages can use any layout with modern stylish sections."
      : `A modern content page with ${
          type === "left"
            ? "left aligned"
            : type === "right"
            ? "right aligned"
            : "full width"
        } layout`;

  return (
    <>
      {/* HERO SECTION */}

      <section className="sidebar-hero">

        <img src={heroImg} alt="hero" />

        <div className="sidebar-overlay">

          <h1>{pageTitle}</h1>

          <p>{pageDesc}</p>

        </div>

      </section>

      {/* PAGE */}

      <section className="sidebar-page">

        <div
          className={`sidebar-container
          ${type === "right" ? "reverse" : ""}
          ${type === "full" || type === "sub" ? "full-layout" : ""}
        `}
        >

          {/* SIDEBAR */}

          {type !== "full" && type !== "sub" && (

            <aside className="sidebar-box">

              <h2>Sidebar</h2>

              <p>
                Creative layouts with clean typography,
                smooth animations and elegant UI blocks.
              </p>

              <div className="sidebar-line"></div>

              <ul>

                <li>Creative web layouts</li>

                <li>Modern UI components</li>

                <li>Portfolio showcase</li>

                <li>Responsive sections</li>

                <li>Interactive animations</li>

              </ul>

            </aside>

          )}

          {/* MAIN CONTENT */}

          <div className="main-content">

            <h2>
              {type === "sub"
                ? "Sub-page page type"
                : "Main content area"}
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam quis nostrud exercitation.
            </p>

            {/* BLOCKQUOTE */}

            <h3>A blockquote</h3>

            <div className="quote-box">

              <span>"</span>

              <p>
                Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur.
              </p>

            </div>

            <p>
              Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>

            {/* COLUMNS */}

            <div className="columns-grid">

              <div>

                <h4>Column 1</h4>

                <p>
                  Modern layouts with elegant styling,
                  responsive design and creative blocks.
                </p>

              </div>

              <div>

                <h4>Column 2</h4>

                <p>
                  Stylish UI components built with smooth
                  transitions and premium appearance.
                </p>

              </div>

              <div>

                <h4>Column 3</h4>

                <p>
                  Powerful sections designed for portfolio,
                  agency and modern creative websites.
                </p>

              </div>

            </div>

            {/* SUB PAGE EXTRA */}

            {type === "sub" && (

              <>
                <div className="sub-content">

                  {/* LEFT */}

                  <div>

                    <h4>Creative content</h4>

                    <p>
                      Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                      Voluptatibus possimus veniam culpa.
                    </p>

                    <ul>

                      <li>Modern design systems</li>

                      <li>Clean typography layouts</li>

                      <li>Responsive animations</li>

                      <li>Premium visual sections</li>

                    </ul>

                  </div>

                  {/* RIGHT */}

                  <div>

                    <h4>Highlighted quote</h4>

                    <p>
                      Stylish content blocks with modern
                      UI design and elegant structure.
                    </p>

                    <div className="quote-box small-quote">

                      <span>"</span>

                      <p>
                        Beautiful interfaces are built
                        with creativity and simplicity.
                      </p>

                    </div>

                  </div>

                </div>

                {/* GALLERY */}

                <div className="sub-gallery">

                  <img src={img1} alt="gallery" />

                  <img src={img2} alt="gallery" />

                  <img src={img3} alt="gallery" />

                  <img src={img4} alt="gallery" />

                </div>
              </>

            )}

          </div>

        </div>

      </section>
    </>
  );
};

export default SidebarPage;