import { Texto } from "../../Atomos/Texto";
import Corazon from "../../../assets/Imagenes/Corazon.png";
import Comentar from "../../../assets/Imagenes/comente.png";
import Compartir from "../../../assets/Imagenes/compartir.png";
import "./Card.css"

export function  NavFinal(){
    return(<>
    <br /><br />
      <div className="TextosAlinacion1">
          <div className="ImgAlinacion">
            <img className="IMGCorazon" src={Corazon} />
            <Texto className="" TextoEsc="10 comentarios" />
          </div>
          <div className="TextosAlinacion2">
          <div className="ImgAlinacion">
            <img className="IMGCorazon" src={Comentar} />
            <Texto className="" TextoEsc="10 comentarios" />
          </div>
          <div className="ImgAlinacion">
            <img className="IMGCorazon" src={Compartir} />
            <Texto className="" TextoEsc="10 comentarios" />
          </div>
          </div>
        </div>
    </>)
}