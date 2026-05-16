import "./TeamSection.css";

import profile1 from "../assets/images/profile-1.jpg";
import profile2 from "../assets/images/profile-2.jpg";
import profile3 from "../assets/images/profile-3.jpg";

const teamData = [

  {
    id: 1,
    image: profile1,
    name: "Joe Walker",
    role: "Creative Director",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    id: 2,
    image: profile2,
    name: "Sally Harding",
    role: "Sales Director",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    id: 3,
    image: profile3,
    name: "Trent Turner",
    role: "Technical Director",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TeamSection = () => {
  return (

    <section className="team-section">

      {/* TOP */}

      <div className="team-top">

        <h1>
          Meet the team...
        </h1>

        <p>
          The people who make it happen here at Modena Creative
        </p>

      </div>

      {/* TEAM GRID */}

      <div className="team-grid">

        {teamData.map((member) => (

          <div
            className="team-card"
            key={member.id}
          >

            {/* IMAGE */}

            <div className="team-image">

              <img
                src={member.image}
                alt={member.name}
              />

              {/* HOVER */}

              <div className="team-overlay">

                <div className="team-icons">

                  <i className="fab fa-facebook-f"></i>

                  <i className="fab fa-twitter"></i>

                  <i className="fab fa-instagram"></i>

                </div>

              </div>

            </div>

            {/* CONTENT */}

            <div className="team-content">

              <h2>
                {member.name}

                <span>
                  //
                </span>

                <small>
                  {member.role}
                </small>

              </h2>

              <p>
                {member.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default TeamSection;