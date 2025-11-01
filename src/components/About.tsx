import "../Styles/About.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { gsap } from "gsap/gsap-core";
function About() {
  const { t } = useTranslation();

  useEffect(() => {
    gsap.fromTo(
      ".descripcion",
      { opacity: 0, scale: 1, x: 150 },

      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "bounce.out",
      }
    );
  }, []);
  return (
    <section className="about" id="about">
      <span className="glow" />
      <div className="descripcion">
        <div>
          <h1>JUAN DAVID MARIN ARISMENDEZ</h1>
          <h2>{t("titleheader")}</h2>
        </div>
        <p>{t("aboutP")}</p>
      </div>
      <div className="imagen">
        <img
          className="foto"
          src="media/Otros/ImageP1.jpg"
          alt="imagen de perfil"
        />
        <div className="redes">
          <a target="_blank" href="https://www.instagram.com/juanmarin_8/">
            <img src="media/Icons/Instagram.webp" alt="logo instagram" />
          </a>
          <a href="https://github.com/JuanM-8" target="_blank">
            <img src="media/Icons/github.gif" alt="logo github" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-marin-2809b8365/"
            target="_blank"
          >
            <img src="media/Icons/linkedinlogo.png" alt="logo github" />
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
