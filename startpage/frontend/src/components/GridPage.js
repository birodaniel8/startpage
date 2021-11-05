import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  FormLabel,
  FormControlLabel,
  Collapse,
  Switch,
  RadioGroup,
  Radio,
  Paper,
  Container,
  InputBase,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import SearchIcon from "@material-ui/icons/Search";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     backgroundColor: "grey",
//     border: 1,
//     padding: "10px 30px",
//   },
//   gridItem: {
//     backgroundColor: "white",
//     border: "1px solid blue",
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  gridItem: {
    borderRadius: "15px",
    backgroundColor: "white",
    // border: "1px solid blue",
    margin: "5px 10px",
    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
  },
  navBar: {
    height: "40px",
    backgroundColor: blue[200],
    position: "sticky",
    top: 0,
    zIndex: 1,
    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
  },

  navBarContent: {
    justifyContent: "space-between",
    padding: "10px",
    border: "1px solid green",
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    height: "15px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const GridPage = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div>
      <Grid container className={classes.navBar}>
        <Container maxWidth="lg" spacing={1}>
          <Grid container className={classes.navBarContent}>
            <Grid item>
              <h3>Good Morning!</h3>
            </Grid>
            <Grid item>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Grid>
            <Grid item>asdfasdfg</Grid>
          </Grid>
        </Container>
      </Grid>
      <Container maxWidth="lg" spacing={1}>
        <Grid container justify="center">
          <Grid item xs={12} md={4} className={classes.gridItem}>
            <div className="grid-item">
              <h1>Grid</h1>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                impedit maxime ab? Quo dolores perspiciatis deleniti odit
                molestias. Cumque sunt incidunt repellat commodi nam laborum
                officiis mollitia expedita! Impedit, beatae.
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.gridItem}>
            asdfa
          </Grid>
          <Grid item xs={12} md={4} className={classes.gridItem}>
            asdfa
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={12} md={4} className={classes.gridItem}>
            <div className="grid-item">
              <h1>Grid</h1>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                impedit maxime ab? Quo dolores perspiciatis deleniti odit
                molestias. Cumque sunt incidunt repellat commodi nam laborum
                officiis mollitia expedita! Impedit, beatae.
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.gridItem}>
            asdfa
          </Grid>
          <Grid item xs={12} md={4} className={classes.gridItem}>
            asdfa
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={12} md={4} className={classes.gridItem}>
            <div className="grid-item">
              <h1>Grid</h1>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                impedit maxime ab? Quo dolores perspiciatis deleniti odit
                molestias. Cumque sunt incidunt repellat commodi nam laborum
                officiis mollitia expedita! Impedit, beatae.
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.gridItem}>
            asdfa
          </Grid>
          <Grid item xs={12} md={4} className={classes.gridItem}>
            asdfa
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GridPage;
