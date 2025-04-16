import Button from "@mui/material/Button";
import logo from './brownLogo.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import './Home.css'
import banner from './banner.png';


const Profile = () => {
 return (
   <div>
        <h1> Profile Page </h1>
        <Card> 
          About Me !
        </Card>
        <h2> 50 Connections </h2> 
        <Button> Start Chat </Button>

        <Button> Profile Settings </Button>
        <Card className="card" variant='outlined'>
        <CardMedia
        sx={{ height: 140 }}
        image=""
        title="Profile pic"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Skirt
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         $13.99
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="addCart">Add to Cart</Button>
        <Button size="Quantity">Quantity</Button>
      </CardActions>
          Reviews
        </Card>


        <Card className="card" variant='outlined'>
        <CardMedia
        sx={{ height: 140 }}
        image=""
        title="Profile pic"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hoodie
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           $20.87
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="addCart">Add to Cart</Button>
      <Button size="Quantity">Quantity</Button>
      </CardActions>
           Reviews
        </Card>

       <Button> Add Product </Button>
   </div>
 );
};

export default Profile; 