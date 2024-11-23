import React from 'react';
import { Card, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material';

function PlaceCard({ name, image, position, company }) {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Card
      sx={{
        maxWidth: isSmallScreen ? '100%' : 250,
        height: isSmallScreen ? 'auto' : 400, // Increased height for non-small screens
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2, // Reduced radius to match image
        boxShadow: 3,
        margin: isSmallScreen ? 1 : 0, // Add margin for small screens
      }}
    >
      <CardMedia
        component="img"
        height={isSmallScreen ? 'auto' : 200} // Adjust height for small screens
        image={image}
        alt={name}
        sx={{
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          width: isSmallScreen ? '100%' : 'auto', // Adjust width for small screens
        }}
      />
      <CardContent
        sx={{
          flexGrow: 1, // Make the content fill remaining space
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center', // Ensure text is centered
          padding: 2, // Add padding for spacing
        }}
      >
        <Typography variant="h6" sx={{ color: '#640D5F', fontWeight: 'bold' }} component="div">
          {name}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#7A1CAC', marginTop: 1 }}>
          {position}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#C68FE6', marginTop: 0.5 }}>
          {company}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PlaceCard;
