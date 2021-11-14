import Tooltip from "@material-ui/core/Tooltip";
import martinez from "../assets/perfilEmi.png";
import pagani from "../assets/perfilValentino.png";
import perez from "../assets/perfilAgustinP.png";
import zanellato from "../assets/perfilAgustinZ.png";

function Perfiles() {
  return (
    <div className="container">
      <h2>NOSOTROS</h2>
      <div className="content">
        <Tooltip title="Martinez Emi">
          <img src={martinez} alt="" />
        </Tooltip>
        <Tooltip title="Pagani Valentino">
          <img src={pagani} alt="" />
        </Tooltip>
        <Tooltip title="Pérez Agustín">
          <img src={perez} alt="" />
        </Tooltip>
        <Tooltip title="Zanellato Agustín">
          <img src={zanellato} alt="" />
        </Tooltip>
      </div>
    </div>
  );
}

export default Perfiles;
