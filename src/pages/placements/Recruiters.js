import { Grid ,Typography,Container} from '@mui/material'
import React from 'react'
import Navbar from '../home/fragments/Navbar'
import PlacePage from './fragments/PlacePage'
import CompanyGrid from './fragments/CompanyGrid'
import Footer from '../home/fragments/Footer'

function Recruiters() {
  return (
    <>
    <Grid container>
        <Grid item xs={12} md={12}>
            <Navbar/>
        </Grid>
    </Grid>
    <Container>
    <Grid container>
        <Grid item xs={12}>
          <Typography sx={{ mt: 7, color: '#6A0DAD' }} variant="h4" fontWeight="bold" fontFamily='sans-serif'>
          Recruiters
          </Typography>
          <Typography sx={{ mt: 1, mb: 7, color: '#6A0DAD' }} variant="subtitle2">
            Home <span style={{ color: 'black' }}>/ Recruiters</span>
          </Typography>
        </Grid>
      </Grid>
      <CompanyGrid/>
    </Container>
    <Footer/>
    
    </>
  )
}

export default Recruiters