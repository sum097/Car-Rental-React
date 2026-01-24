import React from 'react';
import FeatureImg1 from '../assets/feature-1.png';
import FeatureImg2 from '../assets/feature-2.png';
import FeatureImg3 from '../assets/feature-3.png';

const Features = () => {
    return (
        <div>
            <section id="features">
                <div className="container">
                    <div className="row features__row">
                        <h3 className="features__subtitle">Plan your trip now</h3>
                        <h2 className="features__title">Quick and easy car rental</h2>
                        <div className="features__list">
                            <div className="feature">
                                <figure className="feature__img__wrapper">
                                    <img src={FeatureImg1} alt="" className="feature__img" />
                                </figure>
                            </div>
                            <div className="feature">
                                <figure className="feature__img__wrapper">
                                    <img src={FeatureImg2} alt="" className="feature__img" />
                                </figure>
                            </div>
                            <div className="feature">
                                <figure className="feature__img__wrapper">
                                    <img src={FeatureImg3} alt="" className="feature__img" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Features;
