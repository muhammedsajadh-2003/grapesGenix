import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Navbar from '../home/fragments/Navbar'
import ProjectsPage from '../projects_internships/fragments/ProjectsPage'
import Footer from '../home/fragments/Footer'

function Regular() {
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <Navbar />
                </Grid>
            </Grid>
            <Container sx={{ color: '#6A0DAD' }} > {/* Purple grapes color for text */} {/* Added purple color theme */}
                <Typography variant='h5' sx={{ mt: 3 }} fontWeight='bold' >Regular Courses</Typography>
                <Typography sx={{ mt: 2, mb: 4 }} >Our offline course offers an immersive and interactive learning experience that allows you to fully engage with the course material and connect with your instructors and peers. You’ll have access to state-of-the-art facilities, expert instructors, and hands-on training that will help you develop the skills you need to succeed. With in-person instruction, you’ll receive immediate feedback and guidance, and have the opportunity to ask questions and engage in lively discussions. Join us and discover the many benefits of offline learning, including the ability to network with like-minded professionals and develop long-lasting connections.</Typography>
                <ProjectsPage />
            </Container>
            <Footer/>
        </>
    )
}

export default Regular