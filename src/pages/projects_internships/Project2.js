import { Container, Grid, Typography, Box } from '@mui/material'
import React from 'react'
import Navbar from '../home/fragments/Navbar'
import ProjectsPage from './fragments/ProjectsPage'
import Footer from '../home/fragments/Footer'
import WhatsAppButton from '../whatsapp_button/WhatsAppButton'

function Project2() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <WhatsAppButton/>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Navbar />
        </Grid>
      </Grid>
      <Box >
        <Container sx={{ mt: 3 }}>
          <Typography variant='h5' fontWeight='bold' sx={{ color: '#6A0DAD' }}> {/* Purple grapes color for text */}
            Academic projects for students - Innovative project Ideas
          </Typography>
          <Typography sx={{ mt: 1, mb: 7, color: '#6A0DAD' }} variant="subtitle2"> {/* Purple grapes color for text */}
            Home <span style={{ color: 'black' }}>/ Projects & Internship</span>
          </Typography>
          <ProjectsPage />
        </Container>
      </Box>
      <Grid>
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  )
}

export default Project2