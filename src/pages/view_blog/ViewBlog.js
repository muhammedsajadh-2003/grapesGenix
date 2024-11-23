import React from 'react'
import Navbar from '../home/fragments/Navbar'
import { Container, Typography } from '@mui/material'
import ArticleList from './fragments/ArticleList '
import Footer from '../home/fragments/Footer'

function ViewBlog() {
  return (
    <>
    <Navbar/>
    <Container>
    <Typography sx={{mt:5}} variant='h5' fontWeight='bold' >Blogs</Typography>
    <Typography sx={{mb:5}} >Home / Blogs</Typography>
    <ArticleList/>
    </Container>
    <Footer/>
    </>
  )
}

export default ViewBlog