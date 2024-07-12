import "../Styles/Skills.css";
function Skills() {
  return (
    <section id="skills" className="skills">
      <h1>Skills</h1>
      <div className="containerS">
        <span>
          <img loading="lazy" src="src/media/Icons/html.png" alt="" />
        </span>
        <span>
          <img loading="lazy" src="src/media/Icons/css.png" alt="" />
        </span>
        <span>
          <img loading="lazy" src="src/media/Icons/js.png" alt="" />
        </span>
        <span>
          <img loading="lazy" src="src/media/Icons/Tailwind.png" alt="" />
        </span>
        <span>
          <img
            loading="lazy"
            src="src/media/Icons/django-icon-1606x2048-lwmw1z73.png"
            alt=""
          />
        </span>
      </div>
    </section>
  );
}
export default Skills;
