import "./WorkSection.css";

const WorkSection = () => {
  return (
    <section className="work-section">

      <div className="work-container">

        {/* LEFT SIDE */}

        <div className="work-left">

          <h1>
            You'll love working with us
          </h1>

        </div>

        {/* RIGHT SIDE */}

        <div className="work-right">

          {/* ITEM 1 */}

          <div className="work-card">

            <div className="icon-circle">
              <i className="fa-solid fa-expand"></i>
            </div>

            <div>
              <h2>Direction.</h2>

              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                A voluptatibus, possimus veniam culpa.
              </p>
            </div>

          </div>

          {/* ITEM 2 */}

          <div className="work-card">

            <div className="icon-circle">
              <i className="fa-solid fa-heart"></i>
            </div>

            <div>
              <h2>Passion.</h2>

              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                A voluptatibus, possimus veniam culpa.
              </p>
            </div>

          </div>

          {/* ITEM 3 */}

          <div className="work-card">

            <div className="icon-circle">
              <i className="fa-solid fa-bolt"></i>
            </div>

            <div>
              <h2>Energy.</h2>

              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                A voluptatibus, possimus veniam culpa.
              </p>
            </div>

          </div>

          {/* ITEM 4 */}

          <div className="work-card">

            <div className="icon-circle">
              <i className="fa-solid fa-paper-plane"></i>
            </div>

            <div>
              <h2>Delivery.</h2>

              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                A voluptatibus, possimus veniam culpa.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WorkSection;