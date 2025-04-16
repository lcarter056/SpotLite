
import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Engage.css';

// have tags, profile name, cover, and about for each car?, search and filter, cart page
const Engage = () => {
 return (
  <>
  <h1> Engagement </h1>
   <div className="container">
        
       <Card className="card" variant='outlined'>
        <CardMedia
        sx={{ height: 140 }}
        image=""
        title="Profile pic"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          @User1234
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Hi I am user1234! I am looking for models for my summer skirt collection! If you are interested please message me!
           You can also check out my swimwear collection which is currently 50% off!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">User profile</Button>

      </CardActions>
           Clothing       Affordable     Models
        </Card>


        <Card className="card" variant='outlined'>
        <CardMedia
        sx={{ height: 140 }}
        image=""
        title="Profile pic"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          @User4
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Hi I am user4! 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">User profile</Button>
      </CardActions>
           
        </Card>


        <Card className="card" variant='outlined'>
        <CardMedia
        sx={{ height: 140 }}
        image=""
        title="Profile pic"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          @NewUser453
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Hi check out my profile page to learn more about my hobbies and interests! 
          I sell jewelery and am currently looking for a friend/coworker interested in expand business!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">User profile</Button>

      </CardActions>
           Business Partner  Jewelery
        </Card>
        
   </div>
   </>
 );
}

export default Engage; 
