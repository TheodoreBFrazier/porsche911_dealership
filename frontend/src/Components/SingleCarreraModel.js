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

function SingleCarreraModel({ carrera }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Card sx={{ width: 375, height: 'auto' }} >
            <div className="model-name">
                <h2>{carrera.model_name}</h2>
            </div>
            <CardMedia

                component="img"
                image={`/images/${carrera.image}`}
                alt="Image of the current model"
                sx={{ objectFit: "contain" }}
            />

            <div className="model-price">
                <p>Starting at ${carrera.price.toLocaleString()}</p>
            </div>
            <div className="model-description">
                <h5>{carrera.description}</h5>
            </div>
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
                <CardContent>
                    <Typography paragraph>
                        <p><strong>Engine: </strong>{carrera.motor}</p>
                        <p><strong>Bore:</strong>{carrera.bore}</p>
                        <p><strong>Stroke: </strong>{carrera.stroke}</p>
                        <p><strong>Displacment:</strong>{carrera.displacement}</p>
                        <p><strong>Power Output:</strong>{carrera.max_power}</p>
                        <p><strong>Max Power:</strong>{carrera.max_power_at_rpm}</p>
                        <p><strong>Max Engine Speed:</strong>{carrera.max_engine_speed}</p>
                        <p><strong>Max Torque:</strong>{carrera.max_torque}</p>
                        <p><strong>Max Torque @ RPM:</strong>{carrera.max_torque_at_rpm}</p>
                        <p><strong>Max Power Per Liter:</strong>{carrera.max_power_per_liter}</p>
                        <p><strong>Power To Weight Ratio:</strong>{carrera.power_to_weight}</p>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default SingleCarreraModel;

