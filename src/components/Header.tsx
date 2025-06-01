import "../Styles/Header.css";
import { useTranslation } from "react-i18next";
function Header() {
  const { t } = useTranslation();

  return (
    <header>
      
      <nav className="nav" id="nav">
        <div className="nav-list">
          <a id="aboutA" href="#about">
            {t("about")}
          </a>
          <a id="aboutA" href="#proyectos">
            {t("projects")}
          </a>
          <a id="aboutA" href="#certificados">
            {t("certificates")}
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Header;