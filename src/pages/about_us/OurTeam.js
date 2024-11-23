import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Navbar from '../home/fragments/Navbar'
import ProjectsPage from '../projects_internships/fragments/ProjectsPage'
import Footer from '../home/fragments/Footer'
import ProfileGrid from './fragments/ProfileCard'

function OurTeam() {
  return (
    <>
    <Grid container>
                <Grid item xs={12} md={12}>
                    <Navbar />
                </Grid>
            </Grid>
            <Container sx={{ color: '#6A0DAD' }} > {/* Purple grapes color for text */} {/* Added purple color theme */}
                <Typography variant='h5' sx={{ mt: 3 }} fontWeight='bold' >Meet Our Team</Typography>
                <Typography variant='h6' sx={{ mt: 1 }} fontWeight='bold' >Tutors who inspire and Mentors you’ll admire</Typography>
                <Typography sx={{ mt: 2, mb: 1 }} >In our team all are leaders in their fields.
                Groundbreakers and creatives, questioners of the status quo, and together, they form an extraordinary teaching and learning community at the heart of a world-class Skill Training Centre.</Typography>
                <Typography sx={{mb: 4 }} >The diversity of our Management Team adds value that exceeds academic excellence. Their multinational experiences, cultural sensitivities and social presence help us create a learning environment that is rich, friendly, supportive and conducive of growth.</Typography>
                <ProfileGrid/>
            </Container>
            <Footer/>
    </>
  )
}

export default OurTeam