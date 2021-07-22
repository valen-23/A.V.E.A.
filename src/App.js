import React from "react";
import Navbar from "./components/Navbar.js";
import TransitionAlerts from "./components/AlertModal.js";
import Banner from "./components/Banner/index";
import ControlledAccordions from "./components/Accordion.js";
import CardProductsChampagne from "./components/CardProducts/index";
import CardProductsVinos from "./components/CardProducts/index";
import CardProductsSidras from "./components/CardProducts/index";
import CustomizedTimeline from "./components/Timeline.js";
import Perfiles from "./components/Perfiles.js";
import champagne1 from "./assets/chandon.jpg";
import champagne2 from "./assets/veuve.jpg";
import champagne3 from "./assets/mumm.jpg";
import champagne4 from "./assets/alyda_salentein.jpg";
import vino3 from "./assets/trapiche.jpg";
import ilust from "./assets/undraw_wine_tasting_30vw.svg";
import ilust2 from "./assets/undraw_nature_m5ll.svg";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Tooltip from "@material-ui/core/Tooltip";
import "./index.css";
import "./movile.css";

function App() {
  const [champagnes, setCards] = React.useState([
    {
      title: "Chandon Burt +",
      image: champagne1,
      price: "$ 710",
      Tooltip: "(doscientos pesos argentinos)",
    },
    {
      title: "Veuve Clicquot",
      image: champagne2,
      price: "$ 12.000",
      Tooltip: "(docemil pesos argentinos)",
    },
    {
      title: "Mumm Brut",
      image: champagne3,
      price: "$ 700",
      Tooltip: "(trescientos sesenta y cinco pesos argentinos)",
    },
    {
      title: "Alyda Salentein",
      image: champagne4,
      price: "$ 710",
      Tooltip: "(doscientos pesos argentinos)",
    },
  ]);
  const [vinos, setCards2] = React.useState([
    {
      title: "Malbec Rosado",
      image: "",
      price: "$ 699",
      Tooltip: "( pesos argentinos)",
    },
    {
      title: "Malbec Blanco",
      image: "",
      price: "$ 859",
      Tooltip: "( pesos argentinos)",
    },
    {
      title: "Trapiche",
      image: vino3,
      price: "$ 199",
      Tooltip: "( pesos argentinos)",
    },
    {
      title: "Malbec Rosado",
      image: "",
      price: "$ 699",
      Tooltip: "( pesos argentinos)",
    },
  ]);
  const [sidras, setCards3] = React.useState([
    {
      title: "Sidra 1",
      image: "",
      price: "$ 699",
      Tooltip: "( pesos argentinos)",
    },
    {
      title: "Sidra 2",
      image: "",
      price: "$ 859",
      Tooltip: "( pesos argentinos)",
    },
    {
      title: "Sidra 3",
      image: "",
      price: "$ 199",
      Tooltip: "( pesos argentinos)",
    },
    {
      title: "Sidra 4",
      image: "",
      price: "$ 699",
      Tooltip: "( pesos argentinos)",
    },
  ]);

  return (
    <div className="home">
      <Navbar />

      <div id="inicio"></div>

      <Banner />
      <ControlledAccordions />

      <TransitionAlerts />

      <img src={ilust} className="ilust" />

      <div id="productos"></div>

      <span className="home_title">
        <div id="champagnes" />
        MIRÁ TODOS NUESTROS PRODUCTOS: <br />
        <br />
        CHAMPAGNES:
      </span>
      <div className="home_content">
        {champagnes.map((element) => (
          <CardProductsChampagne card={element} />
        ))}
      </div>

      <div id="vinos" />
      <span className="home_title">
        <br />
        VINOS:
      </span>
      <div className="home_content">
        {vinos.map((element) => (
          <CardProductsVinos card={element} />
        ))}
      </div>

      <div className="timeline_pedido" id="ayuda">
        <CustomizedTimeline />

          <img src={ilust2} className="ilust2" />
      </div>

      {/* <SecondBanner /> */}
      <div className="banner2">
        <div className="banner_content2">
          <h2>En A.V.E.A., nos dedicamos a la importación de vinos y espumantes de la mejor calidad</h2>
        </div>
      </div>

      <div id="sidras" />
      <span className="home_title">
        <br />
        SIDRAS:
      </span>
      <div className="home_content">
        {sidras.map((element) => (
          <CardProductsSidras card={element} />
        ))}
      </div>

      <div id="nosotros" />
      <Perfiles />
      <hr />
      {/* <AcercaDe /> */}
      <div className="acercade">
        <h2>ACERCA DE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa natus saepe maiores quia repellat dolores sapiente quod sint fuga ab facere, molestiae officia nobis! Perferendis quo esse exercitationem aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ut, rem alias nam molestiae magnam excepturi quod minima? Quam vero a saepe voluptates nam ipsa accusamus amet modi recusandae laborum?
        </p>
      </div>

      <footer>
        <span>
          <FacebookIcon />
          @avea_vinosyespumantes
        </span>
        <span>
          <InstagramIcon />
          @avea.vinosyespumantes
        </span>
        <span>
          <WhatsAppIcon />
          864924629
        </span>
      </footer>
    </div>
  );
}

export default App;