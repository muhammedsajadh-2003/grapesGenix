import React from 'react';
import { Container, Grid, Typography, Box, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handlePrivacyPolicyClick = () => {
    navigate('/privacypolicy');
  };

  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        py: { xs: 4, sm: 6 },
        mt: { xs: 3, sm: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Menu Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Menu
            </Typography>
            <Box>
              {['What We Do', 'Faculties', 'Resources', 'Reach Us'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  underline="hover"
                  display="block"
                  sx={{ mb: 1 }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Activities Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Activities
            </Typography>
            <Box>
              {[
                'Blogs',
                'Events',
                'News',
                'Projects & Internship',
                'Placements',
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  underline="hover"
                  display="block"
                  sx={{ mb: 1 }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Legal Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Legal
            </Typography>
            <Box>
              {[
                { text: 'Privacy Policy', onClick: handlePrivacyPolicyClick },
                { text: 'Acceptable Use Policy' },
                { text: 'Cookie Policy' },
                { text: 'Disclaimer' },
                { text: 'Refund Policy' },
                { text: 'Terms & Conditions' },
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  color="inherit"
                  underline="hover"
                  display="block"
                  sx={{ mb: 1 }}
                  onClick={item.onClick || undefined}
                >
                  {item.text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Connect Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Connect
            </Typography>
            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }} mt={1}>
              {[
                { icon: <FacebookIcon />, href: 'https://facebook.com' },
                { icon: <TwitterIcon />, href: 'https://twitter.com' },
                { icon: <InstagramIcon />, href: 'https://instagram.com' },
                { icon: <YouTubeIcon />, href: 'https://youtube.com' },
                { icon: <LinkedInIcon />, href: 'https://linkedin.com' },
              ].map((item, index) => (
                <IconButton
                  key={index}
                  color="inherit"
                  href={item.href}
                  target="_blank"
                  sx={{ mx: 0.5 }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box textAlign="center" pt={3} mt={4} borderTop="1px solid #444">
          <Typography variant="body2" color="inherit">
            © 2024 Grapes Genix. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
