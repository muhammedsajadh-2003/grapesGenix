import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemText, Container, useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Logo = styled('img')({
  height: '50px',
  marginRight: '20px',
});

const NavLink = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(4),
  cursor: 'pointer',
  color: '#3C3D37',
  '&:hover': {
    color: '#6A0DAD', // Purple grapes color
  },
}));

const ApplyButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#6A0DAD', // Purple grapes color
  color: 'white',
  '&:hover': {
    backgroundColor: '#5A0C9A', // Darker shade of purple grapes
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElCourses, setAnchorElCourses] = React.useState(null);
  const [anchorElCareer, setAnchorElCareer] = React.useState(null);
  const [anchorElAbout, setAnchorElAbout] = React.useState(null);
  const navigate = useNavigate(); // Must be inside the component

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleOnlineClick = () => {
    navigate('/online');
  };

  const handleRegularClick = () => {
    navigate('/regular');
  };

  const handleHybridClick = () => {
    navigate('/hybrid');
  };

  const handleScholorshipClick = () => {
    navigate('/scholorship');
  };

  const handleCorporateClick = () => {
    navigate('/corporate');
  };

  const handlePlacementsClick = () => {
    navigate('/placements');
  };

  const handleOpentoworkClick = () => {
    navigate('/opentowork');
  };

  const handleRecrutersClick = () => {
    navigate('/recruters');
  };
  const handleOurteamClick = () => {
    navigate('/ourteam');
  };
  const handleMentorsClick = () => {
    navigate('/mentors');
  };
  const handleFacultiesClick = () => {
    navigate('/Faculties');
  };
  const handleReachusClick = () => {
    navigate('/reachus');
  };

  const handleProject2Click = () => {
    navigate('/project2');
  };
  const handleCourseClick = () => {
    navigate('/course');
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (event, setAnchorEl) => {
    setAnchorEl((anchorEl) => (anchorEl ? null : event.currentTarget));
  };

  const handleCloseMenu = (setAnchorEl) => {
    setAnchorEl(null);
  };

  const mobileMenu = (
    <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <ListItem button onClick={handleHomeClick}>
            <ListItemText primary="HOME" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="COURSES" onClick={(e) => handleMenuClick(e, setAnchorElCourses)} />
          </ListItem>
          <Menu anchorEl={anchorElCourses} open={Boolean(anchorElCourses)} onClose={() => handleCloseMenu(setAnchorElCourses)}>
            <MenuItem onClick={() => { handleOnlineClick(); handleCloseMenu(setAnchorElCourses); }}>Online Courses</MenuItem>
            <MenuItem onClick={() => { handleRegularClick(); handleCloseMenu(setAnchorElCourses)}}>Regular Courses</MenuItem>
            <MenuItem onClick={() => { handleHybridClick(); handleCloseMenu(setAnchorElCourses)}}>Hybrid Courses</MenuItem>
            <MenuItem onClick={() => { handleScholorshipClick(); handleCloseMenu(setAnchorElCourses)}}>Scholarship Courses</MenuItem>
            <MenuItem onClick={() => { handleCorporateClick(); handleCloseMenu(setAnchorElCourses)}}>Corporate Training</MenuItem>
          </Menu>
          <ListItem button>
            <ListItemText primary="CAREER & PLACEMENTS" onClick={(e) => handleMenuClick(e, setAnchorElCareer)} />
          </ListItem>
          <Menu anchorEl={anchorElCareer} open={Boolean(anchorElCareer)} onClose={() => handleCloseMenu(setAnchorElCareer)}>
            <MenuItem onClick={() => {handleCloseMenu(setAnchorElCareer)}}>Our Placements</MenuItem>
            <MenuItem onClick={() => { handleCloseMenu(setAnchorElCareer)}}>Open to Work</MenuItem>
            <MenuItem onClick={() => {handleRecrutersClick(); handleCloseMenu(setAnchorElCareer)}}>Recruiters</MenuItem>
            <MenuItem onClick={() => handleCloseMenu(setAnchorElCareer)}>Join Our Teams</MenuItem>
          </Menu>
          <ListItem button>
            <ListItemText primary="ABOUT US" onClick={(e) => handleMenuClick(e, setAnchorElAbout)} />
          </ListItem>
          <Menu anchorEl={anchorElAbout} open={Boolean(anchorElAbout)} onClose={() => handleCloseMenu(setAnchorElAbout)}>
            <MenuItem onClick={() => {handleOurteamClick(); handleCloseMenu(setAnchorElAbout)}}>Our Team</MenuItem>
            <MenuItem onClick={() => {handleMentorsClick(); handleCloseMenu(setAnchorElAbout)}}>Mentors</MenuItem>
            <MenuItem onClick={() => {handleFacultiesClick(); handleCloseMenu(setAnchorElAbout)}}>Faculties</MenuItem>
          </Menu>
          <ListItem button>
            <ListItemText primary="REACH US" onClick={handleReachusClick} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="PROJECTS" onClick={handleProject2Click} />
          </ListItem>
          <ListItem>
            <ApplyButton fullWidth>Apply Now</ApplyButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ backgroundColor: '#E6E6FA' }}> {/* Light purple background */}
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Logo src={require("../../../team_images/grapes_logo.jpg")} alt="Orisys Academy Logo" style={{ width: '200px', height: 'auto' }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
            <NavLink variant="body1" fontWeight="bold" onClick={handleHomeClick}>HOME</NavLink>
            <NavLink variant="body1" fontWeight="bold" onClick={handleCourseClick}>COURSES</NavLink>
            {/* <Menu anchorEl={anchorElCourses} open={Boolean(anchorElCourses)} onClose={() => handleCloseMenu(setAnchorElCourses)}>
              <MenuItem onClick={() => { handleOnlineClick(); handleCloseMenu(setAnchorElCourses); }}>Online Courses</MenuItem>
              <MenuItem onClick={() => { handleRegularClick(); handleCloseMenu(setAnchorElCourses)}}>Regular Courses</MenuItem>
              <MenuItem onClick={() => { handleHybridClick(); handleCloseMenu(setAnchorElCourses)}}>Hybrid Courses</MenuItem>
              <MenuItem onClick={() => { handleScholorshipClick(); handleCloseMenu(setAnchorElCourses)}}>Scholarship Courses</MenuItem>
              <MenuItem onClick={() => { handleCorporateClick(); handleCloseMenu(setAnchorElCourses)}}>Corporate Training</MenuItem>
            </Menu> */}
            <NavLink variant="body1" fontWeight="bold" onClick={(e) => handleMenuClick(e, setAnchorElCareer)}>CAREER & PLACEMENTS</NavLink>
            <Menu anchorEl={anchorElCareer} open={Boolean(anchorElCareer)} onClose={() => handleCloseMenu(setAnchorElCareer)}>
              <MenuItem onClick={() => { handleCloseMenu(setAnchorElCareer)}}>Our Placements</MenuItem>
              <MenuItem onClick={() => { handleCloseMenu(setAnchorElCareer)}}>Open to Work</MenuItem>
              <MenuItem onClick={() => {handleRecrutersClick(); handleCloseMenu(setAnchorElCareer)}}>Recruiters</MenuItem>
              <MenuItem onClick={() => handleCloseMenu(setAnchorElCareer)}>Join Our Teams</MenuItem>
            </Menu>
            <NavLink variant="body1" fontWeight="bold" onClick={(e) => handleMenuClick(e, setAnchorElAbout)}>ABOUT US</NavLink>
            <Menu anchorEl={anchorElAbout} open={Boolean(anchorElAbout)} onClose={() => handleCloseMenu(setAnchorElAbout)}>
              <MenuItem onClick={() => {handleOurteamClick(); handleCloseMenu(setAnchorElAbout)}}>Our Team</MenuItem>
              <MenuItem onClick={() => {handleMentorsClick(); handleCloseMenu(setAnchorElAbout)}}>Mentors</MenuItem>
              <MenuItem onClick={() => {handleFacultiesClick(); handleCloseMenu(setAnchorElAbout)}}>Faculties</MenuItem>
            </Menu>
            <NavLink variant="body1" fontWeight="bold" onClick={handleReachusClick}>REACH US</NavLink>
            <NavLink variant="body1" fontWeight="bold" onClick={handleProject2Click}>PROJECTS</NavLink>
          </Box>
          {!isMobile ? (
            <ApplyButton variant="contained" size="large" component="a" href="https://forms.gle/SV5ZkjTEeXewKwQi8">
              Apply Now
            </ApplyButton>
          ) : (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>
      {mobileMenu}
    </AppBar>
  );
};

export default Navbar;
