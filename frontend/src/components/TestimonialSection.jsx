import { useState, useEffect } from "react";

import "./TestimonialSection.css";

import quote1 from "../assets/images/quote-1.jpg";
import quote2 from "../assets/images/quote-2.jpg";
import quote3 from "../assets/images/quote-3.jpg";

const testimonialData = [

  {
    id: 1,

    image: quote1,

    name: "Jason Bradshaw",

    role: "CEO",

    company: "Classique Gallery",

    text1:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    text2:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  {
    id: 2,

    image: quote2,

    name: "Sophia Turner",

    role: "Creative Director",

    company: "Vision Studio",

    text1:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    text2:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    id: 3,

    image: quote3,

    name: "Michael Johnson",

    role: "Marketing Head",

    company: "Urban Media",

    text1:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",

    text2:
      "Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
  },
];

const TestimonialSection = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  /* AUTO SLIDE */

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveIndex((prev) =>
        prev === testimonialData.length - 1
          ? 0
          : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="testimonial-section">

      {/* TITLE */}

      <div className="testimonial-top">

        <h1>
          What our clients are saying about us...
        </h1>

      </div>

      {/* SLIDER */}

      <div className="testimonial-wrapper">

        {testimonialData.map((item, index) => (

          <div
            key={item.id}

            className={
              index === activeIndex
                ? "testimonial-slide active-slide"
                : "testimonial-slide"
            }
          >

            {/* IMAGE */}

            <div className="testimonial-image">

              <img
                src={item.image}
                alt={item.name}
              />

            </div>

            {/* CONTENT */}

            <div className="testimonial-content">

              <div className="quote-icon">
                “
              </div>

              <p>
                {item.text1}
              </p>

              <p>
                {item.text2}
              </p>

              <h2>

                {item.name}

                <span>
                  //
                </span>

                <small>
                  {item.role}
                </small>

                <span>
                  //
                </span>

                <small>
                  {item.company}
                </small>

              </h2>

            </div>

          </div>

        ))}

      </div>

      {/* DOTS */}

      <div className="testimonial-dots">

        {testimonialData.map((_, index) => (

          <span
            key={index}

            className={
              index === activeIndex
                ? "dot active-dot"
                : "dot"
            }

            onClick={() =>
              setActiveIndex(index)
            }
          ></span>

        ))}

      </div>

    </section>
  );
};

export default TestimonialSection;