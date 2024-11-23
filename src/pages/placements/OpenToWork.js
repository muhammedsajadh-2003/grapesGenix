import { Grid ,Typography,Container} from '@mui/material'
import React from 'react'
import Navbar from '../home/fragments/Navbar'
import OpenPage from './fragments/OpenPage'

function OpenToWork() {
  return (
    <>
    <Grid container>
        <Grid item xs={12} md={12}>
            <Navbar/>
        </Grid>
    </Grid>
    <Container sx={{ color: '#6A0DAD' }} > {/* Purple grapes color for text */} {/* Added purple color theme */}
        <Grid container>
            <Grid item xs={12}>
              <Typography sx={{ mt: 7, }} variant="h4" fontWeight="bold" fontFamily='sans-serif'>
              Open To Work
              </Typography>
              <Typography sx={{ mt: 1, mb: 7, color: '#6A0DAD' }} variant="subtitle2"> {/* Changed color to purple */}
                Home <span style={{ color: 'black' }}>/ Open To Work</span>
              </Typography>
            </Grid>
          </Grid>
        </Container>
        
        <OpenPage/>
    </>
  )
}

export default OpenToWork