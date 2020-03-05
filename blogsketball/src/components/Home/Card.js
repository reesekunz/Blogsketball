import React from "react";
// import PropTypes from "prop-types"
import "./Carousel.scss";

const Card = ({ property }) => {
  const {
    index,
    picture,
    city,
    address,
    bedrooms,
    bathrooms,
    carSpaces
  } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img src={picture} alt="picture" />
      <div className="details">
        <span className="index">{index + 1}</span>
        <p className="location">{city}</p>
        <ul className="features">
          <li className="icon-bed">{bedrooms}</li>
          <li className="icon-bath">{bathrooms}</li>
          <li className="icon-car">{carSpaces}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
