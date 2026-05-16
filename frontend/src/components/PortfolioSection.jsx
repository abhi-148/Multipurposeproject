import { useState } from "react";

import "./PortfolioSection.css";

import pic1 from "../assets/images/portfolio-pic-1.jpg";
import pic15 from "../assets/images/portfolio-pic-15.jpg";
import pic16 from "../assets/images/portfolio-pic-16.jpg";
import pic17 from "../assets/images/portfolio-pic-17.jpg";
import pic18 from "../assets/images/portfolio-pic-18.jpg";
import pic19 from "../assets/images/portfolio-pic-19.jpg";

const portfolioData = [

  {
    id: 1,
    image: pic1,
    title: "Creative Portrait",
    category: "Branding",
  },

  {
    id: 2,
    image: pic15,
    title: "Urban Street Wear",
    category: "Web design",
  },

  {
    id: 3,
    image: pic16,
    title: "Modern Lifestyle",
    category: "Marketing",
  },

  {
    id: 4,
    image: pic17,
    title: "Photography Session",
    category: "Print",
  },

  {
    id: 5,
    image: pic18,
    title: "Travel Story",
    category: "Strategy",
  },

  {
    id: 6,
    image: pic19,
    title: "Coffee Branding",
    category: "Branding",
  },
];

const filters = [
  "All",
  "Web design",
  "Print",
  "Marketing",
  "Branding",
  "Strategy",
];

const PortfolioSection = () => {

  const [activeFilter, setActiveFilter] = useState("All");

  const [selectedImage, setSelectedImage] = useState(null);

  const filteredData =
    activeFilter === "All"
      ? portfolioData
      : portfolioData.filter(
          (item) => item.category === activeFilter
        );

  return (

    <section className="portfolio-section">

      {/* TOP */}

      <div className="portfolio-top">

        <h1>
          View our latest work...
        </h1>

        <div className="portfolio-links">

          {filters.map((filter, index) => (

            <span
              key={index}
              className={
                activeFilter === filter
                  ? "active-filter"
                  : ""
              }

              onClick={() =>
                setActiveFilter(filter)
              }
            >
              {filter}
            </span>

          ))}

        </div>

      </div>

      {/* GRID */}

      <div className="portfolio-grid">

        {filteredData.map((item) => (

          <div
            className="portfolio-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            {/* OVERLAY */}

            <div className="portfolio-overlay">

              <h2>{item.title}</h2>

              <p>{item.category}</p>

              <button
                onClick={() =>
                  setSelectedImage(item.image)
                }
              >
                View Project
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* POPUP IMAGE */}

      {selectedImage && (

        <div
          className="image-popup"

          onClick={() =>
            setSelectedImage(null)
          }
        >

          <img
            src={selectedImage}
            alt="preview"
          />

        </div>

      )}

    </section>
  );
};

export default PortfolioSection;