import "../Styles/Skills.css";
function Skills() {
  return (
    <section id="skills" className="skills">
      <h1>Skills</h1>
      <div className="containerS">
        <span>
          <img loading="lazy" src="media/Icons/html.png" alt="Icono de HTML" />
        </span>
        <span>
          <img loading="lazy" src="media/Icons/css.png" alt="Icono de CSS" />
        </span>
        <span>
          <img loading="lazy" src="media/Icons/js.png" alt="Icono de JavaScript" />
        </span>
        <span>
          <img loading="lazy" src="media/Icons/Tailwind.png" alt="Icono de Tailwind" />
        </span>
        <span>
          <img
            loading="lazy"
            src="media/Icons/django-icon-1606x2048-lwmw1z73.png"
            alt="Icono de Django"
          />
        </span>
      </div>
    </section>
  );
}
export default Skills;
