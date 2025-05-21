import "../Styles/Certificados.css";
import { useState } from "react";

const certificadosData = [
  { img: "media/certificados/Cingles.webp", titulo: "2019 - SENA", year: 2019, language:"ingles"},
  { img: "media/certificados/Cc++.webp", titulo: "2021 - SENA", year: 2021 },
  { img: "media/certificados/Csistemas.webp", titulo: "2022 - SENA", year: 2022 },
  { img: "media/certificados/CFreecodecamp.png", titulo: "2022 - FreeCodeCamp", year: 2022 },
  { img: "media/certificados/CIntroduccionAlaProgramacion.webp", titulo: "2023 - CUN", year: 2023 },
  { img: "media/certificados/Cfpi.webp", titulo: "2024 - SENA", year: 2024 },
  { img: "media/certificados/CBigDataT.png", titulo: "2024 - Capacitate Para El Empleo", year: 2024 },
  { img: "media/certificados/CMTJS.webp", titulo: "2024 - Generacion TIC", year: 2024 },
  { img: "media/certificados/CMTIA.webp", titulo: "2024 - Generacion TIC", year: 2024 },
  { img: "media/certificados/CssCertificado.jpeg", titulo: "2024 - SoloLearn", year: 2024 },
  { img: "media/certificados/CGenerativeAI.webp", titulo: "2025 - Coursera", year: 2025 }
];

function Certificados() {
  const [show, setShow] = useState(false);
  const [selectedYear, setSelectedYear] = useState("Todos");

  const toggleShow = () => {
    setShow(!show);
  };

  const handleYearChange = (e:any) => {
    setSelectedYear(e.target.value);
    console.log(e.target.value);
  };

  const filteredCertificados = certificadosData.filter((certificado) => {
    return selectedYear === "Todos" ||selectedYear  === certificado.year.toString();
    
   
  });
  

  return (
    <section id="certificados" data-aos="fade-up" className="certificados">
      <span className="glow"></span>
      <h1>Certificados</h1>
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
      <div className="carousel">
        <div className="imgC">
          {filteredCertificados.slice(0, show ? filteredCertificados.length : 4).map((certificado, index) => (
            <Contenedor key={index} img={certificado.img} titulo={certificado.titulo} />
          ))}
        </div>
        {filteredCertificados.length > 4 && (
          <button onClick={toggleShow}>{show ? "Ver Menos" : "Ver Más"}</button>
        )}
      </div>
    </section>
  );
}

function Contenedor(props:any) {
  return (
    <div className="containerI">
      <span className="certificados_img">
        <img loading="lazy" src={props.img} alt="año de certificado" />
      </span>
      <div className="overlay">
        <h2>{props.titulo}</h2>
      </div>
    </div>
  );
}

export default Certificados;
