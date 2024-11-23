import React from 'react'
import { Container, Grid, Typography, Box } from '@mui/material'
import Navbar from '../home/fragments/Navbar'
import ProjectsPage from '../projects_internships/fragments/ProjectsPage'
import Footer from '../home/fragments/Footer'
import ProfileGrid from './fragments/ProfileCard'
import MentorGrid from './fragments/MentorCard'

const steps = [
    'Planning',
    'Marking',
    'Shaping the raw potential',
    'Crafting the foundation',
    'Perfecting the girdle',
    'Sculpting main pavilion facets',
    'Establishing the Crown',
    'Fine-tuning the final bruting',
    'Polishing all 16 main facets',
    'Elevating brilliance through Brillianteering',
    'Imposing stringent Quality Control',
];

function Mentors() {
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <Navbar />
                </Grid>
            </Grid>
            <Container sx={{ color: '#6A0DAD' }} > {/* Purple grapes color for text */} {/* Added purple color theme */}
                <Typography variant='h5' sx={{ mt: 3 }} fontWeight='bold' >Mentors</Typography>
                <Typography variant='h6' sx={{ mt: 1 }} fontWeight='bold' >Protégé,</Typography>
                <Typography sx={{ mt: 2, mb: 3 }} >a noun denoting an individual guided and nurtured by a seasoned, influential mentor. At Grapes Genix, every student is a Protégé!</Typography>
                <Typography sx={{ mb: 4 }} >Our meticulous mentoring journey encompasses the following stages:</Typography>
                <Box mt={4} ml={2}>
                    <Typography variant="h5" gutterBottom>
                        Steps:
                    </Typography>
                    <ol style={{ paddingLeft: '20px', lineHeight: '1.8', fontSize: '1.1rem', color: '#333' }}>
                        {steps.map((step, index) => (
                            <li key={index} style={{ marginBottom: '10px' }}>
                                {step}
                            </li>
                        ))}
                    </ol>
                </Box>
                <Typography sx={{ mb: 4 }} >Oops! Did we just spill the secrets of the Diamond cutting process? Indeed! At Grapes Genix, our Mentors skillfully mold individuals into diamonds!</Typography>
                <MentorGrid/>
            </Container>
            <Footer />
        </>
    )
}

export default Mentors