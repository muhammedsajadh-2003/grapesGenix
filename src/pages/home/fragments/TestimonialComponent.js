import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Button, Grid, Slide } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    name: 'Varsha S',
    designation: 'Associate Software Engineer',
    company: 'EY',
    avatarUrl: 'https://orisysacademy.com/wp-content/uploads/2022/01/Varsha-S-300x300.jpeg',
    testimonial: `Orisys Academy is a good platform to gain technical knowledge and to improve our soft skills. They provide a friendly environment to study and also the trainers and staff are very supportive. The opportunity which I got to undergo training here is one of the greatest milestones in my life.`,
  },
  {
    name: 'Joish Joshy',
    designation: 'Student',
    company: '',
    avatarUrl: 'https://orisysacademy.com/wp-content/uploads/2020/02/joish.jpg',
    testimonial: `A place to improve your skills far more than college. They give us more exposure and also they provide us with more than enough study materials. I’m very grateful to Orisys Academy.`,
  },
  {
    name: 'Ashish Babu',
    designation: 'Full Stack Developer',
    company: '',
    avatarUrl: 'https://orisysacademy.com/wp-content/uploads/2020/02/Ashish-babu-300x300.jpg',
    testimonial: `Orisys Academy is a well-developed training platform for all those who wish to improve their technical skills. I am one of the passouts @Orisys from a course named Junior Software Developer. All the trainers are well-educated with high skills and deep knowledge. I swear that their training will yield better results as we are getting right now, with placements in many highly reputed companies.`,
  },
  {
    name: 'Juna Mathew',
    designation: 'UI Developer',
    company: 'Phases',
    avatarUrl: 'https://orisysacademy.com/wp-content/uploads/2022/01/Juna-Mathew-300x300.jpeg',
    testimonial: `I have completed UI Developer training from Orisys Academy. It’s an excellent place with dedicated faculties. This training definitely helped me develop personal and professional skills. I am extremely thankful to Orisys Academy.`,
  },
  {
    name: 'Jincy Mariam John',
    designation: 'Full Stack Developer',
    company: '',
    avatarUrl: 'https://orisysacademy.com/wp-content/uploads/2020/02/Joncy.png',
    testimonial: `Orisys Academy played an important role in shaping, encouraging, and guiding my career. I am so grateful to say that Orisys was the best choice in my life because I could develop my soft skills, technical skills, and attitude through the 4-month training provided by them and thereby achieve my goal.`,
  },
];

const TestimonialComponent = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('left');
  const navigate = useNavigate();

  const handleTestimonialClick = () => {
    navigate('/testimonials');
  };

  const handleNext = () => {
    setSlideDirection('left');
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const { name, designation, company, avatarUrl, testimonial } = testimonials[currentTestimonialIndex];

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: { xs: 3, sm: 6 },
        px: { xs: 2, sm: 4 },
        backgroundColor: '#f3e5f5', // Light purple
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          mb: { xs: 2, sm: 3 },
          color: '#6A0DAD',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font size
        }}
      >
        Students Speak
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          mb: { xs: 3, sm: 5 },
          color: '#6A0DAD',
          fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
        }}
      >
        Voices of Achievement
      </Typography>

      <Slide in={true} direction={slideDirection} timeout={{ enter: 500, exit: 300 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Avatar
              src={avatarUrl}
              alt={name}
              sx={{
                width: { xs: 100, sm: 150, md: 200 },
                height: { xs: 100, sm: 150, md: 200 },
                mx: 'auto',
                mb: 2,
                border: '4px solid #6A0DAD', // Purple border
              }}
            />
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontStyle: 'italic',
                maxWidth: '700px',
                mx: 'auto',
                px: { xs: 2, sm: 4 },
                color: '#6A0DAD',
                fontSize: { xs: '1rem', sm: '1.125rem' },
              }}
            >
              {testimonial}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: '#6A0DAD',
                fontSize: { xs: '1rem', sm: '1.25rem' },
              }}
            >
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: '#6A0DAD', mb: 0.5 }}>
              {designation}
            </Typography>
            {company && (
              <Typography variant="body2" sx={{ color: '#6A0DAD' }}>
                {company}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Slide>

      <Button
        onClick={handleTestimonialClick}
        variant="contained"
        sx={{
          backgroundColor: '#6A0DAD',
          fontWeight: 'bold',
          mt: { xs: 5, sm: 8 },
          color: '#fff',
          px: { xs: 3, sm: 5 },
          py: { xs: 1, sm: 1.5 },
          fontSize: { xs: '0.875rem', sm: '1rem' },
        }}
      >
        View All Testimonials
      </Button>
    </Box>
  );
};

export default TestimonialComponent;
