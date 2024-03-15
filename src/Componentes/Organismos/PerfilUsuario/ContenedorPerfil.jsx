import { Navegador } from "../../Moleculas/PerfilUsuario/Navegador"
import { ColumnaUno } from "../../Moleculas/PerfilUsuario/ColumnaUno"
import { ColumnaDos } from "../../Moleculas/PerfilUsuario/ColumnaDos"
import "./ContenedorPerfil.css"
export function ContendorPerfil(){
    return(<>
    <Navegador/>
    <div className="Contenedor">
      <ColumnaUno/>
      <ColumnaDos/>
    </div>
    </>)
}