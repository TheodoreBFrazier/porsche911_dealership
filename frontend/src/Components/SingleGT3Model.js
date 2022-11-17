import React from "react";


//Material UI

//Card actions
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';//Material UI


function SingleGT3Model({ gt3 }) {
    return (
        <Card className="gt3-card" sx={{ width: 500, height: 'auto' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <h2>{gt3.model_name}</h2>
                </Typography>
            </CardContent>

            <CardMedia
                component="img"
                image={`/images/${gt3.image}`}
                alt="turbo"
                sx={{ objectFit: "contain" }}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Starting at ${gt3.price.toLocaleString()}
                </Typography>
            </CardContent>

        </Card >
    );
};

export default SingleGT3Model;
