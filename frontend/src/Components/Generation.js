import React from "react";
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import Collapse from '@mui/material/Collapse';
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import CardMedia from "@mui/material/CardMedia";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Generation({ generation }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };



    return (
        <Card>
            <CardContent sx={{ width: 375, height: 'auto' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {generation.gen_name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    <span>{generation.year_began} - {generation.year_ended}</span>
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                image={`/images/${generation.image}`}
                alt="generation-photo"
                sx={{ objectFit: "contain" }}
            />
            <CardActions>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >

                    <ExpandMoreIcon />

                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography gutterBottom variant="h6" component="div">
                    {generation.description}
                </Typography>
            </Collapse>
        </Card >
    );
};

export default Generation;

