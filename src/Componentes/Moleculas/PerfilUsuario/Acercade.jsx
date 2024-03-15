import { Texto } from "../../Atomos/Texto";
import Perfil1 from "../../../assets/Imagenes/Perfil1.jpeg";
import Perfil2 from "../../../assets/Imagenes/perfil2.jpeg";
import "./Acercade.css";
export function Acercade() {
  return (
    <>
      <div className="ContendorAcerdaD">
        <div className="Acercade">
          <Texto className="Texto1" TextoEsc="Acerca de mi" />
          <Texto className="Texto2"TextoEsc="Figma ipsum component variant main layer. Reesizing undo figjam align inspect. Ipsum layer stroke slice frame italic background. Bold boolean duplicate layout overflow. Scale draft ipsum main background figma selection. Star ellipse comment figma content draft. Figma main main arrange strikethrough. List slice pixel ellipse figjam text. Arrow line variant boolean device star hand comment layer. Device shadow pixel comment scale figjam bold library font group. Arrow style slice reesizing underline prototype. Comment move underline arrange style slice move reesizing pixel"/>
        </div>
        <div className="Amigos">
          <Texto className="Texto4" TextoEsc="Amigos" />
          <div className="Dividirr">
            <Texto className="Texto3" TextoEsc="123 Amigos" />
            <Texto className="Texto2" TextoEsc="Buscar Amigos" />
          </div>
          <div className="Perfiles">
            <div className="Perfil1">
              <img className="Perfil1Fondo" src={Perfil1} />
              <div className="Texos">
                <Texto className="TextoPer" TextoEsc="Joan Rosenbaum" />
                <Texto className="TextoPerr"TextoEsc="Ing Sistemas Computacionales"/>
              </div>
            </div><br />
            <div className="Perfil2">
              <img className="Perfil1Fondo" src={Perfil2} />
              <div className="Texos">
                <Texto className="TextoPer" TextoEsc="Joan Rosenbaum" />
                <Texto className="TextoPerr"TextoEsc="Ing Sistemas Computacionales"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
