// TestimonialCard.js
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const TestimonialCard = ({ content, name, designation }) => {
  return (
    <Card elevation={3} sx={{ borderRadius: 2, padding: 2, maxWidth: 400, margin: 'auto', height: '100%', backgroundColor: '#f3e5f5' }}>
      <CardContent>
        <Typography variant="body1" sx={{ marginBottom: 2, color: '#6A0DAD' }}>
          {content}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#6A0DAD' }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#6A0DAD' }}>
          {designation}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
