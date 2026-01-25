import React from "react";
import App1 from "../assets/app-store.svg";
import App2 from "../assets/google-play.svg";

const Download = () => {
  return (
    <section id="download">
      <div className="container">
        <div className="row download__row">
          <div className="download__text">
            <h2 className="download__text__title">
              Download our app to get the most out of it
            </h2>
            <p className="download__text__para">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="download__text__links">
              <a href="" className="download__text__link">
                <img src={App2} alt="" className="download__text__image" />
              </a>
              <a href="" className="download__text__link">
                <img src={App1} alt="" className="download__text__image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
