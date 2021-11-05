import React, { useState } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  CardMedia,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { red } from "@material-ui/core/colors";

import { deleteCity } from "../../actions/city";

// CityCard:
const CityCard = ({ deleteCity, city }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} align="center">
      <Card style={{ display: "flex" }}>
        <div>
          <CardMedia
            component="img"
            src={`http://openweathermap.org/img/w/${city.temperature_data.weather[0].icon}.png`}
            style={{ width: 100 }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography variant="h6" component="h6" align="left">
              {city.city_name}
              <IconButton
                aria-label="show more"
                align="right"
                onClick={() => deleteCity(city.id)}
              >
                <CancelIcon style={{ color: red[500] }} fontSize="small" />
              </IconButton>
            </Typography>
            <Typography align="left">
              {city.temperature_data.main.temp}°C -{" "}
              {city.temperature_data.weather[0].description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
};

// PropTypes:
CityCard.propTypes = {
  city: PropTypes.object.isRequired,
  deleteCity: PropTypes.func.isRequired,
};

export default connect(null, { deleteCity })(CityCard);
