import { useTranslation } from "react-i18next";

import "../Styles/Button.css";
function Button() {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === "es";

  const changeLanguage = () => {
    const newLang = isSpanish ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="buttonLanguage">
      <button onClick={changeLanguage}>{isSpanish ? "EN" : "ES"}</button>
    </div>
  );
}

export default Button;
