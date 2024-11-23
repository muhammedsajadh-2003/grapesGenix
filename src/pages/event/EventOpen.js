import React from 'react'
import { Grid, Typography } from '@mui/material'
import Navbar from '../home/fragments/Navbar'
import EventDetail from './fragments/EventDetail '
import Footer from '../home/fragments/Footer'

function EventOpen() {
  return (
    <>
    <Grid container>
    <Grid item xs={12} md={12}>
        <Navbar/>
        </Grid>
    </Grid>

    <Grid container sx={{ textAlign: 'right', bgcolor: '#7A1CAC' }}> {/* Purple background color */}
        <Grid item xs={12} sx={{pr:'10%'}} >
          <Typography sx={{ mt: 7, color: 'white' }} variant="h4" fontWeight="bold" fontFamily='sans-serif'>
          Will ChatGPT take away tech jobs?
          </Typography>
          <Typography sx={{ mt: 1, mb: 7, color: '#CDC1FF' }} variant="subtitle2">
          ⏰ 09/03/2023 4:00 pm - 09/03/2023 6:00 pm
          </Typography>
        </Grid>
      </Grid>

      <EventDetail/>

      <Footer/>
    
    
    </>
  )
}

export default EventOpen