import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'; // Material-UI icon for message bubbles
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const navigate = useNavigate();

  const handleReachusClick = () => {
    navigate('/reachus');
  };

  return (
    <Box 
      sx={{ 
        backgroundColor: '#D1C4E9', // Light purple background
        py: { xs: 4, md: 6 }, // Adjust padding for different screen sizes
        px: { xs: 3, md: 5 }, 
      }}
    >
      <Grid 
        container 
        alignItems="center" 
        justifyContent="space-between" 
        sx={{ 
          height: '100%', 
          maxWidth: 'lg', 
          mx: 'auto', // Center content
        }}
        spacing={2} // Adds spacing between grid items
      >
        {/* Left Side: Icon and Text */}
        <Grid 
          item 
          xs={12} 
          md={8} 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, // Stack content on smaller screens
            alignItems: 'center', 
            mt: { xs: 3, md: 0 }, 
            mb: { xs: 3, md: 0 }, 
          }}
        >
          <ChatBubbleOutlineIcon 
            sx={{ 
              fontSize: { xs: 40, md: 50 }, // Responsive icon size
              color: '#6A0DAD', 
              mr: { xs: 0, md: 2 }, 
              mb: { xs: 2, md: 0 }, // Add margin below for mobile view
            }} 
          />
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#6A0DAD', 
                fontWeight: 'bold', 
                fontSize: { xs: '1.4rem', md: '1.6rem' }, 
                mb: 1,
              }}
            >
              Got a Question?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#6A0DAD', 
                fontSize: { xs: '1rem', md: '1.1rem' }, 
              }}
            >
              We're here to help. Send us an email or call us at +91 471 2737 860
            </Typography>
          </Box>
        </Grid>

        {/* Right Side: Button */}
        <Grid 
          item 
          xs={12} 
          md={4} 
          sx={{ 
            display: 'flex', 
            justifyContent: { xs: 'center', md: 'flex-end' }, 
          }}
        >
          <Button 
            onClick={handleReachusClick}
            variant="contained" 
            sx={{ 
              backgroundColor: '#6A0DAD', 
              color: '#fff', 
              padding: { xs: '10px 20px', md: '10px 30px' }, // Adjust padding for responsiveness
              fontWeight: 'bold', 
              fontSize: { xs: '0.9rem', md: '1rem' }, 
              '&:hover': {
                backgroundColor: '#5C0BAC', // Slightly darker shade on hover
              },
            }} 
          >
            GET IN TOUCH!
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
