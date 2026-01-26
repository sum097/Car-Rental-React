import React, { useEffect, useState } from "react";
import ModelsHero from "../components/ModelHero";
import VehicleModels from "../components/VehicleModels";
import Booking from "../components/Booking";
import axios from "axios";
import SuccessPopup from "../components/ui/SuccessPopup";

const Models = () => {
  const [carModels, setCarModels] = useState([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [selectModel, setSelectModel] = useState("");

  async function fetchModels() {
    const { data } = await axios.get(
      "https://car-rental-api.up.railway.app/car",
    );
    const models = data.data;
    setCarModels(models);
  }

  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <>
      <SuccessPopup successOpen={successOpen}/>
      <Booking
        carModels={carModels}
        bookingOpen={bookingOpen}
        setBookingOpen={setBookingOpen}
        selectModel={selectModel}
        setSelectModel={setSelectModel}
        setSuccessOpen={setSuccessOpen}
      />
      <ModelsHero />
      <VehicleModels
        carModels={carModels}
        setCarModels={setCarModels}
        setBookingOpen={setBookingOpen}
        setSelectModel={setSelectModel}
      />
    </>
  );
};

export default Models;
