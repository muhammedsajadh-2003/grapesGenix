// ArticleCard.js
import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';

const ArticleCard = ({ title, author, date, logoUrl }) => {
  return (
    <Card elevation={3} sx={{ borderRadius: 2, padding: 2, maxWidth: 350, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <img src={logoUrl} alt={author} style={{maxWidth:'80px'}} />
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold' }}>
              By {author}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              on {date}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
