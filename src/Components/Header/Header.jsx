import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-elements">
        <img
          className="header-logo"
          src="https://img.icons8.com/ios-filled/50/FFFFFF/cat.png"
          alt="White Cat"
        />
        <p className="header-text">FindCat</p>
      </div>
      <a className="header-href" href="https://thecatapi.com/" target="_blank">
        API
      </a>
    </div>
  );
}

export default Header;
