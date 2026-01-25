import { faCar, faLocationDot, faTimes, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Booking = ({carModels, bookingOpen, setBookingOpen}) => {
    return (
        <div className={`booking ${bookingOpen && "booking-open"}`}>
            <div className="booking__container">
                <button className="booking__close" onClick={() => setBookingOpen(false)}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <h3 className="booking__title">
                    Book a Car
                </h3>
                <form action="" className="booking__form">
                    <div className="form__item">
                        <label className="form__item__label">
                            <FontAwesomeIcon icon={faCar} />
                            <span>
                                Select Your Model <span className="required">*</span>
                            </span>
                        </label>
                        <select name="" id="" className="form__item__select">
                            <option value=""disabled>
                                Select
                            </option>
                            {/* {carModels.map((model) => (
                                <option key={model.id} value={model.id}>
                                    {model.name}
                                </option>
                            ))} */}
                        </select>
                    </div>
                    <div className="form__item">
                        <label className="form__item__label">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>
                                Pick-up <span className="required">*</span>
                            </span>
                        </label>
                        <select name="" id="" className="form__item__select">
                            <option value=""disabled>
                                Select
                            </option>
                            <option value="New York">
                                New York
                            </option>
                            <option value="London">
                                London
                            </option>
                            <option value="Paris">
                                Paris
                            </option>
                            <option value="Sydney">
                                Sydney
                            </option>
                            <option value="Beijing">
                                Beijing
                            </option>
                           
                        </select>
                    </div>
                    <div className="form__item">
                        <label className="form__item__label">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>
                                Drop-off <span className="required">*</span>
                            </span>
                        </label>
                        <select name="" id="" className="form__item__select">
                            <option value=""disabled>
                                Select
                            </option>
                            <option value="New York">
                                New York
                            </option>
                            <option value="London">
                                London
                            </option>
                            <option value="Paris">
                                Paris
                            </option>
                            <option value="Sydney">
                                Sydney
                            </option>
                            <option value="Beijing">
                                Beijing
                            </option>
                           
                        </select>
                    </div>
                    <div className="form__item">
                        <label className="form__item__label">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            <span>
                                Pick-up <span className="required">*</span>
                            </span>
                        </label>
                        <input type="date" className="form__item__input" />
                           
                    </div>
                    <div className="form__item">
                        <label className="form__item__label">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            <span>
                                Drop-off <span className="required">*</span>
                            </span>
                        </label>
                        <input type="date" className="form__item__input" /> 
                    </div>
                    <div className="form__item">
                        <button className="form__item__submit">
                            Book Ride
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default Booking;
