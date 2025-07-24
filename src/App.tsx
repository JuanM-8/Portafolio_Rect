import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Button from "./components/buttonTranslate";
import DarkModeToggle from "./components/DarkModeToggle";
import Meta from "./components/Meta";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Separador = lazy(() => import("./components/Separador"));
const Project = lazy(() => import("./components/Project"));
const Certificados = lazy(() => import("./components/Certificados"));
const Skills = lazy(() => import("./components/Skills"));
const Footer = lazy(() => import("./components/Footer"));

import "../src/Styles/App.css";

function App() {
  return (
    <>
      <Meta />
      <Header />
      <DarkModeToggle />
      <Button />

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <About />
        <Separador />
        <Project />
        <Certificados />
        <Skills />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
