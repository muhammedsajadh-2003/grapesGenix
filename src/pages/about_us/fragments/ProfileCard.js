import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { styled } from '@mui/system';

const profiles = [
  {
    name: 'Gopikrishnan P G',
    position: 'CEO',
    image: require('../../../team_images/Gopikrishnan_PG.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Rangarajan T R',
    position: 'DIRECTOR',
    image: require('../../../team_images/Rangarajan_TR.jpg'),
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Aparna P K',
    position: 'DIRECTOR',
    image: require('../../../team_images/Aparna_PK.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Gopika M S',
    position: 'Senior Android Developer',
    image: require('../../../team_images/Gopika M S.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Thamir s',
    position: 'Senior Mern Developer',
    image: require('../../../team_images/Thamir_s.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Vaideesh S',
    position: 'Senior Fullstack Developer',
    image: require('../../../team_images/Vaideesh_S.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Sanika V S',
    position: 'Senior Fullstack Developer',
    image: require('../../../team_images/Sanika_VS.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Arya T R',
    position: 'Senior Fullstack Developer',
    image: require('../../../team_images/Arya_TR.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Ananya',
    position: 'Fullstack Developer',
    image: require('../../../team_images/ananya.jpg'),
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Seethalakshmi P S',
    position: 'Fullstack Developer',
    image: require('../../../team_images/Seethalakshmi_ps.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Vishnu K P',
    position: 'Fullstack Developer',
    image: require('../../../team_images/Vishnu_KP.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Anziya K H',
    position: 'Fullstack Developer',
    image: require('../../../team_images/Anziya_KH.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'V S Sajana',
    position: 'Fullstack Developer',
    image: require('../../../team_images/VS_Sajana.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Favazul Hak',
    position: 'Fullstack Developer',
    image: require('../../../team_images/Favazul_Hak.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Athira K R',
    position: 'Fullstack Developer',
    image: require('../../../team_images/Athira_KR.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Alphy O J',
    position: 'Android developer',
    image: require('../../../team_images/Alphy_OJ.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Muhammed Sajadh A',
    position: 'Junior Software Developer',
    image: require('../../../team_images/Sajadh_A.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
  {
    name: 'Arun A Kunjumon',
    position: 'Junior Software Developer',
    image: require('../../../team_images/Arun.jpg'), 
    linkedin: '#',
    facebook: '#',
    twitter: '#',
  },
];

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0.5),
  color: '#3C3D37',
}));

const ProfileCard = ({ profile }) => {
  return (
    <Card sx={{ width: 260, height: 310, textAlign: 'center', padding: '10px', borderRadius: '15px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}>
      <Avatar 
        src={profile.image} 
        alt={profile.name} 
        sx={{ 
          width: 120, 
          height: 120, 
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
          <SocialIconButton 
            href={profile.facebook} 
            aria-label="Facebook"
            sx={{
              transition: 'transform 0.3s, color 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#3b5998', 
              },
            }}
          >
            <FacebookIcon />
          </SocialIconButton>
          <SocialIconButton 
            href={profile.twitter} 
            aria-label="Twitter"
            sx={{
              transition: 'transform 0.3s, color 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#1DA1F2', 
              },
            }}
          >
            <TwitterIcon />
          </SocialIconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

const ProfileGrid = () => {
  return (
    <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap={2} mt={4}>
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </Box>
  );
};

export default ProfileGrid;
