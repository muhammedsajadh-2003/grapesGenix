import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';  // Adjust path if necessary
import AboutUs from './pages/about_us/AboutUs'; // Path to AboutUs.js
import ProjectsAndInternship from './pages/projects_internships/ProjectsAndInternship';
import Project2 from './pages/projects_internships/Project2';
import Apply from './pages/apply/Apply';
import Online from './pages/courses/Online';
import Regular from './pages/courses/Regular';
import Hybrid from './pages/courses/Hybrid';
import Scholorship from './pages/courses/Scholorship';
import Corporate from './pages/courses/Corporate';
import Placements from './pages/placements/Placements';
import OpenToWork from './pages/placements/OpenToWork';
import Recruiters from './pages/placements/Recruiters';
import OurTeam from './pages/about_us/OurTeam';
import Mentors from './pages/about_us/Mentors';
import Faculties from './pages/about_us/Faculties';
import ReachUs from './pages/reach_us/ReachUs';
import Explore from './pages/explore/Explore';
import Events from './pages/event/Events';
import EventOpen from './pages/event/EventOpen';
import ViewBlog from './pages/view_blog/ViewBlog';
import AllTestimonial from './pages/all_testimonials/AllTestimonial';
import PrivacyPolicy from './pages/home/fragments/privacy_policy/PrivacyPolicyMain';
import MainCourse from './pages/courses/MainCourse';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
    },
    secondary: {
      main: '#FF5722',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects&internships" element={<ProjectsAndInternship/>} />
          <Route path="/project2" element={<Project2/>} />
          <Route path="/apply" element={<Apply/>} />
          <Route path="/online" element={<Online/>} />
          <Route path="/regular" element={<Regular/>} />
          <Route path="/hybrid" element={<Hybrid/>} />
          <Route path="/scholorship" element={<Scholorship/>} />
          <Route path="/corporate" element={<Corporate/>} />
          <Route path="/placements" element={<Placements/>} />
          <Route path="/opentowork" element={<OpenToWork/>} />
          <Route path="/recruters" element={<Recruiters/>} />
          <Route path="/ourteam" element={<OurTeam/>} />
          <Route path="/mentors" element={<Mentors/>} />
          <Route path="/Faculties" element={<Faculties/>} />
          <Route path="/reachus" element={<ReachUs/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/eventopen" element={<EventOpen/>} />
          <Route path="/viewblog" element={<ViewBlog/>} />
          <Route path="/testimonials" element={<AllTestimonial/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/course" element={<MainCourse/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
