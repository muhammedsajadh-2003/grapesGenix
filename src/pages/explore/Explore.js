import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../home/fragments/Navbar'
import Footer from '../home/fragments/Footer'
import WhatsAppButton from '../whatsapp_button/WhatsAppButton';
import CyberSecurityOverview from './fragments/CyberSecurityOverview ';


function Explore() {
  return (
    <>
    <Grid container  >
        <Grid item xs={12} md={12}>
            <WhatsAppButton/>
        </Grid>
    </Grid>
    <Grid container sx={{mb:'3%'}} >
        <Grid item xs={12} md={12}>
            <Navbar/>
        </Grid>
    </Grid>
    
    <Grid container sx={{textAlign:'center',bgcolor:'#6A0DAD'}} > 
        <Grid item xs={12} md={12}>
            <Typography sx={{mt:5,color:'white'}} variant='h5' fontWeight='bold' >Advanced Cybersecurity Tactics and Ethical Hacking</Typography>
            <Typography sx={{mt:1,mb:5,color:'white'}} variant='subtitle2' >Home <span style={{color:'#D1C4E9'}}>/  Courses /</span>Advanced Cybersecurity Tactics and Ethical Hacking</Typography>

        </Grid>
    </Grid>
    <Container>
    <CyberSecurityOverview/>
    </Container>
    
    <Footer/>
    </>
  )
}

export default Explore