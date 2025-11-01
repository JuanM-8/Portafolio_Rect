import "../Styles/Certificados.css";
import { useState, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useTranslation } from "react-i18next";

const certificadosData = [
  {
    img: "media/certificados/Adso.avif",
    titulo: "TECNÓLOGO EN ANALISIS Y DESARROLLO DE SOFTWARE ",
    year: 2025,
  },
  {
    img: "media/certificados/CGenerativeAI.avif",
    titulo: "GENERATIVE AI: PROMPT ENGINEERING BASICS · Coursera",
    year: 2025,
  },
  {
    img: "media/certificados/CLinkedin.avif",
    titulo: "FUNDAMENTOS ESENCIALES DE LA PROGRAMACION · LinkedIn",
    year: 2025,
  },
  {
    img: "media/certificados/IntroductionHTML.jpeg",
    titulo: "INTRODUCTION TO HTML · SoloLearn",
    year: 2025,
  },
  {
    img: "media/certificados/A1.jpg",
    titulo: "NIVEL A1 INGLES · Smart",
    year: 2025,
  },

  {
    img: "media/certificados/Cfpi.webp",
    titulo: "CURSO INTRODUCTORIO A LA FORMACION INTEGRAL · SENA",
    year: 2024,
  },
  {
    img: "media/certificados/CBigDataT.avif",
    titulo: "VISUALIZADOR DE BIG DATA · Capacitate Para El Empleo",
    year: 2024,
  },
  {
    img: "media/certificados/CMTJS.avif",
    titulo: "LENGUAGE DE PROGRAMACION JAVASCRIPT · Generacion TIC",
    year: 2024,
  },
  {
    img: "media/certificados/CMTIA.avif",
    titulo: "INTELIGENCIA ARTIFICIAL · Generacion TIC",
    year: 2024,
  },
  {
    img: "media/certificados/CssCertificado.jpeg",
    titulo: "INTRODUCTION TO CSS · SoloLearn",
    year: 2024,
  },
  {
    img: "media/certificados/IntroductionJS.jpeg",
    titulo: "INTRODUCTION TO JAVASCRIPT · SoloLearn",
    year: 2024,
  },
  {
    img: "media/certificados/CIntroduccionAlaProgramacion.webp",
    titulo: "INTRODUCCION A LA LÓGICA DE PROGRAMACIÓN · CUN",
    year: 2023,
  },
  {
    img: "media/certificados/Csistemas.webp",
    titulo: "TÉCNICO EN SISTEMAS · SENA",
    year: 2022,
  },
  {
    img: "media/certificados/CFreecodecamp.avif",
    titulo: "RESPONSIVE WEB DESIGN · FreeCodeCamp",
    year: 2022,
  },
  {
    img: "media/certificados/Cc++.webp",
    titulo: "ESTRUCTURA DEL LENGUAJE DE PROGRAMACION C++ · SENA",
    year: 2021,
  },
  {
    img: "media/certificados/Cingles.webp",
    titulo: "ENGLISH DOT WORKS 2 · SENA ",
    year: 2019,
  },
];

function Certificados() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [selectedYear, setSelectedYear] = useState("Todos");
  const [certificadoAmpliado, setCertificadoAmpliado] = useState<string | null>(
    null
  );

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>(".containerI");
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, scale: 0.8, y: 20 },

        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: .5,
          ease: "",
          scrollTrigger: {
            trigger: item,
            start: "top 90%", // cuando entra al viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [show]);

  const toggleShow = () => {
    setShow(!show);
  };

  const handleYearChange = (e: any) => {
    setSelectedYear(e.target.value);
  };

  const filteredCertificados = certificadosData.filter((certificado) => {
    return (
      selectedYear === "Todos" || selectedYear === certificado.year.toString()
    );
  });

  return (
    <section id="certificados" className="certificados">
      <span className="glow"></span>
      <h1>{t("certificates")}</h1>

      <div className="carousel">
        <div>
          <select value={selectedYear} onChange={handleYearChange}>
            <option value="Todos">
              {t("all") + ` (${certificadosData.length})`}
            </option>
            <option value="2019">2019</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
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
                onClick={() => setCertificadoAmpliado(certificado.img)}
              />
            ))}
        </div>
        {filteredCertificados.length >= 6 && (
          <button onClick={toggleShow}>
            {show ? t("seeLess") : t("seeMore")}
          </button>
        )}
      </div>

      {certificadoAmpliado && (
        <div className="modal" onClick={() => setCertificadoAmpliado(null)}>
          <img
            src={certificadoAmpliado}
            alt="Certificado ampliado"
            className="modal-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function Contenedor({ img, titulo, year, onClick }: any) {
  return (
    <div className="containerI" onClick={onClick}>
      <img loading="lazy" src={img} alt="Certificado" />
      <h3>{titulo}</h3>
      <p>{year}</p>
    </div>
  );
}

export default Certificados;
