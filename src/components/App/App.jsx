import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherAPI";
import { coordinates, APIkey } from "../../utils/constants";
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });

  // const [weatherData, setWeatherData] = useState({
  //   type: "cold",
  //   temp: { F: 34 },
  //   city: "Berlin",
  // });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
      >
        <label htmlFor="name" className="popup__label">
          Name{" "}
          <input
            type="text"
            className="popup__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageURL" className="popup__label">
          Image{" "}
          <input
            type="text"
            className="popup__input"
            id="imageURL"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="popup__radio-buttons">
          <legend className="popup__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="popup__label popup__label-radio">
            <input id="hot" type="radio" className="popup__radio-btn-input" />
            Hot
          </label>
          <label htmlFor="warm" className="popup__label popup__label-radio">
            <input id="warm" type="radio" className="popup__radio-btn-input" />
            Warm
          </label>
          <label htmlFor="cold" className="popup__label popup__label-radio">
            <input id="cold" type="radio" className="popup__radio-btn-input" />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        className="popup__item"
        activeModal={activeModal}
        card={selectedCard}
        handleCloseClick={closeActiveModal}
      />
    </div>
  );
}

export default App;
