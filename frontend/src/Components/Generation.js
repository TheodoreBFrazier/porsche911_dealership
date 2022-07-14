import React from "react";

//Material UI

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function Generation({ generation }) {
    return (
        <div className="Single-generation">
            <Card sx={{ height: 500 }}>
                <CardContent>
                    <h2>  {generation.gen_name} </h2>
                    <h4>
                        <span>{generation.year_began} - {generation.year_ended}</span>
                    </h4>
                </CardContent>
            </Card>
        </div >
    )
}
export default Generation;

