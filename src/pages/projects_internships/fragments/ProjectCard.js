import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

function ProjectCard({ title, image }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 310, // Set a fixed height for the card
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,
        boxShadow: 3,
        backgroundColor: '#f5f5f5', // Light gray background for the card
        color: '#6A0DAD', // Purple grapes color for text
      }}
    >
      <CardMedia
        component="img"
        height="180" // Set the height for the image section
        image={image}
        alt={title}
        sx={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
      />
      <CardContent
        sx={{
          flexGrow: 1, // Make the content fill remaining space
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" component="div" fontWeight="bold" sx={{ color: '#6A0DAD' }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
