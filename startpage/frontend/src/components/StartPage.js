import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import {
  Grid,
  Typography,
  FormControlLabel,
  Collapse,
  Switch,
} from "@material-ui/core";

import { getCityList } from "../actions/city";

import NewCityForm from "./layout/NewCityForm";
import CityCard from "./layout/CityCard";
import NewsFeed from "./layout/NewsFeed";

// StartPage functional component:
const StartPage = ({ city_list, getCityList }) => {
  // States:
  const [newCityFormChecked, setNewCityFormChecked] = useState(false);

  // DidMount useEffect:
  useEffect(() => {
    getCityList();
  }, []);

  // Return to render:
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          Weather App
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={newCityFormChecked}
              onChange={() => setNewCityFormChecked(!newCityFormChecked)}
              name="newCityForm"
            />
          }
          label="Show new city form"
        />
      </Grid>
      <Grid item xs={12} align="center">
        <Collapse in={newCityFormChecked}>
          <NewCityForm />
        </Collapse>
      </Grid>
      <Grid item xs={12} align="center">
        {city_list.map((city) => (
          <CityCard city={city} key={city.id}/>
        ))}
      </Grid>
      {console.log(city_list)}
      <Grid item xs={12} align="center">
        <NewsFeed />
      </Grid>
    </Grid>
  );
};

// PropTypes:
StartPage.propTypes = {
  city_list: PropTypes.array.isRequired,
  getCityList: PropTypes.func.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  city_list: state.city.city_list,
});

export default connect(mapStateToProps, { getCityList })(StartPage);
