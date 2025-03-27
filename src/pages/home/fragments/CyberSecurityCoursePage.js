import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, Container, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CyberSecurityCoursePage = () => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const navigate = useNavigate();

  const handleExploreClick = (route) => {
    navigate(route);
  };

  const heroSections = [
    {
      image: require('../../../team_images/Gnerated_image_1.jpg'),
      title: 'Mastering Cyber Security and Ethical Hacking',
      description: 'Become a cyber security and ethical hacking expert. Learn the latest techniques to protect digital assets.',
      buttonText: 'Explore The Course',
      buttonRoute: '/explore',
      textPosition: 'right',
    },
    {
      image: require('../../../team_images/Firefly_20240928160515.jpg'),
      title: 'Full-Stack Developer Course for Working Professionals',
      description: 'Discover courses that offer scholarships to help you advance your career in cyber security.',
      buttonText: 'Apply Now',
      buttonRoute: '/',
      textPosition: 'left',
    },
    {
      image: require('../../../team_images/Firefly_20240928161200.jpg'),
      title: 'Build Powerful AI Apps with Python',
      description: 'Get hands-on experience by working on real-world cyber security projects and internships.',
      buttonText: 'Explore The Course',
      buttonRoute: '/projects',
      textPosition: 'left',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const courses = [
    { title: 'Our Courses', description: 'Explore our online courses', bgColor: '#9575CD', route: '/project2' },
    { title: 'Scholarship', description: 'Courses offering scholarship', bgColor: '#512DA8', route: '/' },
    { title: 'Projects or Internship', description: 'Do your academic projects', bgColor: '#9575CD', route: '/projects&internships' },
    { title: 'Certification Courses', description: 'Join for certification courses', bgColor: '#512DA8', route: '/project2' },
  ];

  return (
    <div>
      {/* Hero Section Carousel */}
      <Slider {...sliderSettings}>
        {heroSections.map((section, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${section.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              width: '100vw',
              height: { xs: '100vh', sm: '70vh' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: section.textPosition === 'right' ? 'flex-end' : 'flex-start',
              textAlign: section.textPosition === 'right' ? 'right' : 'left',
              padding: { xs: 3, md: 6 },
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Box
              sx={{
                maxWidth: '60%',
                textAlign: section.textPosition,
                padding: section.textPosition === 'right' ? { md: 6 } : { md: 0 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  lineHeight: 1.2,
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                }}
              >
                {section.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.5,
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
                }}
              >
                {section.description}
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleExploreClick(section.buttonRoute)}
                sx={{
                  mt: 3,
                  backgroundColor: '#D1C4E9',
                  color: 'black',
                  fontWeight: 'bold',
                  padding: { xs: '8px 16px', md: '12px 24px' },
                  '&:hover': {
                    backgroundColor: '#9575CD',
                  },
                }}
              >
                {section.buttonText}
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>

      {/* Courses Section */}
      <Container
        sx={{
          position: 'relative',
          top: { xs: '-20px', sm: '-50px' },
          zIndex: 10,
          textAlign: 'center',
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  backgroundColor: course.bgColor,
                  color: 'white',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  cursor: 'pointer',
                }}
                onClick={() => navigate(course.route)}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {course.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CyberSecurityCoursePage;
