import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    margin: "10vh auto",
    marginBottom: "15vh",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: "33.33%",
    flexShrink: 0,
    padding: ".4vw",
    color: "#000",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    color: "#000",
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            POR QUÉ ELEGIRNOS?
          </Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography>
            Porque trabajamos con las mejores marcas de vinos y espumantes
            provenientes de las mejores estancias.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>QUIENES SOMOS?</Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography>
            Somos Emi Martinez, Valentino Pagani, Agustín Pérez y Agustín
            Zanellato.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
