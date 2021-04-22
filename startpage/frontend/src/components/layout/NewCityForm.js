import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TextField, Button, Grid } from "@material-ui/core";

import { addCity } from "../../actions/city";

// NewCityForm:
const NewCityForm = ({ city_list, addCity }) => {
  const [newCityName, setNewCityName] = useState("");
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const submitNewCity = () => {
    if (city_list.filter(city => city.city_name === newCityName).length) {
      setError(true);
      setErrorText("City already exists");
    } else {
      const newCity = { city_name: newCityName }
      addCity(newCity)
      console.log("city added")
    }
  }

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
        <Button
          color="primary"
          variant="contained"
          onClick={submitNewCity}
        >
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
