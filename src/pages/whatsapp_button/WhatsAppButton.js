import React from 'react';
import { Button, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import the WhatsApp icon from Material UI

const WhatsAppButton = () => {
  const handleClick = () => {
    // Open WhatsApp chat link (Add your WhatsApp number below)
    window.open('https://wa.me/09744112113', '_blank');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 50, // Adjust to position slightly above the bottom
        right: 50,  // Adjust to position slightly away from the right edge
        zIndex: 1000, // Ensure it is on top of other components
      }}
    >
      <Button
        variant="contained"
        startIcon={<WhatsAppIcon />}
        onClick={handleClick}
        sx={{
          backgroundColor: '#25D366', // WhatsApp green color
          color: 'white',
          padding: '10px 20px',
          borderRadius: '50px', // Rounded button
          fontSize: '16px',
          fontWeight: 'bold',
          textTransform: 'none', // Keep text as "Message Us" without uppercase
          '&:hover': {
            backgroundColor: '#22c35e', // Slightly darker on hover
          },
        }}
      >
        Message Us
      </Button>
    </Box>
  );
};

export default WhatsAppButton;
