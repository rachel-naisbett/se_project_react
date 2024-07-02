import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="header logo"></img>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__btn-add-clothes"
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__userName">NAME</p>
        <img className="header__avatar" src={avatar} alt="name"></img>
      </div>
    </header>
  );
}

export default Header;
