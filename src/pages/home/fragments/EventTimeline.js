import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A0DAD', // Purple grapes color
    },
    secondary: {
      main: '#D1C4E9', // Light purple color
    },
  },
});

const events = [
  {
    date: '09',
    monthYear: 'Sep 2023',
    title: 'Will ChatGPT take away tech jobs?',
    description:
      'Join Orisys Academy for an insightful webinar on “Will ChatGPT take away tech jobs?” with Dr. Sarith Kumar, IIM Professor. Learn about the impact of ChatGPT on the tech job market, and how to future-proof your career in the age of AI.',
    imageUrl: 'https://orisysacademy.com/wp-content/uploads/2023/03/96CF2EF7-3F53-42EB-8605-63CFC0A1E6BA-500x350.jpeg',
    eventTime: '09/03/2023 4:00 pm to 09/03/2023 6:00 pm',
    eventLocation: 'Online',
    isPastEvent: true,
  },
  {
    date: '10',
    monthYear: 'Oct 2020',
    title: 'Develop your own mobile application',
    description:
      'JCI Trivandrum Smart City in association with Liz Intelligent Solutions Pvt. Ltd. & Orisys Academy of Research and Development is inviting you to a free online workshop on DEVELOP YOUR OWN MOBILE APPLICATION.',
    imageUrl: 'https://orisysacademy.com/wp-content/uploads/2020/10/1x2XX-500x350.jpg',
    eventTime: '10/10/2020 7:00 pm to 10/10/2020 9:00 pm',
    eventLocation: 'Orisys Academy for Skill Development & Research',
    isPastEvent: true,
  },
];

const EventTimeline = () => {
  const navigate = useNavigate();

  const handleEventsClick = () => {
    navigate('/events');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#fff', p: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: { xs: 3, md: 5 }, mt: 2 }}
        >
          Events
        </Typography>
        {events.map((event, index) => (
          <Grid
            container
            key={index}
            spacing={2}
            sx={{ mb: { xs: 4, md: 6 }, position: 'relative' }}
          >
            {/* Date Section */}
            <Grid
              item
              xs={12}
              sm={2}
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  color: '#6A0DAD',
                  fontSize: { xs: '2.5rem', sm: '4rem' },
                }}
              >
                {event.date}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: '#666', marginTop: '-10px' }}
              >
                {event.monthYear}
              </Typography>
            </Grid>

            {/* Event Content */}
            <Grid
              item
              xs={12}
              sm={10}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  p: { xs: 1, sm: 2 },
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    flex: '0 0 auto',
                    maxWidth: { xs: '100%', sm: '280px' },
                    mb: { xs: 2, sm: 0 },
                  }}
                >
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                    }}
                  />
                </Box>
                <Box sx={{ p: { xs: 1, sm: 2 }, pl: { sm: 4 } }}>
                  {event.isPastEvent && (
                    <Typography
                      fontWeight="bold"
                      sx={{ color: 'red', px: 1, mb: 1 }}
                    >
                      Past Event
                    </Typography>
                  )}
                  <Typography
                    component="h5"
                    variant="h5"
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {event.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📅 {event.eventTime}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📍 {event.eventLocation}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        ))}

        {/* View All Events Button */}
        <Box sx={{ textAlign: 'center', mt: { xs: 2, md: 4 } }}>
          <Button
            variant="contained"
            onClick={handleEventsClick}
            sx={{ bgcolor: theme.palette.primary.main, color: 'white' }}
          >
            View All Events
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default EventTimeline;
