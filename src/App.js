import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Contador from "./componentes/Contador";
import Boton from "./componentes/Boton";
import { useState } from "react";

function App() {
  const [counClick, setCounClick] = useState(0);
  const manejarclic = () => {
    setCounClick(counClick + 1);
  };
  const reiniciar = () => {
    setCounClick(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenidor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="free code camp logo"
        />
      </div>
      <div className="contendor-principal">
        <Contador counClick={counClick} />
        <Boton text="Click" isClickOrReset={true} clickButton={manejarclic} />
        <Boton text="Reniciar" isClickOrReset={false} clickButton={reiniciar} />
      </div>
    </div>
  );
}

export default App;
