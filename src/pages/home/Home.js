import React from 'react';
import { Box, Button, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import Navbar from './fragments/Navbar';
import CyberSecurityCoursePage from './fragments/CyberSecurityCoursePage';
import CourseCard from './fragments/CourseCard';
import ProjectCard from './fragments/ProjectCard';
import EventTimeline from './fragments/EventTimeline';
import BlogComponent from './fragments/BlogComponent';
import TestimonialComponent from './fragments/TestimonialComponent';
import ContactSection from './fragments/ContactSection';
import CompanySection from './fragments/CompanySection';
import Footer from './fragments/Footer';
import { useNavigate } from 'react-router-dom';
import WhatsAppButton from '../whatsapp_button/WhatsAppButton';

function Home() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const navigate = useNavigate();

  const handleAboutUsClick = () => {
    navigate('/about-us');
  };
  const handleProjectClick = () => {
    navigate('/projects&internships');
  };
  const handleProject2Click = () => {
    navigate('/project2');
  };

  const courses = [
    // your course objects remain the same
  ];

  return (
    <>
      <Box sx={{ overflowX: 'hidden' }}>
        {/* Wrap the entire layout in a Box to prevent overflow */}
        <Grid container>
          <Grid item xs={12}>
           <WhatsAppButton />
          </Grid>
        </Grid>
      
        <Grid container>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <CyberSecurityCoursePage />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Typography 
              variant='h4' 
              fontWeight='bold' 
              sx={{ mt: { xs: 10, md: 15 }, textAlign: 'center', fontSize: { xs: '1.5rem', md: '2rem' } }}
            >
              Schooling doesn't assure employment but skill does
            </Typography>
            <Typography 
              variant='h5' 
              sx={{ textAlign: 'center', mt: 3, fontSize: { xs: '1rem', md: '1.5rem' } }}
            >
              HR Heads from corporates say that students have the necessary theoretical skills but when it comes<br></br> 
              to the practical part, they lack big time.
            </Typography>
            <Box 
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 5, pb: 10 }}
            >
              <Button 
                variant='contained' 
                sx={{ bgcolor: '#9575CD', color: 'white' }} // Medium Purple
                onClick={handleAboutUsClick}
              >
                Read More About Us
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Courses Section */}
        <Box sx={{ padding: 4 }}>
          <Grid container spacing={3} justifyContent="center">
            {courses.map((course, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <CourseCard
                  title={course.title}
                  duration={course.duration}
                  image={course.image}
                  buttonText={course.buttonText}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box 
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 5, pb: 7 }}
        >
          <Button variant='contained' sx={{ bgcolor: '#9575CD', color: 'white' }}> {/* Medium Purple */}
            View all courses
          </Button>
        </Box>
        <hr />

        {/* Projects Section */}
        <Box sx={{ mt: 7 }}>
          <Typography 
            variant='h4' 
            fontWeight='bold' 
            textAlign='center'
            sx={{ fontSize: { xs: '1.8rem', md: '2rem' } }}
          >
            Do you wish to apply for Academic Projects / Internship?
          </Typography>
          <Typography 
            variant='h6' 
            textAlign='center' 
            sx={{ mt: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            Grapes Genix IT Solutions is dedicated to fostering innovation and developing skilled professionals for the tech industry. <br></br> 
            We empower aspiring individuals to thrive in their careers by offering top-notch training and resources. Please join us <br></br> 
            if you are committed to making a significant impact in the tech world.
          </Typography>
        </Box>

        <Box 
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 3, mb: 10 }}
        >
          <Button 
            variant="contained" 
            sx={{ marginRight: 1, bgcolor: '#9575CD', color: 'white' }} // Medium Purple
            onClick={handleProjectClick}
          >
            Apply Now
          </Button>
          <Button 
            variant="contained" 
            sx={{ bgcolor: '#9575CD', color: 'white' }} // Medium Purple
            onClick={handleProject2Click}
          >
            Projects
          </Button>
        </Box>

        {/* Additional Sections */}
        <Grid container>
          <Grid item xs={12}>
            <ProjectCard />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <EventTimeline />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <BlogComponent />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <TestimonialComponent />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <ContactSection />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <CompanySection />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
