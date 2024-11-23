import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid, CardMedia, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const CourseCard = ({ image, title, duration, durationType, buttonText }) => {
  return (
    <Card sx={{ width: 200, height: 335, borderRadius: 2, boxShadow: 3, position: 'relative' }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ objectFit: 'contain', width: '100%', height: '135px' }} // Added height and width
      />
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight='bold' component="div">
          {title}
        </Typography>
        <Box display="flex" alignItems="center" mb={1}>
          {/* <AccessTimeIcon fontSize="small" /> */}
          <Typography variant="body2" color="textSecondary" sx={{ marginLeft: '8px' }}>
            {duration} {durationType}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Button size="small" variant="outlined" fullWidth>
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
