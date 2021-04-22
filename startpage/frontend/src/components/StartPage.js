import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TextField, Button, Grid, Typography, FormControlLabel, Collapse, Switch, Card, CardContent, IconButton, 
  CardMedia } from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';
import { red } from '@material-ui/core/colors';

import { getCityList, deleteCity } from "../actions/city";

import NewCityForm from "./layout/NewCityForm";

// StartPage functional component:
const StartPage = ({ city_list, getCityList, deleteCity }) => {
  // States:
  const [newCityFormChecked, setNewCityFormChecked] = useState(false);

  // DidMount useEffect:
  useEffect(() => {
    getCityList();
  }, [])

  // Return to render:
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          Weather App
        </Typography>
        <FormControlLabel
          control={<Switch checked={newCityFormChecked} 
          onChange={() => setNewCityFormChecked(!newCityFormChecked)} 
          name="newCityForm" />}
          label="Show new city form"
        />
      </Grid>
      <Grid item xs={12} align="center">
        <Collapse in={newCityFormChecked}>
          <NewCityForm />
        </Collapse>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} align="center">
        {city_list.map(city => (
          <Card key={city.id} style={{display: 'flex'}}>
            <CardContent>
              <Typography variant="h6" component="h6" align="left">
                {city.city_name}
                <IconButton aria-label="delete" align="right" onClick={() => deleteCity(city.id)}>
                  <CancelIcon style={{ color: red[500] }} fontSize="small"/>
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
      {console.log(city_list)}
    </Grid>
  );
}

// PropTypes:
StartPage.propTypes = {
  city_list: PropTypes.array.isRequired,
  getCityList: PropTypes.func.isRequired,
  deleteCity: PropTypes.func.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  city_list: state.city.city_list,
});

export default connect(mapStateToProps, { getCityList, deleteCity })(StartPage);