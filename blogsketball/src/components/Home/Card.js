import React from "react";
import Layout from "../../helpers/Layout";
import "./Carousel.scss";
import {NavLink, Route} from "react-router-dom"

function NBARankArticles() {
  let myButton = document.querySelector("#myButton");
  myButton.style.color = "yellow"
}


const Card = ({ property }) => {
  const {
    index,
    picture,
    city,
    address,
    bedrooms,
    bathrooms,
    carSpaces,
    link_to
  } = property;

  return (
    <div id={`card-${index}`} className="card">
      <img src={picture} alt="picture" />
      <div className="details">
        <span className="index">{index + 1}</span>
        <div onClick={NBARankArticles} className="myButton"  >
        {city}
        </div>

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
