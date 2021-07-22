import imgBanner from "../../assets/vinos.png"
import "./index.css"

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner_content">
        <div className="content1">
          <h2>Vinos y Espumantes</h2>
          <span>Martinez Emi, Pagani Valentino, Pérez Agustín y Zanellato Agustín</span>
          <p>A los mejores vinos del país, los encontras acá.</p>
        </div>

        <div className="content2">
          <img src={imgBanner} alt="" />
        </div>
      </div>
    </div>
  );
};