import Header from "./components/Header"
import Project from "./components/Project";
import Separador from "./components/Separador";
import About from "./components/About";
import Certificados from "./components/Certificados";
import Skills from "./components/Skills"
import Footer from "./components/Footer";

import "../src/Styles/App.css";

function App() {
  return (
    <>
      <Header></Header>
      <About></About>
      <Separador></Separador>
      <Project></Project>
      <Certificados></Certificados>
      <Skills></Skills>
      <Footer></Footer>

      
    </>
  );
}

export default App;
