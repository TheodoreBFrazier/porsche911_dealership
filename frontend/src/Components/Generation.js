import React from "react";

import { Card } from "@mui/material";

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Generation({ generation }) {
    return (
        <Card>
            <CardContent sx={{ width: 375, height: 'auto' }}>
                <Typography gutterBottom variant="h3" component="div">
                    {generation.gen_name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    <span>{generation.year_began} - {generation.year_ended}</span>
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                image={`/images/${generation.image}`}
                alt="generation-photo"
                sx={{ objectFit: "contain"}}
            />
            <Typography gutterBottom variant="h5" component="div">
                {generation.description}
            </Typography>
        </Card >
    );
};

export default Generation;

