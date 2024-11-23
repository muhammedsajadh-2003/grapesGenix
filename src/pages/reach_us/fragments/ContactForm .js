import React from 'react';
import { Box, TextField, Button, Typography, Checkbox, Link, IconButton, Grid } from '@mui/material';
import { Facebook, LinkedIn, Twitter, Instagram, WhatsApp, YouTube } from '@mui/icons-material';

const ContactForm = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5, px: { xs: 2, md: 5 } }}> {/* Light purple background */}
      {/* Contact Info and Form */}
      <Grid container spacing={5} sx={{ width: '100%', mb: 5 }}>
        {/* Left: Contact Information */}
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#6A0DAD' }}> {/* Dark purple text */}
              Ready to Begin Your Grapes Genix?
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: '#6A0DAD' }}> {/* Dark purple text */}
              <strong>Grapes Genix for Skill Development & Research</strong>
              <br />
              next to Nirmala Matha Public School, East Fort, Kizhakkumpattukara, Thrissur, Kerala 680006
              <br />
              <strong>Phone & WhatsApp:</strong> +91 471 2737 860
              <br />
              <strong>Mobile:</strong> +91 09744112113
              <br />
              <strong>Email:</strong> contact@orisysacademy.com
            </Typography>
            {/* Social Media Icons */}
            <Box sx={{ mt: 3 }}>
              <IconButton href="https://www.facebook.com" target="_blank" aria-label="Facebook" sx={{ color: 'grey' }}> {/* Grey icons */}
                <Facebook />
              </IconButton>
              <IconButton href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" sx={{ color: 'grey' }}> {/* Grey icons */}
                <LinkedIn />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter" sx={{ color: 'grey' }}> {/* Grey icons */}
                <Twitter />
              </IconButton>
              <IconButton href="https://www.instagram.com" target="_blank" aria-label="Instagram" sx={{ color: 'grey' }}> {/* Grey icons */}
                <Instagram />
              </IconButton>
              <IconButton href="https://wa.me" target="_blank" aria-label="WhatsApp" sx={{ color: 'grey' }}> {/* Grey icons */}
                <WhatsApp />
              </IconButton>
              <IconButton href="https://www.youtube.com" target="_blank" aria-label="YouTube" sx={{ color: 'grey' }}> {/* Grey icons */}
                <YouTube />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Right: Form Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2, backgroundColor: '#fff', borderRadius: '8px' }}>
            <TextField fullWidth label="Your name" variant="outlined" margin="normal" />
            <TextField fullWidth label="Email address" variant="outlined" margin="normal" />
            <TextField fullWidth label="Mobile number" variant="outlined" margin="normal" />
            <TextField fullWidth label="Subject" variant="outlined" margin="normal" />
            <TextField fullWidth label="Message" multiline rows={4} variant="outlined" margin="normal" />
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Checkbox />
              <Typography variant="body2">
                I accept the{' '}
                <Link href="#" underline="always" sx={{ color: '#6A0DAD' }}>Terms & Conditions</Link> and{' '}
                <Link href="#" underline="always" sx={{ color: '#6A0DAD' }}>Terms of Use</Link>
              </Typography>
            </Box>
            <Button 
              variant="contained" 
              color="success" 
              sx={{
                mt: 2, 
                fontWeight: 'bold',
                textTransform: 'none',
                backgroundColor: '#6A0DAD',  // Dark purple button
                '&:hover': {
                  backgroundColor: '#5A0C9A'  // Darker purple on hover
                }
              }}>
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Google Maps Embed */}
      <Box sx={{ width: '100%', maxWidth: '1200px', height: '600px', mt: 5, mb: 10 }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.6820213049997!2d76.2173886!3d10.5153471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d226b59fd33%3A0x1224e05e7a3e83c9!2sNirmala%20Matha%20Public%20School!5e0!3m2!1sen!2sin!4v1695574098140!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  />
</Box>


    </Box>
  );
};

export default ContactForm;
