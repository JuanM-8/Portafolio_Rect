import "../Styles/About.css";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <span className="glow" />
      <div className="descripcion">
        <div>
          <h1>JUAN DAVID MARIN ARISMENDEZ</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Software developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
        <p>{t("aboutP")}</p>
      </div>
      <div className="imagen">
        <img
          className="foto"
          src="media/Otros/ImageP.jpg"
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
