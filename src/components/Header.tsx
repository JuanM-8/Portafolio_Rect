import "../Styles/Header.css";
function Header() {
  return (
    <header>
      <nav className="nav" id="nav">
        <div className="nav-list">
          <a id="aboutA" href="#about">
            Sobre mi
          </a>
          <a id="aboutA" href="#proyectos">
            Proyectos
          </a>
          <a id="aboutA" href="#certificados">
            Certificados
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Header;