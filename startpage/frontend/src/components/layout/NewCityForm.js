import React, { useState } from 'react';
import { TextField, Button, Grid } from "@material-ui/core";

const NewCityForm = () => {
  const [newCityName, setNewCityName] = useState("");
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <TextField
          error={error}
          label="New City"
          value={newCityName}
          helperText={errorText}
          onChange={(e) => setNewCityName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setError(!error);
            if (errorText){
              setErrorText("");
            } else {
              setErrorText("something random");
            }
          }}
        >
          Add a New City
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewCityForm;
