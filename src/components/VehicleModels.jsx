import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Model from "./ui/Model";
import ModelSkeleton from "./ui/ModelSkeleton";

const VehicleModels = () => {
  const [carModels, setCarModels] = useState([]);


  function sortModels() {
    console.log("Sorting models")
  }


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
    <section id="models">
      <div className="container">
        <div className="row models__row">
          <div className="models__header">
            <h2 className="models__header__title">Vehicle Models</h2>
            <select defaultValue="" className="models__header__sort" onChange={() => sortModels()}>
              <option
                value=""
                disabled
                className="models__header__sort__option"
              >
                Sort
              </option>
              <option
                value="HIGH_TO_LOW"
                className="models__header__sort__option"
              >
                Price (High to low)
              </option>
              <option
                value="LOW_TO_HIGH"
                className="models__header__sort__option"
              >
                Price (Low to high)
              </option>
              <option value="RATING" className="models__header__sort__option">
                Rating
              </option>
            </select>
          </div>
          <div className="models__list">
            {carModels.length > 0
              ? carModels.map((model) => <Model model={model} key={model.id} />)
              : new Array(20).fill(0).map((_,index) => <ModelSkeleton key={index}/>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleModels;
