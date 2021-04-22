import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, FormControlLabel, Collapse, Switch, Card, CardContent, IconButton, 
  CardMedia } from "@material-ui/core";

import NewCityForm from "./layout/NewCityForm";

const StartPage = () => {
  const [newCityFormChecked, setNewCityFormChecked] = useState(false);

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
    </Grid>
  );
}

export default StartPage;