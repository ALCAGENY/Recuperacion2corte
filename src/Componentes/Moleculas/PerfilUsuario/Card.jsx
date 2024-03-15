import Perfil3 from "../../../assets/Imagenes/Perfil3.jpeg";
import { Texto } from "../../Atomos/Texto";
import Historia from "../../../assets/Imagenes/Historia.jpeg";
import Corazon from "../../../assets/Imagenes/Corazon.png";
import Comentar from "../../../assets/Imagenes/comente.png";
import Compartir from "../../../assets/Imagenes/compartir.png";
import "./Card.css";
import { NavFinal } from "./NavFinal";
export function Card() {
  return (
      <div className="ContendorCard">
        <div className="ContendorFoto">
          <img className="Perfil3" src={Perfil3} />
          <div className="CTextos">
            <Texto className="Texto5" TextoEsc="Joana Rosenbaum" />
            <Texto className="Texto6" TextoEsc="4 Horas" />
          </div>
        </div>
        <div>
          <Texto className="TextoHistoria" TextoEsc="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link."/>
          <img className="Historia" src={Historia} />
        </div>
        <div className="TextosAlinacion">
          <div className="IconCont">
            <img className="Icon" src={Corazon} />
            <Texto className="Texto6" TextoEsc="10 comentarios" />
          </div>
          <div className="IconCont">
            <img className="Icon" src={Comentar} />
            <Texto className="Texto6" TextoEsc="10 comentarios" />
          </div>
          <div className="IconCont">
            <img className="Icon" src={Compartir} />
            <Texto className="Texto6" TextoEsc="10 comentarios" />
          </div>
        </div>
    <NavFinal/>
   </div>
  );
}
