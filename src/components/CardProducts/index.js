import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { Button } from "@material-ui/core"
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./index.css";

export default function CardProducts(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="card">
      {isOpen && (
        <div className="drawer">
          <a href="#">Reportar</a>
          <a href="#ayuda">Ayuda</a>
        </div>
      )}
      
      <div className="card_header">
        <IconButton aria-label="settings" className="drawer_bt"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MoreVertIcon />
        </IconButton>
        <h2>{props.card.title}</h2>
        <p>{props.card.price}</p>
      </div>

      <img src={props.card.image} alt="" className="card_img" />

      <CardActions disableSpacing>
        <Tooltip title="Realizá tu pedido por Wathsapp">
          <a href="https://wa.me/5493534174147?text=Hola!! Estoy interesado en uno de sus productos..." target="_blank" >
            <Button variant="contained" color="primary">
              comprar
            </Button>
          </a>
        </Tooltip>
      </CardActions>
    </Card>
  );
}