import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Checkbox, Button, FormControlLabel, Link } from '@mui/material'; // Import Material-UI components
import Navbar from '../home/fragments/Navbar';
import Footer from '../home/fragments/Footer';

function ProjectsAndInternship() {

  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    mobile: '',
    college: '',
    message: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted', formValues);
  };

  return (
    <React.Fragment>
      {/* Navbar section */}
      <Grid container sx={{ mb: '2%' }}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
      </Grid>

      {/* Title and Breadcrumb */}
      <Grid container sx={{ textAlign: 'center', bgcolor: '#7A1CAC' }}> {/* Purple background color */}
        <Grid item xs={12}>
          <Typography sx={{ mt: 7, color: 'white' }} variant="h4" fontWeight="bold" fontFamily='sans-serif'>
            Projects & Internship
          </Typography>
          <Typography sx={{ mt: 1, mb: 7, color: 'lightgreen' }} variant="subtitle2">
            Home <span style={{ color: 'white' }}>/ Projects & Internship</span>
          </Typography>
        </Grid>
      </Grid>

      <Container>
        {/* Introductory Text */}
        <Typography sx={{ mt: 2, color: '#6A0DAD' }}> {/* Purple text color */}
          Projects & Internships at Grapes Genix offer an Internship Programme at its parent organization, 
          With over a decade of experience in IT consulting and product development, working closely on existing and ongoing projects will be a milestone in your IT career.
        </Typography>
        <Typography sx={{ mt: 2, color: '#6A0DAD' }}> {/* Purple text color */}
          Undoubtedly, participating in IT projects is crucial for IT candidates to gain practical experience and enhance their skills. 
          By working on real-world projects, they can apply theoretical knowledge, develop problem-solving abilities, and familiarize themselves with the latest technologies. 
          Furthermore, engaging in a team setting fosters collaboration, communication, and adaptability, which are essential for a successful IT career. 
          In addition, IT projects enable candidates to build a robust portfolio, showcasing their expertise and making them more attractive to potential employers. 
          Ultimately, taking part in IT projects prepares candidates for the competitive job market, significantly increasing their chances of securing rewarding and fulfilling employment.
        </Typography>
        <Typography sx={{ mt: 2, color: '#6A0DAD' }}> {/* Purple text color */}
          Our Projects & Internships program aims to develop your technical skills and prepare you for employment in reputable IT companies both domestically and internationally. 
          You will learn project handling skills, Git repository handling, front-end and back-end coding, API operations, debugging methods, and database operations during your internship.
        </Typography>
        <Typography sx={{ mt: 2, color: '#6A0DAD' }}> {/* Purple text color */}
          This initiative’s primary goal is to help successful candidates enhance their analytical and technical skills in various environments.
        </Typography>

        {/* Eligibility Section */}
        <Typography sx={{ mt: 3, color: '#6A0DAD' }} variant='h4' fontWeight='bold'>Who can apply?</Typography> {/* Purple text color */}
        <Typography sx={{ mt: 2, color: '#6A0DAD' }}> {/* Purple text color */}
          We accept internship applications on an ongoing basis.
        </Typography>
        <Typography sx={{ mt: 2, color: '#6A0DAD' }}> {/* Purple text color */}
          Eligible applicants include graduates and postgraduates in Computer Science, IT, Computer Applications, or related fields. 
          Candidates with a career break may also apply, but selection depends on skill assessment.
        </Typography>

        {/* Application Notice Section */}
        <Typography sx={{ mt: 3, color: '#6A0DAD' }} variant='h4' fontWeight='bold'>To the attention of Applicants:</Typography> {/* Purple text color */}
        <Typography sx={{ mt: 2, color: '#6A0DAD' }}> {/* Purple text color */}
          Please note: Due to the high volume of applications, we cannot provide individual feedback. We will try our best to notify you individually in most cases. 
          We will only contact shortlisted candidates for a selection interview. If you do not hear from <span style={{color:'blue'}}>our office</span> within two months of applying, 
          please assume your application was unsuccessful. You may reapply, highlighting any changes in circumstances during the waiting period.
        </Typography>
        <Typography sx={{ mt: 2, color: '#6A0DAD' }}> {/* Purple text color */}
          We look forward to seeing you <span style={{color:'blue'}}>OnBoard</span> with us!
        </Typography>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} sx={{ maxWidth: '100%', margin: 'auto' }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formValues.fullName}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#6A0DAD' }, '&:hover fieldset': { borderColor: '#6A0DAD' }, '&.Mui-focused fieldset': { borderColor: '#6A0DAD' } } }} // Purple border color
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#6A0DAD' }, '&:hover fieldset': { borderColor: '#6A0DAD' }, '&.Mui-focused fieldset': { borderColor: '#6A0DAD' } } }} // Purple border color
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile"
                value={formValues.mobile}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#6A0DAD' }, '&:hover fieldset': { borderColor: '#6A0DAD' }, '&.Mui-focused fieldset': { borderColor: '#6A0DAD' } } }} // Purple border color
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name of your college"
                name="college"
                value={formValues.college}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#6A0DAD' }, '&:hover fieldset': { borderColor: '#6A0DAD' }, '&.Mui-focused fieldset': { borderColor: '#6A0DAD' } } }} // Purple border color
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={4}
                required
                sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#6A0DAD' }, '&:hover fieldset': { borderColor: '#6A0DAD' }, '&.Mui-focused fieldset': { borderColor: '#6A0DAD' } } }} // Purple border color
              />
            </Grid>

            {/* Terms & Conditions Section */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="termsAccepted"
                    checked={formValues.termsAccepted}
                    onChange={handleChange}
                    sx={{ color: '#6A0DAD' }} // Purple checkbox color
                  />
                }
                label={
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', color: '#6A0DAD' }}> {/* Purple text color */}
                    I accept the{' '}
                    <Link href="#" color="#6A0DAD" sx={{ ml: 0.5, mr: 0.5 }}>
                      Terms & Conditions
                    </Link>
                    and{' '}
                    <Link href="#" color="#6A0DAD" sx={{ ml: 0.5 }}>
                      Terms of Use
                    </Link>
                  </Typography>
                }
                sx={{ alignItems: 'center' }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#6A0DAD', color: 'white', fontWeight: 'bold' }} // Purple background color
                // Make the button responsive
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>

      {/* Footer Section */}
      <Grid container>
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ProjectsAndInternship;
