import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Navbar from '../home/fragments/Navbar'
import ProjectsPage from '../projects_internships/fragments/ProjectsPage'
import Footer from '../home/fragments/Footer'

function Scholorship() {
  return (
    <>
    <Grid container>
                <Grid item xs={12} md={12}>
                    <Navbar />
                </Grid>
            </Grid>
            {/* <Container>
                <Typography variant='h5' sx={{ mt: 3 }} fontWeight='bold' >Scholorship Courses</Typography>
                <Typography sx={{ mt: 2, mb: 4 }} >Our hybrid course offers the best of both worlds – a flexible learning experience that combines the convenience of online education with the engagement of in-person classes. You’ll have the opportunity to interact with both your peers and instructors during in-person sessions, while also being able to learn at your own pace and on your own schedule through our online platform. With our hybrid course, you can balance your personal and professional commitments while still achieving your educational goals. Join us and discover the benefits of a hybrid learning experience.</Typography>
                <ProjectsPage />
            </Container> */}
            <Footer/>
    </>
  )
}

export default Scholorship