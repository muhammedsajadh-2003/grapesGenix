import React from 'react';
import { Grid, Container } from '@mui/material';
import CourseCard from './CourseCard';

const courses = [
  {
    title: 'Artificial Intelligence',
    image: 'https://imgs.search.brave.com/vnJG68FuouuWqV4lMgezvtR_rbkporkmxPpGWzBL-Vs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjEvQUkt/UE5HLUhELnBuZw',
    //duration: '50 Hours',
    //durationType: 'Hours',
    buttonText: 'Apply'
  },
  {
    title: 'Machine Learning',
    image: 'https://cdn-icons-png.flaticon.com/128/6062/6062262.png',
    //duration: '50 Hours',
    //durationType: 'Hours',
    buttonText: 'Apply'
  },
  {
    title: 'Data Science',
    image: 'https://cdn-icons-png.flaticon.com/128/12489/12489798.png',
    //duration: '60 Hours',
    //durationType: 'Hours',
    buttonText: 'Apply'
  },
  {
    title: 'Deep Learning',
    image: 'https://cdn-icons-png.flaticon.com/128/6072/6072634.png',
    //duration: '8 Weeks',
    //durationType: 'Weeks',
    buttonText: 'Apply'
  },
  {
    title: 'Mobile Application Development using Android',
    image: 'https://imgs.search.brave.com/fzFnnCHS04cxz4Q3EWRqMSTlk5iMzBjuR5J3mZBZh7c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MTMwOThmZDQ4ZjFl/MzAwMDQ5MTAxODku/cG5n',
    //duration: '8 Weeks',
    //durationType: 'Weeks',
    buttonText: 'Apply'
  },
  {
    title: 'Mobile Application Development using Flutter',
    image: 'https://imgs.search.brave.com/2mwYTE-py_Z_Cwf3RjEvyh_4OK-lyfIvY7vWb_ZNgWA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0YvZmx1dHRl/ci1sb2dvLTMwNEJG/OTRGNTUtc2Vla2xv/Z28uY29tLnBuZw',
    //duration: '8 Weeks',
    //durationType: 'Weeks',
    buttonText: 'Apply'
  },
  {
    title: 'MERN stack',
    image: 'https://imgs.search.brave.com/EiQp3FINJXqzLYixRuoSPqfFJ-xzjDvpjSPCh19Abw0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzk1LTk1/NjgwN19tZXJuLXN0/YWNrLWRldmVsb3Bl/ci1oZC1wbmctZG93/bmxvYWQucG5n',
    //duration: '8 Weeks',
    //durationType: 'Weeks',
buttonText: 'Apply'
  },
  {
    title: 'MEAN stack',
    image: 'https://imgs.search.brave.com/DesKE0wdWvLLd3IdLCAoS6VICoL2RyKs_Sy2tWRBMQA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9nb3RvYm9nby5j/b20vTUVBTi1TdGFj/ay9JbWFnZXMvTUVB/Ti1JY29uLnBuZw',
    //duration: '8 Weeks',
    //durationType: 'Weeks',
    buttonText: 'Apply'
  },
  {
    title: 'Fullstack using python-django',
    image: 'https://imgs.search.brave.com/x2wVfrMwL5pxojFJHf1OXCvz9fQC3gkmiaxgzcUcNA8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvZGph/bmdvLWNvbW11bml0/eS1sb2dvLXBuZy10/cmFuc3BhcmVudC5w/bmc',
    //duration: '8 Weeks',
    //durationType: 'Weeks',
    buttonText: 'Apply'
  },
  {
    title: 'Laravel',
    image: 'https://imgs.search.brave.com/_0hx9BGa6qEHaJPd-2M34JU1EPeC6-yFXIHhy1HwOQI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9sYXJhdmVs/LWljb24tNDk3eDUx/Mi11d3lic3RrZS5w/bmc',
    //duration: '8 Weeks',
    //durationType: 'Weeks',
    buttonText: 'Apply'
  },
  {
    title: 'Php',
    image: 'https://imgs.search.brave.com/5Gu-IdkG88h_Hwprd4FqLjVieh-bmHS2jgp5Vx5NkLY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL291dHB1dC1v/Zi1leGFtcGxlLWNy/ZWF0aW5nLXBocC1s/b2dvLXdpdGgtaW1h/Z2ljay0zMDAucG5n',
    //duration: '8 Weeks',
    //durationType: 'Weeks',
    buttonText: 'Apply'
  },
  {
    title: 'Java',
    image: 'https://imgs.search.brave.com/2j50YFjJJOwgM6E8rHNvPKIGx8psFjNN_DfRKRawjd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MDk3OWNlZjEw/MTRjMGI1ZTQ5MDEu/cG5n',
    //duration: '8 Weeks',
    //durationType: 'Weeks',
    buttonText: 'Apply'
  },
];

const CourseGrid = () => {
  return (
    <Container sx={{ padding: '20px' }}>
      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CourseCard
              image={course.image}
              title={course.title}
              duration={course.duration}
              durationType={course.durationType}
              buttonText={course.buttonText}
              
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseGrid;
