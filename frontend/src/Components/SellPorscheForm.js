import React, { useState } from "react";

//MATERIAL UI 

//Form 
import { TextField } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

//Storing the default values
const formDefaultValues = {
    name: "",
    city: "",
    /* state dropdown*/
    state: "",
    email: "",
    sellersPorscheModel: "",
    modelYear: "",
    askingPrice: 0,
    modelColor: "",
    /* body style dropdown*/
    bodystyle: "",
    /* radio button*/
    transmission: "",
    description: "",
}


export default function SellPorscheForm() {

    const [formValues, setFormValues] = useState(formDefaultValues);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues)
    };


    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="name-input"
                name="name"
                label="Name"
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
            />
            <TextField
                id="city-input"
                name="city"
                label="City"
                type="text"
                value={formValues.city}
                onChange={handleInputChange}
            />
            <TextField
                id="city-input"
                name="state"
                label="State"
                type="text"
                value={formValues.state}
                onChange={handleInputChange}
            />
            <TextField
                id="email-input"
                name="email"
                label="E-mail"
                type="text"
                value={formValues.email}
                onChange={handleInputChange}
            />
            <TextField
                id="model-input"
                name="model"
                label="Model"
                type="text"
                value={formValues.sellersPorscheModel}
                onChange={handleInputChange}
            />
            <TextField
                id="year-input"
                name="year"
                label="Model Year"
                type="text"
                value={formValues.year}
                onChange={handleInputChange}
            />
            <TextField
                id="price-input"
                name="price"
                label="Asking Price"
                type="text"
                value={formValues.email}
                onChange={handleInputChange}
            />
            <TextField
                id="email-input"
                name="email"
                label="E-mail"
                type="text"
                value={formValues.email}
                onChange={handleInputChange}
            />
            <TextField
                id="color-input"
                name="color"
                label="Color"
                type="text"
                value={formValues.modelColor}
                onChange={handleInputChange}
            />

            <RadioGroup
                name="bodystyle"
                value={formValues.bodystyle}
                onChange={handleInputChange}
                row
            >
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
            </RadioGroup>
            <RadioGroup
                name="bodystyle"
                value={formValues.transmission}
                onChange={handleInputChange}
                row
            >
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
            </RadioGroup>
            <TextField
                id="description-input"
                name="description"
                label="Description"
                type="text"
                value={formValues.description}
                onChange={handleInputChange}
            />
        </form>
    );
};
