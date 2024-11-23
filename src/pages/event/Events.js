import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Checkbox, Button, FormControlLabel, Link } from '@mui/material'; // Import Material-UI components
import Navbar from '../home/fragments/Navbar';
import Footer from '../home/fragments/Footer';
import EventList from './fragments/EventList';

function Events() {
  return (
    <>
    <Grid container sx={{ mb: '2%' }}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
      </Grid>

      {/* Title and Breadcrumb */}
      <Grid container sx={{ textAlign: 'center', bgcolor: '#7A1CAC' }}> {/* Purple background color */}
        <Grid item xs={12}>
          <Typography sx={{ mt: 7, color: 'white' }} variant="h4" fontWeight="bold" fontFamily='sans-serif'>
          Events
          </Typography>
          <Typography sx={{ mt: 1, mb: 7, color: 'lightgreen' }} variant="subtitle2">
            Home <span style={{ color: 'white' }}>/ Events</span>
          </Typography>
        </Grid>
      </Grid>
      <EventList/>
      <Footer/>
    </>
  )
}

export default Events