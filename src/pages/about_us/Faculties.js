import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Navbar from '../home/fragments/Navbar'
import ProjectsPage from '../projects_internships/fragments/ProjectsPage'
import Footer from '../home/fragments/Footer'
import ProfileGrid from './fragments/ProfileCard'
import FacultiesGrid from './fragments/FacultiesCard'

function Faculties() {
  return (
    <>
    <Grid container>
                <Grid item xs={12} md={12}>
                    <Navbar />
                </Grid>
            </Grid>
            <Container sx={{ color: '#6A0DAD' }} > {/* Purple grapes color for text */} {/* Added purple color theme */}
                <Typography variant='h4' sx={{ mt: 3 }} fontWeight='bold' >Faculties</Typography>
                
                <Typography sx={{ mt: 2, mb: 1 }} >Faculty are the heart of any institution of higher learning, and that is particularly true at the Grapes Genix. Without any shadow of doubt, it is the members of the teaching community who impart progress into the students. We are proud of the distinguished tutors, language resources, and researchers who make up our faculty and of the excellence and commitment to their students they demonstrate in the classroom, workshops, library, laboratories, and most importantly in their role as mentors and advisors.</Typography>
               
                <FacultiesGrid/>
            </Container>
            <Footer/>
    </>
  )
}

export default Faculties