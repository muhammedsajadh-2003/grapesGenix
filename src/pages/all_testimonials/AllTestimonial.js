import React from 'react'
import Navbar from '../home/fragments/Navbar'
import { Container, Typography } from '@mui/material'

import Footer from '../home/fragments/Footer'
import TestimonialList from './fragments/TestimonialList '

function AllTestimonial() {
  return (
    <>
    <Navbar/>
    <Container>
    <Typography sx={{mt:5}} variant='h5' fontWeight='bold' >Testimonials</Typography>
    <Typography sx={{mb:5}} >Home / Testimonials</Typography>
    <TestimonialList/>  
    </Container>
    <Footer/>
    </>
  )
}

export default AllTestimonial