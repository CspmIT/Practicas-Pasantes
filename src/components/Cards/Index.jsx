import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="src/assets/img/cat.jpg"
          alt="gatito"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bigotes
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Tuki
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}