import "../Styles/Certificados.css";
function Certificados() {
  return (
    <section id="certificados" data-aos="fade-up" className="certificados">
      <span className="glow"></span>
      <h1>Certificados</h1>
      <div className="carousel">
        <div className="imgC">
          <Contenedor
            img="media/certificados/Cingles.webp"
            titulo="2019 - SENA"
          />
          <Contenedor
            img="media/certificados/Cc++.webp"
            titulo="2021 - SENA"
          />
          <Contenedor
            img="media/certificados/Csistemas.webp"
            titulo="2022 - SENA"
          />
          <Contenedor
            img="media/certificados/CFreecodecamp.png"
            titulo="2022 - FreeCodeCamp"
          />
          <Contenedor
            img="media/certificados/CIntroduccionAlaProgramacion.webp"
            titulo="2023 - CUN"
          />
          <Contenedor
            img="media/certificados/Cfpi.webp"
            titulo="2024 - SENA"
          />
          <Contenedor
            img="media/certificados/CBigDataT.png"
            titulo="2024 - Capacitate Para El Empleo"
          />
          <Contenedor
            img="media/certificados/CMTJS.webp"
            titulo="2024 - Generacion TIC"
          />
          <Contenedor
            img="media/certificados/CMTIA.webp"
            titulo="2024 - Generacion TIC"
          />
         
        </div>
      </div>
    </section>
  );
}

function Contenedor(props: any) {
  return (
    <div className="containerI">
      <span className="certificados_img">
        <img loading="lazy" src={props.img} alt="imagen de certificado" />
      </span>
      <div className="overlay">
        <h2>{props.titulo}</h2>
      </div>
    </div>
  );
}

export default Certificados;
