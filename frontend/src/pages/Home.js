import React from "react";
import { Link } from "react-router-dom";

//Material UI
import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//Importing of images

// HERO ---- 
import homeHero from "../Assets/Images/hero-home-img.png"
// Carrera COUPE
//Hero image is in CSS file
import ContactForm from "../Components/ContactForm";






function Home() {
  return (
    <div className="Home">
      <section className="home-hero">
        <div className="hero-text">
          <h1 className="hero-text-heading">
            Hero Text Goes Here
          </h1>
          <h5>
            Hero text subheading will go here. We we add the text as neccesary. Have to figure out what the text will be.
          </h5>
        </div>
        <div className="hero-image">
          <img
            src={homeHero}
            alt="Carrera at speed"
          />
        </div>
      </section>

      <section className="home-intro">
        <div className="typography-container">
          <h1> The only dealership devoted to the Porsche 911. Search from a unrivaled selction of Porsche 911 from all eras. Both new and used models avaliable. Find the perfect 911 for you.</h1>
        </div>
      </section>

      <section className="featured">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            alt="icon goes here"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Heading
            </Typography>
            <Typography variant="body2" color="text.secondary">
          Test Text
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

      </section>
      <ContactForm />
    </div >
  );
}

export default Home;
