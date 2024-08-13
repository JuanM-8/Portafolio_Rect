import "../Styles/About.css";
function About() {
  return (
    <section className="about" id="about">
      <span className="glow" />
      <div className="descripcion">
        <div>
          <h1>JUAN DAVID MARIN ARISMENDEZ</h1>
          <h2>Software Developer</h2>
        </div>
        <p>
          Soy un programador web en desarrollo apasionado por el diseño y la
          implementación de interfaces de usuario. Me gusta trabajar en el
          front-end, donde puedo combinar creatividad y tecnología para crear
          experiencias de usuario atractivas y funcionales. Mi objetivo es
          seguir aprendiendo y mejorando mis habilidades en HTML, CSS,
          JavaScript y frameworks modernos como React. 😀💻
        </p>
      </div>
      <div className="imagen">
        <img
          className="foto"
          src="media/Otros/Foto.jpg"
          width="250px"
          alt="imagen de perfil"
        />
        <div className="redes">
          <a target="_blank" href="https://www.instagram.com/juanmarin_8/">
            <img src="media/Icons/Instagram.webp" alt="logo instagram" />
          </a>
          <a href="https://github.com/JuanM-8" target="_blank">
            <img src="media/Icons/github.gif" alt="logo github" />
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
