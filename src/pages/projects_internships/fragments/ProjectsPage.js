import React, { useState } from 'react';
import { Container, Grid, Pagination } from '@mui/material';
import ProjectCard from './ProjectCard'; // Assuming ProjectCard is in the same directory
import Footer from '../../home/fragments/Footer';

function ProjectsPage() {
  const projects = [
    {
      title: 'Blockchain-based Voting System',
      image: 'https://orisysacademy.com/wp-content/uploads/2024/01/block-chain2-500x350.jpg',
    },
    {
      title: 'Biometric ATM System for Enhanced Security',
      image: 'https://orisysacademy.com/wp-content/uploads/2024/01/Biometric-Atm-500x350.jpg',
    },
    {
      title: 'AI-Based Generation of Realistic Virtual Environments',
      image: 'https://orisysacademy.com/wp-content/uploads/2024/01/Vr-500x350.png',
    },
    {
      title: 'Automated Generation of Realistic Human Faces Using GANs',
      image: 'https://orisysacademy.com/wp-content/uploads/2024/01/GAN-500x350.jpg',
    },
    {
      title: 'Voice-Controlled Virtual Assistant for Developers',
      image: 'https://orisysacademy.com/wp-content/uploads/2024/01/voice-500x350.jpeg',
    },
    {
      title: 'Edge Computing and IoT Security',
      image: 'https://orisysacademy.com/wp-content/uploads/2024/01/Ai-image-500x350.jpg',
    },
    {
      title: 'Augmented Reality (AR) for Surgical Training',
      image: 'https://orisysacademy.com/wp-content/uploads/2024/01/AR-images-500x350.jpeg',
    },
    {
      title: 'Real-Time Emotion Analysis in Video Interviews',
      image: 'https://orisysacademy.com/wp-content/uploads/2024/01/emotion-analysis-500x350.jpg',
    },
    {
      title: 'Deep learning-based malware detection',
      image: 'https://orisysacademy.com/wp-content/uploads/2024/01/deep-learning-500x350.jpg',
    },
    {
      title: 'Blockchain-Based Anti-Counterfeiting Solution',
      image: 'https://orisysacademy.com/wp-content/uploads/2024/01/ondc5.jpg',
    },
    {
      title: 'Blockchain-Based Token Swapping Platform',
      image: 'https://orisysacademy.com/wp-content/uploads/2024/01/ANI-20220915134052-1-500x350.png',
    },
    {
      title: 'Digital Currency Staking Mechanism',
      image: 'https://orisysacademy.com/wp-content/uploads/2024/01/ONDC-feature-1-760x570-1-500x350.png',
    },
    // Add more projects here
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8; // Number of projects per page

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
    <Container sx={{ py: 4, color: '#6A0DAD' }}> {/* Light gray background and purple grapes color for text */}
      <Grid container spacing={4}>
        {currentProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProjectCard title={project.title} image={project.image} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Pagination
          count={Math.ceil(projects.length / projectsPerPage)} // Total number of pages
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            color: '#6A0DAD', // Purple grapes color for pagination text
            '& .MuiPaginationItem-root': {
              color: '#6A0DAD', // Purple grapes color for pagination item
            },
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: '#6A0DAD', // Purple grapes color for selected pagination item
              color: '#fff', // White color for selected pagination item text
            },
          }}
        />
      </Grid>
    </Container>
    </>
  );
}

export default ProjectsPage;
