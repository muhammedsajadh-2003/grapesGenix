// EventDetail.js
import React from 'react';
import { Box, Card, CardContent, Typography, Divider, IconButton, Stack, createTheme, ThemeProvider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: purple[300],
    },
  },
});

const EventDetail = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3, gap: 3, flexWrap: 'wrap' }}>
        {/* Left Card */}
        <Box sx={{ maxWidth: 300, p: 2, borderRadius: 2, bgcolor: 'grey.200' }}>
          {/* Location Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">Location</Typography>
          </Box>
          <Typography variant="body1">Online</Typography>
          <Typography variant="body2" color="text.secondary">Orisys Academy</Typography>
          <Divider sx={{ my: 2 }} />

          {/* Organized By Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PersonIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">Organized By</Typography>
          </Box>
          <Typography variant="body1" sx={{ color: 'green', fontWeight: 'bold' }}>
            Orisys Academy for Skill Development & Research
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* Share Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ShareIcon sx={{ color: 'primary.main' }} />
            <Typography variant="h6" fontWeight="bold">Share</Typography>
          </Box>
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            <IconButton aria-label="Facebook" sx={{ color: 'primary.main' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" sx={{ color: 'primary.main' }}>
              <TwitterIcon />
            </IconButton>
          </Stack>
        </Box>

        {/* Right Content */}
        <Box sx={{ maxWidth: 600, textAlign: 'left' }}>
          <Typography variant="body1" paragraph>
            Join us for an informative and thought-provoking webinar titled “Will ChatGPT take away tech jobs?” hosted by Orisys Academy.
          </Typography>
          <Typography variant="body1" paragraph>
            With the advent of AI and machine learning, there has been a growing concern about the impact of these technologies on the job market, especially in the tech industry. In this webinar, Dr. Sarith Kumar, a distinguished professor from the Indian Institute of Management, will share his insights and perspectives on the potential impact of ChatGPT on the tech job market.
          </Typography>
          <Typography variant="body1" paragraph>
            ChatGPT is an AI language model that can generate human-like responses to text-based questions. It has the potential to revolutionize various industries, including customer service, content creation, and more. However, some have raised concerns that ChatGPT could also lead to the automation of certain tech jobs, causing job loss for many.
          </Typography>
          <Typography variant="body1" paragraph>
            In this webinar, Dr. Sarith Kumar will explore the current state of the tech job market, the potential impact of ChatGPT on various industries, and how organizations can navigate this changing landscape. He will also provide valuable insights and strategies for tech professionals to future-proof their careers in the age of AI.
          </Typography>
          <Typography variant="h6" color="error" fontWeight="bold" sx={{ mt: 2 }}>
            Registration closed!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Meeting links have been sent to registered email addresses.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default EventDetail;
