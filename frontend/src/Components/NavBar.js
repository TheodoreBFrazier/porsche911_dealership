import React from 'react';
import { Link } from "react-router-dom"

import logoMenu from "../Assets/Images/porsche_logo.png"
import sellIcon from "../Assets/Images/porsche-sell-icon.png"



function NavBar() {
    return (
        <nav className="navigation">


        
              
                        <Link to="/">
                            Home
                        </Link>
             
             


<Link to="/carrera" style={{ textDecoration: 'none' }}>
    Carrera
</Link>

                

                    


       
                        <Link to="/turbo" style={{ textDecoration: 'none' }}>
                            Turbo
                        </Link>
           
                        <Link to="/gt3" style={{ textDecoration: 'none' }}>
                            911 GT3
                        </Link>
              
                        <Link to="/generations" style={{ textDecoration: 'none' }}>
                     
                                generations
                     
                        </Link>

                 
                            <Link to="/porschestore" style={{ textDecoration: 'none' }}>
  
                         
                                    Shop
                       
                            </Link>
                 


        </nav >
    )
}

export default NavBar;