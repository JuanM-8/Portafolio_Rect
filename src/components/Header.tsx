import "../Styles/Header.css";
function Header() {
  return (
    <header>
      <img src="src/media/Icons/JM.png" width="50px" alt="" />
      <button id="abrir" className="abrir-menu">||
        <i className="bi bi-list" />
      </button>
      <nav className="nav" id="nav">
        <button className="cerrar-menu" id="cerrar">
          <i className="bi bi-x" />
        </button>
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