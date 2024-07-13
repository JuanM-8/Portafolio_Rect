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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          error perspiciatis eius. Sit quibusdam at perferendis quo ratione
          atque consectetur eos magnam quam repellendus, aspernatur neque ullam,
          pariatur officiis optio, quasi fugit minima assumenda officia dolor
          laboriosam! Nobis reprehenderit labore, numquam obcaecati similique
          quam voluptatem sint a, cumque consequatur soluta.
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