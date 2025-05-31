import "../Styles/Certificados.css";
import { useState } from "react";

const certificadosData = [
  {
    img: "media/certificados/Cingles.webp",
    titulo: "ENGLISH DOT WORKS 2 · SENA ",
    year: 2019,
  },
  {
    img: "media/certificados/Cc++.webp",
    titulo: "ESTRUCTURAS DEL LENGUAJE DE PROGRAMACION C++ · SENA",
    year: 2021,
  },
  {
    img: "media/certificados/Csistemas.webp",
    titulo: "TÉCNICO EN SISTEMAS · SENA",
    year: 2022,
  },
  {
    img: "media/certificados/CFreecodecamp.png",
    titulo: "RESPONSIVE WEB DESIGN · FreeCodeCamp",
    year: 2022,
  },
  {
    img: "media/certificados/CIntroduccionAlaProgramacion.webp",
    titulo: "INTRODUCCION A LA LÓGICA DE PROGRAMACIÓN · CUN",
    year: 2023,
  },
  {
    img: "media/certificados/Cfpi.webp",
    titulo: "CURSO INTRODUCTORIO A LA FORMACION INTEGRAL · SENA",
    year: 2024,
  },
  {
    img: "media/certificados/CBigDataT.png",
    titulo: "VISUALIZADOR DE BIG DATA · Capacitate Para El Empleo",
    year: 2024,
  },
  {
    img: "media/certificados/CMTJS.webp",
    titulo: "LENGUAGE DE PROGRAMACION JAVASCRIPT · Generacion TIC",
    year: 2024,
  },
  {
    img: "media/certificados/CMTIA.webp",
    titulo: "INTELIGENCIA ARTIFICIAL · Generacion TIC",
    year: 2024,
  },
  {
    img: "media/certificados/CssCertificado.jpeg",
    titulo: "INTRODUCTION TO CSS · SoloLearn",
    year: 2024,
  },
  {
    img: "media/certificados/CGenerativeAI.webp",
    titulo: "GENERATIVE AI: PROMPT ENGINEERING BASICS · Coursera",
    year: 2025,
  },
  {
    img: "media/certificados/CLinkedin.jpg",
    titulo: "FUNDAMENTOS ESENCIALES DE LA PROGRAMACION · LinkedIn",
    year: 2025,
  },
];

function Certificados() {
  const [show, setShow] = useState(false);
  const [selectedYear, setSelectedYear] = useState("Todos");

  const toggleShow = () => {
    setShow(!show);
  };

  const handleYearChange = (e: any) => {
    setSelectedYear(e.target.value);
    console.log(e.target.value);
  };

  const filteredCertificados = certificadosData.filter((certificado) => {
    return (
      selectedYear === "Todos" || selectedYear === certificado.year.toString()
    );
  });

  return (
    <section id="certificados" className="certificados">
      <span className="glow"></span>
      <h1>Certificados</h1>
      <div className="carousel">
        <div>
          <select value={selectedYear} onChange={handleYearChange}>
            <option value="Todos">Todos</option>
            <option value="2019">2019</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <div className="imgC">
          {filteredCertificados
            .slice(0, show ? filteredCertificados.length : 6)
            .map((certificado, index) => (
              <Contenedor
                key={index}
                img={certificado.img}
                titulo={certificado.titulo}
                year={certificado.year}
              />
            ))}
        </div>
        {filteredCertificados.length >= 6  && (
          <button onClick={toggleShow}>{show ? "Ver Menos" : "Ver Más"}</button>
        )}
      </div>
    </section>
  );
}

function Contenedor(props: any) {
  return (
    <div className="containerI">
      <img loading="lazy" src={props.img} alt="año de certificado" />
      <h3> {props.titulo}</h3>
      <p>{props.year}</p>
    </div>
  );
}

export default Certificados;
