import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });
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

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} />
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
        activeModal={activeModal}
        card={selectedCard}
        handleCloseClick={closeActiveModal}
      />
    </div>
  );
}

export default App;
