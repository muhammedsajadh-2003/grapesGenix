// TestimonialList.js
import React from 'react';
import { Grid } from '@mui/material';
import TestimonialCard from './TestimonialCard ';

const testimonials = [
  {
    content: "I have completed UI Developer training from Orisys Academy. It’s an excellent place with dedicated faculties. This training definitely helped to develop personal and professional skills. I am extremely thankful to Orisys Academy.",
    name: 'Juna Mathew',
    designation: 'UI/UX Trainee',
  },
  {
    content: "Orisys Academy is a good platform to gain technical knowledge and to improve our soft skills. They provide a friendly environment to study and also the trainers and staff are very supportive. The opportunity which I got to undergo training here is one of the greatest milestones in my life.",
    name: 'Varsha S',
    designation: 'Full Stack Developer',
  },
  {
    content: "A place to improve your skills far more than college. They give us more exposure and also they provide us with more than enough study materials. I’m very grateful to Orisys Academy.",
    name: 'Joish Joshy',
    designation: 'System Engineer',
  },
  {
    content: "Orisys Academy is a well-developed training platform for all the ones who wish to improve their skills on a technical basis. I am one of the passouts from Orisys on a course named Junior Software Developer.",
    name: 'Ashish Babu',
    designation: 'Software Engineer',
  },
  {
    content: "Orisys Academy played an important role in shaping, encouraging, and guiding my career. I am so grateful to say that Orisys was the best choice in my life because I could develop my soft skills, technical skills, and attitude through the 4-month training provided by them and thereby achieve my goal.",
    name: 'Jincy Mariam John',
    designation: 'Programmer Trainee',
  },
  {
    content: "I have completed a junior software developer course from this academy. They provided practical-oriented training with excellent trainers. The classes were very interactive and it expanded our knowledge.",
    name: 'Prince Peter',
    designation: 'Programmer',
  },
];

const TestimonialList = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <TestimonialCard
            content={testimonial.content}
            name={testimonial.name}
            designation={testimonial.designation}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TestimonialList;
