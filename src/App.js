import "./App.css";
import touch from "./images/touch.jpg";
import cube from "./images/cube.jpg";
import left from "./images/l-left.png";
import right from "./images/right.png";
import eco from "./images/eco.jpg";
import cloud from "./images/cloud.jpg";
import grow from "./images/grow.jpg";

import { motion } from "framer-motion";

function App() {
  return (
    <main>
      <nav className="icons">
        <div className="first-icon">
          <img src={left} alt="icon" style={{ width: "6vw" }} />
        </div>
        <div className="second-icon">
          <img src={right} alt="icon" style={{ width: "6.4vw" }} />
        </div>
      </nav>
      <section className="shapes">
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="proto"
        >
          <p className="proto-title">PROTOTYPING</p>
        </motion.div>
        <motion.div
          initial={{ y: 250 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
          className="brand"
        >
          <p>BRANDING</p>
        </motion.div>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
          className="design"
        >
          <p>DESIGN</p>
        </motion.div>
        <motion.div
          initial={{ x: 250 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="strategy  "
        >
          <p>STRATEGY</p>
        </motion.div>
      </section>
      <section className="paragraph">
        <p>We worked with the world's biggest brands</p>
      </section>
      <section className="footer">
        <img className="footer-icons" src={eco} alt="eco" />

        <img className="footer-icons" src={cube} alt="cube" />
        <img className="touch" src={touch} alt="cube" />
        <img className="footer-icons" src={cloud} alt="cloud" />
        <img className="footer-icons" src={grow} alt="grow" />

   
      </section>
      <footer>
      <p>
          En este proyecto se utilice la librería React y Framer Motion para  la animación de los elementos.
          Utilice css para darle estilo a los elementos y las imágenes.
          Es responsive y se adapta a cualquier tamaño de pantalla.
        </p>
        <p>
          Contacto: <a href="mailto:anibaldaniel2212@gmail.com">
            Correo Electrónico
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
