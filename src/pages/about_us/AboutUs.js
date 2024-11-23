import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../home/fragments/Navbar'
import Footer from '../home/fragments/Footer'
import WhatsAppButton from '../whatsapp_button/WhatsAppButton';

function AboutUs() {
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
            <Typography sx={{mt:5,color:'white'}} variant='h5' fontWeight='bold' >About Us</Typography>
            <Typography sx={{mt:1,mb:5,color:'lightgreen'}} variant='subtitle2' >Home <span style={{color:'white'}}>/ About Us</span></Typography>

        </Grid>
    </Grid>
    <Container>
    <Grid sx={{mt:5}}>
        <Grid item xs={12} md={12}>
            <Typography sx={{ color: '#6A0DAD' }}> {/* Purple text color */}
                <b>Grapesgenix Technical Solutions Pvt. Ltd. is a distinguished IT and ITES firm headquartered in East Fort, Thrissur, Kerala. Established in 2013, our company excels in delivering advanced technological solutions across various domains including Software Development, Web Designing/Development, Domain Registration, Web Hosting, Server Administration (Windows/Linux), Technical Support, Mobile Application Development, Server Co-location, Search Engine Optimization, Medical Transcription, and Software Training. We cater to a diverse clientele spanning both domestic and international markets, providing robust IT infrastructure services.</b>
            </Typography>
        </Grid>
    </Grid>
    <Grid sx={{mt:2}}>
        <Grid item xs={12} md={12}>
            <Typography sx={{ color: '#6A0DAD' }}> {/* Purple text color */}
                Specializing in Software Development, Web Designing/Development, Server Administration, and more, we serve a global clientele with cutting-edge technology solutions.
            </Typography>
        </Grid>
    </Grid>
    <Grid sx={{mt:2}}>
        <Grid item xs={12} md={12}>
            <Typography sx={{ color: '#6A0DAD' }}> {/* Purple text color */}
                <b>Key Features:</b><br/>
                - Provides Internships for practical industry exposure.<br/>
                - Offers Software Live Projects.<br/>
                - Advanced Syllabus tailored to current IT industry needs.<br/>
                - Live Interactive Training by seasoned Industry Experts.<br/>
                - Guaranteed Placement Assistance and access to our Job Portal.<br/>
                - 1 Year Free Subscription to recorded classes by IT Experts.
            </Typography>
        </Grid>
    </Grid>
    <Grid sx={{mt:2}}>
        <Grid item xs={12} md={12}>
            <Typography sx={{ color: '#6A0DAD' }}> {/* Purple text color */}
                <b>Accreditations & Certifications:</b><br/>
                - Registered under Council For Science & Technology (CTech), Kerala.<br/>
                - Recognized by Startup India & Kerala Startup Mission (KSUM).<br/>
                - ISO 9001:2015 Certified for quality management.<br/>
                - MSME-Udyam Registration under Govt of India.
            </Typography>
        </Grid>
    </Grid>
    <Grid sx={{mt:2}}>
        <Grid item xs={12} md={12}>
            <Typography sx={{ color: '#6A0DAD' }}> {/* Purple text color */}
                <b>Expertise in:</b> Android, Python, Java, J2EE, J2ME, PHP, Laravel, R programming, MERN Stack, Raspberry Pi, IoT, Tableau, Angular, Node.js.
            </Typography>
        </Grid>
    </Grid>
</Container>

    <Grid container>
        <Grid item xs={12} md={12}>
            <Footer/>
        </Grid>
    </Grid>
    
    
    
    </>
    
  )
}

export default AboutUs