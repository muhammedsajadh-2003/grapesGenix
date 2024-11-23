import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../home/fragments/Navbar'
import Footer from '../home/fragments/Footer'
import WhatsAppButton from '../whatsapp_button/WhatsAppButton';
import ContactForm from './fragments/ContactForm ';


function ReachUs() {
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
    
    <Grid container sx={{textAlign:'center',bgcolor:'#6A0DAD'}} > {/* Purple background color */}
        <Grid item xs={12} md={12}>
            <Typography sx={{mt:5,color:'white'}} variant='h5' fontWeight='bold' >Reach Us</Typography>
            <Typography sx={{mt:1,mb:5,color:'#A594F9'}} variant='subtitle2' >Home <span style={{color:'white'}}>/ Reach Us</span></Typography>
            
        </Grid>
    </Grid>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default ReachUs