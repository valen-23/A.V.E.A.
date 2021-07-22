import Tooltip from "@material-ui/core/Tooltip"
import martinez from "../assets/martinez.png"
import pagani from "../assets/pagani.png"
import perez from "../assets/perez.png"
import zanellato from "../assets/zanellato.png"

function Perfiles() {
  return (
    <div className="container">
      <h2>NOSOTROS</h2>
      <div className="content">
        <Tooltip title="Martinez Emi">
          <img src={martinez} />
        </Tooltip>
        <Tooltip title="Pagani Valentino">
          <img src={pagani} />
        </Tooltip>
        <Tooltip title="Pérez Agustín">
          <img src={perez} />
        </Tooltip>
        <Tooltip title="Zanellato Agustín">
          <img src={zanellato} />
        </Tooltip>
        </div>
    </div>
  )
}

export default Perfiles