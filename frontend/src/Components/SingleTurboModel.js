import React from "react";


//MATERIAL UI

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function SingleTurbo({ turbo }) {

  return (
    <Card sx={{ width: 375, height: 'auto' }} >
      <Typography gutterBottom variant="h5" component="div">
        <h2>{turbo.model_name}</h2>
      </Typography>
      <CardMedia
        component="img"
        image={`/images/${turbo.image}`}
        alt="Image of the current model"
        sx={{ objectFit: "contain" }}
      />
      <Typography gutterBottom variant="h5" component="div">
        <p>Starting at ${turbo.price.toLocaleString()}</p>
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        <h5>{turbo.description}</h5>
      </Typography>
    </Card>
  );
};

export default SingleTurbo;
