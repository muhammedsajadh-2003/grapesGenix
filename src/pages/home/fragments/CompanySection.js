import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const companiesPlaced = [
  { name: "TEC Computer Education", logo: "https://orisysacademy.com/wp-content/uploads/2024/01/pixcom-300x120.png" },
  { name: "Kerala Knowledge Economy Mission", logo: "https://orisysacademy.com/wp-content/uploads/2023/06/download-225x120.jpg" },
  { name: "Tech Mahindra", logo: "https://orisysacademy.com/wp-content/uploads/2023/06/download-2-225x120.png" },
  { name: "Calnic Solutions", logo: "https://orisysacademy.com/wp-content/uploads/2023/06/download-1-299x120.png" },
];

const associations = [
  { name: "Global Language School", logo: "https://orisysacademy.com/wp-content/uploads/2022/07/global-labguage-school-logo-300x120.png" },
  { name: "IZ Intelligent Solutions", logo: "https://orisysacademy.com/wp-content/uploads/2022/07/Liz-Intelligent-Solutions-300x120.png" },
  { name: "Nasscom", logo: "https://orisysacademy.com/wp-content/uploads/2022/07/ssc-nasscom-300x120.png" },
  { name: "Viza International", logo: "https://orisysacademy.com/wp-content/uploads/2019/09/viza-international-logo-300x120.png" },
];

const CompanyLogo = ({ logo, name }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: { xs: 80, sm: 100, md: 120 }, // Scaled height for responsiveness
      width: { xs: 120, sm: 140, md: 160 }, // Scaled width for responsiveness
      margin: { xs: 0.5, sm: 1 }, // Space between logos
    }}
  >
    <img src={logo} alt={name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
  </Box>
);

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CompanySection = () => {
  return (
    <Container sx={{ mt: 5 }}>
      {/* Section Title for Companies Placed */}
      <Typography
        variant="h5"
        fontWeight="bold"
        align="center"
        gutterBottom
        sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, mb: { xs: 2, sm: 4 } }}
      >
        Students Placed In
      </Typography>
      <Slider {...sliderSettings}>
        {companiesPlaced.map((company, index) => (
          <div key={index}>
            <CompanyLogo logo={company.logo} name={company.name} />
          </div>
        ))}
      </Slider>

      {/* Section Title for Associations */}
      <Typography
        variant="h5"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, mt: { xs: 4, sm: 6 }, mb: { xs: 2, sm: 4 } }}
      >
        In Association With
      </Typography>
      <Slider {...sliderSettings}>
        {associations.map((association, index) => (
          <div key={index}>
            <CompanyLogo logo={association.logo} name={association.name} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default CompanySection;
