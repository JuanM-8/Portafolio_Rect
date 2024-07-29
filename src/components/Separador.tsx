import  { useState, useEffect } from "react";
import "../Styles/Separador.css";

function Separador() {
  const [strokeColor, setStrokeColor] = useState('#ffffff');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setStrokeColor('#ffffff');
      } else {
        setStrokeColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="separador">
      <svg
        id="ssvg"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-big-down-lines"
        width={28}
        height={28}
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke={strokeColor}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3z" />
        <path d="M15 3h-6" />
        <path d="M15 6h-6" />
      </svg>
    </section>
  );
}

export default Separador;
