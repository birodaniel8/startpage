import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, FormControlLabel, Collapse, Switch, Card, CardContent, IconButton, 
  CardMedia } from "@material-ui/core";

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
        <Typography component="h4" variant="h4">{newCityFormChecked.toString()}</Typography>
      </Grid>
    </Grid>
  );
}

export default StartPage;