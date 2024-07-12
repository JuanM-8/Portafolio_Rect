import "../Styles/Proyectos.css";
function Project() {
  return (
    <section id="proyectos" data-aos="fade-up" className="proyectos">
      <h1>Proyectos</h1>
      <div className="container_p">
        <Projects
          img="src/media/Otros/PaginaHP.png"
          logo="src/media/Icons/html.png"
          logo1=""
          logo2="src/media/Icons/css.png"
        />
        <Projects
          img="src/media/Otros/Calculadora.png"
          logo="src/media/Icons/html.png"
          logo1="src/media/Icons/css.png"
          logo2="src/media/Icons/js.png"
        />
        <Projects
          img="src/media/Otros/TaskList.png"
          logo="src/media/Icons/html.png"
          logo1="src/media/Icons/css.png"
          logo2="src/media/Icons/Tailwind.png"
        />
        <Projects
          img="src/media/Otros/CrudDjango.png"
          logo=""
          logo2="src/media/Icons/django-icon-1606x2048-lwmw1z73.png"
          logo1=""
        />
      </div>
    </section>
  );
}

function Projects(props: any) {
  return (
    <div className="proyecto_cards">
      <a
        href="https://harrypotter-jm.netlify.app/"
        id="apcards"
        target="_blank"
      >
        <img src={props.img} alt="proyectos" />
      </a>
      <div className="lg" id="lg">
        <img src={props.logo} alt="" />
        <img src={props.logo1} alt="" />
        <img src={props.logo2} alt="" />
      </div>
    </div>
  );
}

export default Project;
