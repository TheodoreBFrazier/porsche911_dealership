import React from "react";
import { Link } from "react-router-dom";


//Material UI

//Card actions
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SingleCarForSale({ porsche }) {
    return (
        <Card sx={{ width: 375, height: 'auto' }}>
            <CardMedia
                component="img"
                image={`/images/${porsche.main_image}`}
                alt="for sale porsche main photo"
                sx={{ objectFit: "contain"}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {porsche.year}  {porsche.model_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${porsche.price.toLocaleString()}
                    {porsche.color}
                </Typography>
                <CardActions>
                    <Button component={Link} to={`/porschestore/${porsche.porsche_id}`} variant="outlined" >
                        VIEW DETAILS
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

