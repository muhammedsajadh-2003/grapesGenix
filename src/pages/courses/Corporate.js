import React from 'react'
import { Container, Grid, Typography, Box } from '@mui/material'
import Navbar from '../home/fragments/Navbar'
import ProjectsPage from '../projects_internships/fragments/ProjectsPage'
import Footer from '../home/fragments/Footer'

function Corporate() {
  return (
    <>
     <Grid container>
                <Grid item xs={12} md={12}>
                    <Navbar />
                </Grid>
            </Grid>
            <Container sx={{ color: '#6A0DAD' }} > {/* Purple grapes color for text */}
                <Typography variant='h5' sx={{ mt: 3 }} fontWeight='bold' >Corporate Training</Typography>
                <ProjectsPage />
            </Container>
            <Footer/>
    </>
  )
}

export default Corporate