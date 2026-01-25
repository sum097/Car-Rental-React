import React from "react";
import FeatureImg1 from "../assets/feature-1.png";
import FeatureImg2 from "../assets/feature-2.png";
import FeatureImg3 from "../assets/feature-3.png";
import Feature from "./ui/Feature";

const Features = () => {
  return (
    <div>
      <section id="features">
        <div className="container">
          <div className="row features__row">
            <h3 className="features__subtitle">Plan your trip now</h3>
            <h2 className="features__title">Quick and easy car rental</h2>
            <div className="features__list">
              <Feature
                image={FeatureImg1}
                title="Select Car"
                paragraph="We offer a big range of vehicles for all of your driving needs. We
          have the perfect car to meet your needs"
              />
              <Feature
                image={FeatureImg2}
                title="Contact Operator"
                paragraph="Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns"
              />
              <Feature
                image={FeatureImg3}
                title="Let's Drive"
                paragraph="Whether you're hitting the open road, we've got you covered
                  with our wide range of cars"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
