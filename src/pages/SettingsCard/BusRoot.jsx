import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import sidebarBg from '../../assets/bg1.jpg';

export default function MultiActionAreaCard() {
  return (
    <div className='row1card'>
    <Card  sx={{ minWidth: 310}} sx={{ borderRadius: '30px 30px 30px 30px;'}}>
      <CardActionArea>
        {/* <div className='bg'>
        <CardMedia
          component="img"
          height="113"
          image={sidebarBg}
          // backgroundColor='red'
          alt="green iguana"
        />
        </div> */}
        
        <hr></hr>
        <CardContent>
          <Typography  variant="h5" component="div" >
            <center>Bus Root</center>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p style={{float:'right',fontSize:'10px'}}>widespread group </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
  );
}