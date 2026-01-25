import React, { useEffect, useState } from "react";
import ModelsHero from "../components/ModelHero";
import VehicleModels from "../components/VehicleModels";
import Booking from "../components/Booking";
import axios from "axios";

const Models = () => {
  const [carModels, setCarModels] = useState([]);
  const [bookingOpen, setBookingOpen] = useState(false);

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
      <Booking carModels={carModels} bookingOpen={bookingOpen} setBookingOpen={setBookingOpen}/>
      <ModelsHero />
      <VehicleModels
        carModels={carModels}
        setCarModel={setCarModels}
        setBookingOpen={setBookingOpen}
      />
    </>
  );
};

export default Models;
