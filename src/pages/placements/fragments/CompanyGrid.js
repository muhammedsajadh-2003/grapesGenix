import React from 'react';
import { Grid, Typography } from '@mui/material';

const companies = [
  { name: 'Impact', image: 'https://orisysacademy.com/wp-content/uploads/2023/06/download-2-225x120.png' },
  { name: 'JUNIOR DEC 25 PRIVATE LIMITED', image: 'https://orisysacademy.com/wp-content/uploads/2023/06/download-1-299x120.png' },
  { name: 'Techsoft Web Solutions', image: 'https://orisysacademy.com/wp-content/uploads/2023/06/images-1-260x120.png' },
  { name: 'MY IELTS Partner', image: 'https://orisysacademy.com/wp-content/uploads/2023/06/download-200x120.jpeg' },
  { name: 'G-TEC COMPUTER EDUCATION', image: 'https://orisysacademy.com/wp-content/uploads/2023/06/download-1-300x120.jpeg' },
  { name: 'OrisysIndia Consultancy Services', image: 'https://orisysacademy.com/wp-content/uploads/2023/06/KKEM-Logo_-02-01-300x120.jpg' },
  { name: 'Tech Mahindra', image: 'https://orisysacademy.com/wp-content/uploads/2023/06/tech-275x120.png' },
  { name: 'Calnic Solutions', image: 'https://orisysacademy.com/wp-content/uploads/2022/11/calnicsolutions.jpg' },
  { name: 'ICwares Systems & Softwares Pvt.Ltd', image: 'https://orisysacademy.com/wp-content/uploads/2022/10/icwares.jpg' },
  { name: 'Aptara Learning Private Limited', image: 'https://orisysacademy.com/wp-content/uploads/2022/10/aptara.jpg' },
  { name: 'NonTech Tricon Pvt.Ltd', image: 'https://orisysacademy.com/wp-content/uploads/2022/10/notech-tricon.jpg' },
  { name: 'Amrita Technologies', image: 'https://orisysacademy.com/wp-content/uploads/2022/09/Amrita-Technologies.jpg' },
  { name: 'Infospica Consultancy Services', image: 'https://orisysacademy.com/wp-content/uploads/2022/09/infospica.jpg' },
  { name: 'ShellSquare Software Pvt Ltd', image: 'https://orisysacademy.com/wp-content/uploads/2022/09/ShellSquare.jpg' },
  { name: 'Griffinmark Technologies Pvt. Ltd', image: 'https://orisysacademy.com/wp-content/uploads/2022/09/GriffinMark.jpg' },
  { name: 'YourVision Software Solutions LLP', image: 'https://orisysacademy.com/wp-content/uploads/2022/08/yourVision.jpg' },
];

function CompanyGrid() {
  return (
    <Grid container spacing={3} sx={{ padding: '20px', width: '100%', margin: '0 auto' }}>
      {companies.map((company, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ textAlign: 'center' }}>
          <img
            src={company.image}
            alt={company.name}
            style={{ width: '150px', height: 'auto', marginBottom: '10px' }} // Adjust logo size
          />
          <Typography variant="body1" sx={{ fontSize: '14px', color: '#6A0DAD' }}> {/* Purple color for text */}
            {company.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default CompanyGrid;
