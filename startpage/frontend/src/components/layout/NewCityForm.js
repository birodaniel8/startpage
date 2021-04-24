import React, { useState } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { TextField, Button, Grid } from "@material-ui/core";

import { addCity, weather_api_url } from "../../actions/city";

// NewCityForm:
const NewCityForm = ({ city_list, addCity }) => {
  const [newCityName, setNewCityName] = useState("");
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const submitNewCity = () => {
    const newCityCapitalized = newCityName.charAt(0).toUpperCase() + newCityName.slice(1)
    if (city_list.filter((city) => city.city_name === newCityCapitalized).length) {
      setError(true);
      setErrorText("City already exists");
    } else {
      fetch(weather_api_url.replace("{}", newCityCapitalized)).then((response) => response.json()).then((response) => {
        if (response.cod === 200) {
          const newCity = { city_name: newCityCapitalized };
          addCity(newCity);
          console.log("city added");
        } else {
          setError(true);
          setErrorText("City doesn't exists");
        }
      });
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <TextField
          error={error}
          label="New City"
          value={newCityName}
          helperText={errorText}
          onChange={(e) => {
            setNewCityName(e.target.value);
            setError(false);
            setErrorText("");
          }}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="primary" variant="contained" onClick={submitNewCity}>
          Add a New City
        </Button>
      </Grid>
    </Grid>
  );
};

// PropTypes:
NewCityForm.propTypes = {
  city_list: PropTypes.array.isRequired,
  addCity: PropTypes.func.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  city_list: state.city.city_list,
});

export default connect(mapStateToProps, { addCity })(NewCityForm);
