import { useTranslation } from "react-i18next";
import { useState } from "react";
import "../Styles/Button.css";
function Button() {
  const [isSpanish, setIsSpanish] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    setIsSpanish(lng === "es");
    i18n.changeLanguage(lng);
  };
  return (
    <div className="buttonLanguage">
      <button  onClick={() => changeLanguage(isSpanish ? "en" : "es")}>
        {isSpanish ? "EN" : "ES"}
      </button>
    </div>
  );
}

export default Button;