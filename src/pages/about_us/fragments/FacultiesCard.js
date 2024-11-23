import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, IconButton, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/system';

const profiles = [
  // {
  //   name: 'Vijith P',
  //   position: 'Master Trainer',
  //   image: 'https://orisysacademy.com/wp-content/uploads/2019/10/Vijith-HG.png', 
  //   linkedin: '#',
  // },
  // {
  //   name: 'Saliha Rukhsana',
  //   position: 'Software Trainer',
  //   image: 'https://orisysacademy.com/wp-content/uploads/2021/11/SALIHA-RUKHSANA-300x300.jpeg', 
  //   linkedin: '#',
  // },
  // {
  //   name: 'Irene Mariyam Prince',
  //   position: 'Software Trainer',
  //   image: 'https://orisysacademy.com/wp-content/uploads/2023/09/IMG-20230103-WA0040-300x300.jpg', 
  //   linkedin: '#',
  // },
];

const SocialIconButton = styled(IconButton)({
  margin: '0 5px',
});

function FacultiesCard({ profile }) {
  return (
    <Card sx={{ width: 300, height: 280, textAlign: 'center', padding: '10px', borderRadius: '15px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}>
      <Avatar 
        src={profile.image} 
        alt={profile.name} 
        sx={{ 
          width: 100, 
          height: 100, 
          margin: '0 auto 20px', 
          transition: 'transform 0.3s, box-shadow 0.3s', 
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          },
        }} 
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">{profile.name}</Typography>
        <Typography variant="subtitle1" color="textSecondary" fontWeight="light">{profile.position}</Typography>
        <Box mt={2} display="flex" justifyContent="center">
          <SocialIconButton 
            href={profile.linkedin} 
            aria-label="LinkedIn"
            sx={{
              transition: 'transform 0.3s, color 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#0077b5', 
              },
            }}
          >
            <LinkedInIcon />
          </SocialIconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

const FacultiesGrid = () => {
  return (
    <Grid container spacing={2} justifyContent="center" mt={4}>
      {profiles.map((profile, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <FacultiesCard profile={profile} />
        </Grid>
      ))}
    </Grid>
  );
}

export default FacultiesGrid;