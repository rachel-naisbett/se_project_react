import "./ItemModal.css";
import closeBTN from "../../assets/closeBTN.svg";
function ItemModal({ activeModal, card, handleCloseClick }) {
  return (
    <div className={`popup ${activeModal === "preview" && "popup_opened"}`}>
      <div className="popup__content popup__content-type-image">
        <button
          onClick={handleCloseClick}
          type="button"
          className="popup__close"
        ></button>
        <img src={card.link} alt="" className="popup__image" />
        <div className="popup__footer-item">
          <h2 className="popup__caption">{card.name}</h2>
          <p className="popup__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
