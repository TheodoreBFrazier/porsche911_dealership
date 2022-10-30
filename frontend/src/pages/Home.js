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

import classicImage from "../Assets/Images/classic-targa.jpg"
import airCooled from "../Assets/Images/air-cooled.jpg"
import modernPorsche from "../Assets/Images/porsche997-carrera-s.jpg"
import newImage from "../Assets/Images/modern.jpeg.webp"





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
        <div className="card-container">

          <div className="card">
            <Card sx={{ width: 370 }}>
              <CardMedia
                component="img"
                image={classicImage}
                height="140"
                alt="icon goes here"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Classic
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
          </div>


        <div className="card">
          <Card sx={{ width: 370 }}>
            <CardMedia
              component="img"
              height="140"
              image={airCooled}
              alt="icon goes here"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Air-cooled
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
        </div >

        <div className="card">
          <Card sx={{ width: 370 }}>
            <CardMedia
              component="img"
              height="140"
              src={modernPorsche}
              alt="icon goes here"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Modern
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
        </div >

        <div className="card">
          <Card sx={{ width: 370 }}>
            <CardMedia
              component="img"
              height="140"
              src={newImage}
              alt="icon goes here"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                New
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
        </div>
        </div>
      </section>
      <ContactForm />
    </div >
  );
}

export default Home;
