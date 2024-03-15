import { CardC2 } from "./CardC2";
import { CardC2A } from "./CardC2A";
import { CardC2B } from "./CardC2B";
import "./Columnas.css"
export function ColumnaDos() {
  return (
    <>
      <div className="Columna-2">
      <CardC2/><br /><br /><br /><br />
      <CardC2A/><br /><br /><br /><br />
      <CardC2B/>
      </div>
    </>
  );
}
