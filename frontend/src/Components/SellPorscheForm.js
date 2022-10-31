import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//MATERIAL UI 

//Form 
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid"
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";


const [formValues, setFormValues] = useState(formDefaultValues);


export default function SellPorscheForm() {
    let navigate = useNavigate();

    const [porsche, setPorsche] = useState({
        seller_name: "",
        seller_number: "",
        seller_email: "",
        location_city: "",
        location_state: "",
        model_name: "",
        year: 0,
        body_style: "",
        price: 0,
        generation: "",
        color: "",
        transmission: "",
        description: "",
        main_image: "",
        second_image: "",
        third_image: "",
        fourth_image: "",
        fifth_image: "",
    });

    const sellPorsche = () => {
        axios
            .post(`${API}/porschestore`, porsche)
            .then(
                () => {
                    navigate(`/porschestore`);
                },
                (error) => console.log(error)
            )
            .catch((c) => console.warn("catch", c))
    }

    const handleTextChange = (event) => {
        setPorsche({ ...porsche, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sellPorsche();
    };



    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item>
                        <TextField
                            id="name-input"
                            name="name"
                            label="Name"
                            type="text"
                            variant="filled"
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <br />
                    <Grid item>
                        <TextField
                            id="city-input"
                            name="city"
                            label="City"
                            type="text"
                            variant="filled"
                            value={formValues.city}
                            onChange={handleInputChange}
                        />
                        <TextField
                            style={{
                                width: '25%'

                            }}
                            id="city-input"
                            name="state"
                            label="State"
                            type="text"
                            variant="filled"
                            value={formValues.state}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <br />
                    <TextField
                        style={{
                            width: '50%'

                        }}
                        id="email-input"
                        name="email"
                        label="E-mail"
                        placeholder="E-mail"
                        type="text"
                        variant="filled"
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                    <br />
                    <TextField
                        id="model-input"
                        name="sellersPorscheModel"
                        label="Model"
                        placeholder="Model"
                        type="text"
                        variant="filled"
                        value={formValues.sellersPorscheModel}
                        onChange={handleInputChange}
                    />
                    <br />
                    <TextField
                        style={{ width: "400px" }}
                        id="year-input"
                        name="year"
                        label="Model Year"
                        placeholder="Model Year"
                        type="text"
                        variant="filled"
                        value={formValues.year}
                        onChange={handleInputChange}
                    />
                    <br />
                    <TextField
                        style={{ width: "400px" }}
                        id="price-input"
                        name="price"
                        label="Asking Price"
                        placeholder="Asking price"
                        type="text"
                        variant="filled"
                        value={formValues.askingPrice}
                        onChange={handleInputChange}
                    />
                    <TextField
                        style={{ width: "400px" }}
                        id="color-input"
                        name="modelColor"
                        label="Color"
                        placeholder="Color"
                        type="text"
                        variant="filled"
                        value={formValues.modelColor}
                        onChange={handleInputChange}
                    />

                    <h4> Bodystyle </h4>
                    <RadioGroup
                        name="bodystyle"
                        value={formValues.bodystyle}
                        onChange={handleInputChange}
                        row
                    >
                        <Grid item>
                            <FormControl>
                                <FormControlLabel
                                    key="coupe"
                                    value="coupe"
                                    control={<Radio size="small" />}
                                    label="coupe"
                                />
                                <FormControlLabel
                                    key="cabriolet"
                                    value="cabriolet"
                                    control={<Radio size="small" />}
                                    label="coupe"
                                />
                                <FormControlLabel
                                    key="targa"
                                    value="targa"
                                    control={<Radio size="small" />}
                                    label="targa"
                                />
                            </FormControl>
                        </Grid>
                    </RadioGroup>
                    <h4> Transmission </h4>
                    <RadioGroup
                        name="bodystyle"
                        value={formValues.transmission}
                        onChange={handleInputChange}
                        row
                    >
                        <Grid item>
                            <FormControl>
                                <FormControlLabel
                                    key="manual"
                                    value="manual"
                                    control={<Radio size="small" />}
                                    label="manual"
                                />
                                <FormControlLabel
                                    key="automatic"
                                    value="automatic"
                                    control={<Radio size="small" />}
                                    label="automatic"
                                />
                                <FormControlLabel
                                    key="PDK auto"
                                    value="PDK auto"
                                    control={<Radio size="small" />}
                                    label="PDK auto"
                                />
                            </FormControl>
                        </Grid>
                    </RadioGroup>
                    <TextField
                        id="description-input"
                        name="description"
                        label="Description"
                        placeholder="write a description"
                        type="text"
                        variant="filled"
                        value={formValues.description}
                        onChange={handleInputChange}
                        style={{ height: 400 }}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Grid>
            </form>
        </div >
    );
};
