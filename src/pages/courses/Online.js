import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../home/fragments/Navbar'
import ProjectsPage from '../projects_internships/fragments/ProjectsPage'
import Footer from '../home/fragments/Footer'

function Online() {
  return (
    <>
    <Grid container>
        <Grid item xs={12} md={12}>
            <Navbar/>
        </Grid>
    </Grid>
    <Container sx={{ color: '#6A0DAD' }} > {/* Purple grapes color for text */}
        <Typography variant='h5' sx={{mt:3}} fontWeight='bold' >Online Courses</Typography>
        <Typography sx={{mt:2,mb:4}} >Our online course provides a convenient and flexible way to learn new skills and advance your career from anywhere in the world. You’ll have access to engaging and interactive course materials, expert instructors, and a supportive online community of learners. With our user-friendly platform, you can learn at your own pace and on your own schedule, making it easy to balance your education with other commitments. Join us and discover the many benefits of online learning, including the ability to advance your career, gain new knowledge, and expand your network.</Typography>
    
    <ProjectsPage/>
    
    </Container>
    <Footer/>
    </>
  )
}

export default Online