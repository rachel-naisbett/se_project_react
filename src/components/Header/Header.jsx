import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo}></img>
      <p className="header__date-location">DATE, LOCATION</p>
      <button className="header__btn-add-clothes">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__userName">NAME</p>
        <img className="header__avatar" src={avatar} alt="name"></img>
      </div>
    </header>
  );
}

export default Header;
