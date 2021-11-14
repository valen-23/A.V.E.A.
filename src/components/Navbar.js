import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import EcoIcon from "@material-ui/icons/Eco";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Tooltip from "@material-ui/core/Tooltip";
import Logo from "../assets/logo.jpg";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    background: "#fff",
    color: "#720b18",
    height: "65px",
    paddingTop: "5px",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    fontSize: "30px",
    fontFamily: "Zen Tokyo Zoo",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: "drawerWidth",
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#fff",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <img src={Logo} alt="avea logo" />
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#champagnes">Champagnes</a>
          <a href="#vinos">Vinos</a>
          <a href="#sidras">Sidras</a>
        </nav>
      </div>

      <div className="navbar_mobile">
        <div className={classes.root}>
          <cssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <img src={Logo} alt="logo" className="logo" />
              <Typography variant="h6" noWrap className={classes.title}>
                A.V.E.A. <EcoIcon />
              </Typography>
              <Tooltip title="Abrir Menú">
                <IconButton
                  color="inherit"
                  fontSize="1.5vw !important"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  className={clsx(open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <Tooltip title="Cerrar Menú">
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </Tooltip>
            </div>
            <List className="nav_movile">
              <a href="#inicio">Inicio</a>
              <a href="#nosotros">Nosotros</a>
              <hr />
              <a href="#champagnes">Champagnes</a>
              <a href="#vinos">Vinos</a>
              <a href="#sidras">Sidras</a>
              <hr />
            </List>
          </Drawer>
        </div>
      </div>
    </>
  );
}
