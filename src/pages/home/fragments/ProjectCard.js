import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectCard = () => {
  const navigate = useNavigate();

  const handleReachusClick = () => {
    navigate('/reachus');
  };

  return (
    <Box
      sx={{
        backgroundColor: '#9575CD', // Medium Purple
        padding: { xs: '20px', md: '40px' }, // Adjust padding for responsiveness
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px',
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: '1200px',
          margin: '0 auto', // Center the container
          alignItems: 'center',
        }}
      >
        {/* Left Image Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <img
              src="https://orisysacademy.com/wp-content/uploads/2020/02/idea-1-500x350.png" // Replace with your image URL
              alt="Project"
              style={{
                width: '100%',
                maxWidth: '500px', // Ensure the image doesn't exceed this width
                height: 'auto',
                margin: '0 auto',
              }}
            />
          </Box>
        </Grid>

        {/* Right Text Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, padding: { xs: 2, md: 0 } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, // Adaptive font sizes
              }}
            >
              Do you have a novel project or product idea?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: { xs: '1rem', sm: '1.125rem' }, // Responsive font size
                lineHeight: 1.6,
              }}
            >
              Greaps Genix IT Solutions is dedicated to empowering businesses with innovative technology solutions. 
              If you have a groundbreaking project idea but are constrained by budget, our talented team can bring 
              it to life at a fraction of the cost. We will conduct thorough research and development for you, 
              ensuring that your vision is realized while providing our team with invaluable experience.
            </Typography>
            <Button
              variant="contained"
              onClick={handleReachusClick}
              sx={{
                backgroundColor: '#D1C4E9', // Light Purple
                color: '#000',
                fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive button text
                padding: { xs: '8px 16px', sm: '10px 20px' }, // Adjust padding for small and larger screens
                textTransform: 'none',
              }}
            >
              Do It With Us
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectCard;
