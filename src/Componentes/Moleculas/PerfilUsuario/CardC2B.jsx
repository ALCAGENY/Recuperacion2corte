import { Texto } from "../../Atomos/Texto";
import { Boton } from "../../Atomos/Boton"
import "./CardC2.css"
export function CardC2B(){
    return(<>
    <div className="ContendorCard2">
    <Texto className="TextoC2" TextoEsc="Tus Articulos" />
    <div className="ContendorCardT2">
    <Texto className="Texto1C2" TextoEsc="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link." />
    </div>
    <div className="ContendorImgB">
    <div className="TextosImg">
    <Texto className="TextoC3" TextoEsc="Cary Johns" /><br />
    <div className="ContendorCardT3">
    <Texto className="Texto2C2" TextoEsc="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link." /><br />
    <Boton className="BotonC2" TextoBoton="Saber mas"></Boton>
    </div>
    </div>
    </div>
    </div>
    </>)
}