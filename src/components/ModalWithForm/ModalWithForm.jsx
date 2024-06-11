import "./ModalWithForm.css";
import closeBTN from "../../assets/closeBTN.svg"; //;
function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleCloseClick,
}) {
  return (
    <div
      className={`popup ${activeModal === "add-garment" && "popup__opened"}`}
    >
      <div className="popup__content">
        <h2 className="popup__title">{title}</h2>
        <button
          onClick={handleCloseClick}
          type="button"
          className="popup__close"
        >
          <img className="popup__close-image" src={closeBTN} />{" "}
        </button>
        <form className="popup__form">
          {children}
          <button type="submit" className="popup__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
