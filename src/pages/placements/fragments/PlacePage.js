import React, { useState } from 'react';
import { Container, Grid, Pagination } from '@mui/material';
import PlaceCard from './PlaceCard';

function PlacePage() {

    const projects = [
        {
          name: 'Jomol G',
          image: 'https://orisysacademy.com/wp-content/uploads/2023/07/IMG_20230609_183520-300x300.jpg',
          position : 'Junior Software Engineer',
          company : 'Travancore Medicity'
        },
        {
          name: 'Amal A M',
          image: 'https://orisysacademy.com/wp-content/uploads/2023/07/IMG_20210802_094532-300x300.jpg',
          position : 'Junior Software Engineer',
          company : 'Travancore Medicity'
        },
        {
          name: 'Aswathy P',
          image: 'https://orisysacademy.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-12-at-6.45.43-PM-300x300.jpeg',
          position : 'Accounts trainee',
          company : 'Taxation Syndicate'
        },
        {
          name: 'Anseena A Sharafudeen',
          image: 'https://orisysacademy.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-12-at-2.27.15-PM-300x300.jpeg',
          position : 'Business Development Executive',
          company : 'Msigma Gokulam'
        },
        {
          name: 'Biji Raju',
          image: 'https://orisysacademy.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-12-at-2.27.12-PM-1-300x300.jpeg',
          position : 'Software Developer',
          company : 'Pixcom Technologies LLC'
        },
        {
          name: 'Sonu J',
          image: 'https://orisysacademy.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-12-at-2.27.11-PM-1-300x300.jpeg',
          position : 'Junior Software Develope',
          company : 'OrisysIndia Consultancy Services'
        },
        {
          name: 'Amritha Gopal',
          image: 'https://orisysacademy.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-02-at-6.44.45-PM-300x300.jpeg',
          position : 'Junior Developer',
          company : 'Amrita Vishwa Vidyapeetham'
        },
        {
          name: 'Panchami R',
          image: 'https://orisysacademy.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-27-at-11.40.20-AM-300x300.jpeg',
          position : 'Junior Associate-AR',
          company : 'Guidehouse'
        },
        {
          name: 'Kannan C M',
          image: 'https://orisysacademy.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-29-at-2.53.55-PM-300x300.jpeg',
          position : 'Software Engineer Trainee',
          company : 'Confianz Information Technologies Pvt.Ltd'
        },
        {
          name: 'MUHAMMED SAJAD A',
          image: 'https://orisysacademy.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-29-at-2.40.43-PM-300x300.jpeg',
          position : 'Software Engineer Trainee',
          company : 'Bytelabz Software Solutions Pvt.Ltd'
        },
        {
          name: 'AISWARYA S',
          image: 'https://orisysacademy.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-29-at-2.56.41-PM-e1659610977446-300x300.jpeg',
          position : 'Junior Software Developer',
          company : 'Reymoro Technology'
        },
        {
          name: 'Architha K',
          image: 'https://orisysacademy.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-03-at-7.29.15-PM-1-300x300.jpeg',
          position : 'Software Engineer',
          company : 'Socius Innovative Global Brains Pvt Ltd'
        },
        
        // Add more projects here
      ];
    
      const [currentPage, setCurrentPage] = useState(1);
      const projectsPerPage = 12; // Number of projects per page
    
      // Calculate the indices of the first and last projects to display for the current page
      const indexOfLastProject = currentPage * projectsPerPage;
      const indexOfFirstProject = indexOfLastProject - projectsPerPage;
      const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    
      // Handle page change
      const handlePageChange = (event, value) => {
        setCurrentPage(value);
      };
  return (
    <>
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {currentProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <PlaceCard name={project.name} image={project.image} position={project.position} company={project.company}  />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Pagination
          count={Math.ceil(projects.length / projectsPerPage)} // Total number of pages
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Grid>
    </Container>
    </>
  )
}

export default PlacePage