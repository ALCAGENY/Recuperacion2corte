
import { Boton } from "../../Atomos/Boton"
import { Texto } from "../../Atomos/Texto"
import "./Columnas.css"
export function Informacion (){
    return(<>
      <div className="ContenedorInformacion">
          <div className="Espacio"></div>
          <div className="Dividir">
            <div className="InformacioPerfil">
            <Texto className="Nombre" TextoEsc="Joanna Rosenbaum"/>
            <Texto className="Nombre" TextoEsc="Ing. Sistemas de la informacion"/>
            <Texto className="Nombre" TextoEsc="Chiapas, Mexico"/>
            </div>
            <div className="InformacionIntereses">
            <Texto className="Nombre" TextoEsc="Intereses"/>
            <div>
            <Boton className="Botones" TextoBoton="Inicio"></Boton>
            <Boton className="Botones" TextoBoton="Inicio"></Boton>
            <Boton className="Botones" TextoBoton="Inicio"></Boton>
            <Boton className="Botones" TextoBoton="Inicio"></Boton>
            <Boton className="Botones" TextoBoton="Inicio"></Boton>
            </div>
            </div>
          </div>
        </div>
    </>)
}