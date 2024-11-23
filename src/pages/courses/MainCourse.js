import React from 'react'
import Navbar from '../home/fragments/Navbar'
import CourseGrid from './fragments/CourseGrid'
import { Typography } from '@mui/material'

function MainCourse() {
  return (
    <>
    <Navbar/>
    <Typography sx={{mt:5,mb:5}} textAlign='center' variant='h4' fontWeight='bold' >Courses We provide</Typography>
    <CourseGrid/>
    </>
  )
}

export default MainCourse