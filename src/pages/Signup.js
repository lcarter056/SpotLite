
import React, {useState, useEffect} from 'react';
import photo from './flowers.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import './Home.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [name, setName] = (useState(null));
    const [last, setLast] = (useState(null));
    const [user, setUser] = (useState(null));
    const [password, setPw] = (useState(null));
    const [email, setEmail] = (useState(null));
    const navigate = useNavigate();

    return (
      <div>    
    <Card sx={{ display: 'flex' , height: 450, width: 900}}>
    <CardMedia
        component="img"
        sx={{ width: 380}}
        image={photo}
        title="Profile pic"
        />

  <Box>
  <CardContent>
    <div className='signup-card'>
    <h2> Create an Account </h2>
      <form action > 
        <Typography variant='h5' marginTop={5}>
        <label> First name:
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            </Typography>
            <Typography variant='h5' marginTop={2}>
            <label> Last name:
            <input type='text' value={last} onChange={(e) => setLast(e.target.value)}/>
            </label>
            </Typography>
            <Typography variant='h5' marginTop={2}>
            <label> Username:
            <input type='text' value={user} onChange={(e) => setUser(e.target.value)}/>
            </label>
            </Typography>
            <Typography variant='h5' marginTop={2}>
            <label> Password:
            <input type='password' value={password} onChange={(e) => setPw(e.target.value)}/>
            </label>
            </Typography>
            <Typography variant='h5'  marginTop={2}>
            <label> Email: 
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            </Typography>
            <Button type='submit' onClick={() => navigate('/Profile')}> Create Account</Button>

      </form>
      </div>
      </CardContent>

      </Box>
 
   </Card>
      </div>
    );
   };
   
   export default SignUp; 