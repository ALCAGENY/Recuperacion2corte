import Perfil from "../../../assets/Imagenes/Perfil.jpeg";
import { Acercade } from "./Acercade";
import { Informacion } from "./Informacion";
import "./Columnas.css";
import { Card } from "./Card";
export function ColumnaUno() {
  return (
    <>
      <div className="Columna-1">
        <div className="ContenedorImagen">
          <img className="Perfil" src={Perfil} alt="Perfil" />
        </div>
        <Informacion />
        <div>
          <Acercade/>
        </div>
        <Card/>
        <br /><br />
        <Card/>
        <br /><br />
        <Card/>
      </div>
    </>
  );
}
