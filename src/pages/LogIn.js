import Button from "@mui/material/Button";
import logo from './brownLogo.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import './Home.css'
import React, {useState, useEffect} from 'react';
import banner from './banner.png';
import Box from "@mui/material/Box";
import { useNavigate, Link } from 'react-router-dom';
import photo from './flowers.png';


const LogIn = () => {
  const [user, setUser] = useState(null);
  const [password, setPw] = useState(null);
  const navigate = useNavigate();

 return (
   <div>
      
        <Card sx={{ display: 'flex' , height: 300, width: 900}}>
        <CardMedia
        component="img"
        sx={{ width: 380}}
        image={photo}
        title="Profile pic"
        />
        <Box>
        <CardContent>
        <div className='signup-card'>
        <h1> Log in </h1>
         <form action > 
         <Typography variant='h5' marginTop={5}>
                    <label> Username:
                    <input type='text' value={user} onChange={(e) => setUser(e.target.value)}/>
                    </label>
                    </Typography>
                    <Typography variant='h5' marginTop={2}>
                    <label> Password:
                    <input type='password' value={password} onChange={(e) => setPw(e.target.value)}/>
                    </label>
                    </Typography>
                    <Typography>
                    <Button type='submit' onClick={() => navigate('/Profile')}> Log in</Button>
                    </Typography>
                    <Typography variant='caption' marginTop={5}>
                     <Link>Forget password? click here </Link> 
                    </Typography>

              </form>
              </div>
              </CardContent>
              </Box>
              </Card>
   </div>
 );
};

export default LogIn; 