import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // For the clock icon
import { styled, keyframes } from '@mui/system';
import { useNavigate } from 'react-router-dom';

// Custom styles for the image
const StyledImage = styled('img')({
  width: '90%',
  height: '90%',
  marginBottom: '15px',
  objectFit: 'cover', // Ensures image maintains aspect ratio
});

// Keyframes for the hover animation
const hoverEffect = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  100% {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CourseCard = ({ title, duration, image, buttonText }) => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/apply');
  };

  return (
    <Card
      sx={{
        maxWidth: 320, // Increased width for better visual balance
        height: '500px',
        borderRadius: 4,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        padding: 2,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          animation: `${hoverEffect} 0.3s forwards`,
        },
        // Responsive adjustments
        '@media (max-width: 600px)': {
          maxWidth: '100%', // Full width on mobile
          height: 'auto', // Auto height to maintain layout
        },
        backgroundColor: '#f5f5f5', // Light gray background
        color: '#6A0DAD', // Purple grapes color for text
      }}
    >
      {/* Course Image */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50%' }}>
        <StyledImage src={image} alt={title} />
      </Box>

      <CardContent>
        {/* Course Title */}
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 1 }}
        >
          {title}
        </Typography>

        {/* Course Duration */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            mt: 1, 
            color: '#6A0DAD' // Consistent theme color 
          }}
        >
          <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
          <Typography variant="body2">{duration}</Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: 'center', marginTop: 2 }}>
        <Button
          variant="outlined"
          size="small"
          onClick={handleApplyClick}
          sx={{
            color: '#6A0DAD',
            borderColor: '#6A0DAD',
            padding: '8px 20px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            '&:hover': {
              backgroundColor: '#6A0DAD',
              color: 'white',
              transform: 'scale(1.05)',
            },
          }}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
