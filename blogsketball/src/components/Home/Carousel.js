import React, { Component } from "react";
import "./Carousel.scss";
import Card from "./Card";
import data from "./data";
import {IoIosArrowDropright, IoIosArrowDropleft} from "react-icons/io";
// class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  render() {
    const { properties, property } = this.state;
    return (
      <div className="Carousel">
        <button
          className="carousel-btn"
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >
          <IoIosArrowDropleft size={25} />
        </button>
        <button
          className="carousel-btn"
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length - 1}
        >
          <IoIosArrowDropright size={25} />
        </button>
        <div className="page">
          <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${property.index *
                    (100 / properties.length)}%)`
                }}
              >
                {properties.map(property => (
                  <Card key={property._id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
