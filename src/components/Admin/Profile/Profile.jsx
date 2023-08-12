import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate=useNavigate()
  return (
    <div>
        <div className='profile_main_div'>
        <Card sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name:jhon
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Email: jhon@gmail.com
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Phone:9988776655
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Password:12345
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant='contained' onClick={()=>{navigate('editprofile')}}>Edit</Button>
      </CardActions>
    </Card>

        </div>
    </div>
  )
}

export default Profile