import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/system';

const profiles = [
  // {
  //   name: 'John Doe',
  //   position: 'Senior Software Engineer',
  //   image: 'https://randomuser.me/api/portraits/men/1.jpg',
  //   linkedin: 'https://linkedin.com/in/johndoe',
  // },
  // {
  //   name: 'Jane Smith',
  //   position: 'Project Manager',
  //   image: 'https://randomuser.me/api/portraits/women/2.jpg',
  //   linkedin: 'https://linkedin.com/in/janesmith',
  // },
  // {
  //   name: 'Alice Johnson',
  //   position: 'UI/UX Designer',
  //   image: 'https://randomuser.me/api/portraits/women/3.jpg',
  //   linkedin: 'https://linkedin.com/in/alicejohnson',
  // },
  // {
  //   name: 'Michael Brown',
  //   position: 'Data Scientist',
  //   image: 'https://randomuser.me/api/portraits/men/4.jpg',
  //   linkedin: 'https://linkedin.com/in/michaelbrown',
  // },
  // {
  //   name: 'Emily Davis',
  //   position: 'DevOps Engineer',
  //   image: 'https://randomuser.me/api/portraits/women/5.jpg',
  //   linkedin: 'https://linkedin.com/in/emilydavis',
  // },
];

const SocialIconButton = styled(IconButton)({
  margin: '0 5px',
});

function MentorCard({ profile }) {
  return (
    <Card sx={{ width: 300, height: 300, textAlign: 'center', padding: '10px', borderRadius: '15px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}>
      <Avatar 
        src={profile.image} 
        alt={profile.name} 
        sx={{ 
          width: 100, 
          height: 100, 
          margin: '0 auto 20px', 
          transition: 'transform 0.3s, box-shadow 0.3s', 
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          },
        }} 
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">{profile.name}</Typography>
        <Typography variant="subtitle1" color="textSecondary" fontWeight="light">{profile.position}</Typography>
        <Box mt={2} display="flex" justifyContent="center">
          <SocialIconButton 
            href={profile.linkedin} 
            aria-label="LinkedIn"
            sx={{
              transition: 'transform 0.3s, color 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#0077b5', 
              },
            }}
          >
            <LinkedInIcon />
          </SocialIconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

const MentorGrid = () => {
  return (
    <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap={2} mt={4}>
      {profiles.map((profile, index) => (
        <MentorCard key={index} profile={profile} />
      ))}
    </Box>
  );
}

export default MentorGrid;