import React from "react";

import "../index.css";

class Carusel extends React.Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div class="carousel-item active">
            <div className="carusel-container">
              <div className="carusel-item"></div>
              <div className="carusel-item2">
                <div className="carusel-text">What is Lorem Ipsum?</div>
                <div className="carusel-text2">
                  Lorem Ipsum is simply <br />
                  dummy text of the printing <br />
                  and typesetting industry.
                </div>
                <div className="carusel-text3">23 ноября 2019</div>
              </div>
              <div className="carusel-item3"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carusel-container">
              <div className="carusel-item"></div>
              <div className="carusel-item2">
                <span className="carusel-text">What is Lorem Ipsum?</span>
                <span className="carusel-text2">
                  Lorem Ipsum is simply <br />
                  dummy text of the printing <br />
                  and typesetting industry.
                </span>
                <span className="carusel-text3">23 ноября 2019</span>
              </div>
              <div className="carusel-item3"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carusel-container">
              <div className="carusel-item"></div>
              <div className="carusel-item2">
                <div className="carusel-text">What is Lorem Ipsum?</div>
                <div className="carusel-text2">
                  Lorem Ipsum is simply <br />
                  dummy text of the printing <br />
                  and typesetting industry.
                </div>
                <div className="carusel-text3">23 ноября 2019</div>
              </div>
              <div className="carusel-item3"></div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carusel;
