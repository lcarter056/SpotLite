
import React from "react";
import Button from "@mui/material/Button";
import logo from './brownLogo.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import './Home.css'
import banner from './banner.png';
import { useNavigate } from 'react-router-dom'

import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';


const theme = createTheme({
  palette: {
    primary: {
      light: '#e4c2db', //baby pink
      main: '#a3b889',  // sage green
      dark: '#776b51',   // dark brown
      contrastText: '#fff',
    },
    secondary: {
      light: '#f2e6cc', // light tan
      main: '#495d38',  // dark sage
      dark: '#5192a0',  // baby blue
      contrastText: '#000',
    },
  },
});


// LOGO WEBSITE: https://logo.app/create/edit-logo/a42Ynz6fcP
const Home = () => {
  const navigate = useNavigate();
 return (
  <>
   <div className='block'>
        <div className="left">
        <img  className="logo-photo" src={logo} alt='logo'/>
        <img  className="banner-photo" src={banner} alt='banner'/>
        </div>
        <div className='my-container'>
          <Card className="card" >
         
          <CardContent>
          <Typography variant="overline" sx={{ color: 'text.secondary' }}>
          SpotLite is a social platform where you can engage with vendors, sellers, and/or connect with others!
          </Typography>
          </CardContent>
          <CardActions>
          <Button onClick={() => {navigate('/Signup')}} sx={{ backgroundColor: theme.palette.secondary.dark, color: theme.palette.primary.contrastText }}> Sign Up </Button>
          </CardActions>
          </Card>
         

          <Card className="card" variant='outlined'>
          <CardContent >
          <Typography variant="overline" sx={{color: 'text.secondary'}}>
          Already have an account? Welcome back!
          </Typography>
          </CardContent>
          <CardActions>
          <Button onClick={() => {navigate('/LogIn')}} sx={{ backgroundColor: theme.palette.secondary.dark, color: theme.palette.primary.contrastText }}> Sign In </Button>
          </CardActions>
          </Card>
          
          </div>
        
      </div>
      <h2>
        About Us
      </h2>
      <p>
        I created this website so that artists, innovators, and vendors can share their skills and products with the world.
         This site ensures easy access to new sellers and allows for customers to connect with vendors or even partner with them!
      </p>
      <h4>
        Contact Us!
      </h4>
      <p>
        email: spolite@gmail.com
        Our Team: laila 
      </p>
    </>
    );
   }

export default Home; 
