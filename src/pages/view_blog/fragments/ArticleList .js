// ArticleList.js
import React, { useState } from 'react';
import { Grid, Pagination, Box } from '@mui/material';
import ArticleCard from './ArticleCard ';

const articles = [
  {
    title: 'Navigating the New Era of Learning: Online vs Offline Courses',
    author: 'Grapes Genix',
    date: '18th January 2024',
    image: require('../../../team_images/grapes_logo.jpg')
  },
  {
    title: 'Unveiling the Potential of T5: The Text-to-Text Transfer Transformer',
    author: 'Grapes Genix',
    date: '17th January 2024',
    image: require('../../../team_images/grapes_logo.jpg')
  },
  {
    title: 'Exploring LLM Full Stack Courses: A Pathway to a Flourishing Career',
    author: 'Grapes Genix',
    date: '17th January 2024',
    image: require('../../../team_images/grapes_logo.jpg')
  },
  {
    title: 'Top Emerging Technologies to Learn in 2024',
    author: 'Grapes Genix',
    date: '17th January 2024',
    image: require('../../../team_images/grapes_logo.jpg')
  },
  {
    title: 'Kerala – Career Opportunities in LLAMA LLM: A Guide by Orisys Academy, Trivandrum',
    author: 'Grapes Genix',
    date: '17th January 2024',
    image: require('../../../team_images/grapes_logo.jpg')
  },
  {
    title: 'Exploring LLM Llama: Advantages and Limitations of the Latest AI Sensation',
    author: 'Grapes Genix',
    date: '17th January 2024',
    image: require('../../../team_images/grapes_logo.jpg')
  },
  // Add more articles as needed
];

const ITEMS_PER_PAGE = 3;

const ArticleList = () => {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginatedArticles = articles.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <Box>
      <Grid container spacing={3} justifyContent="center">
        {paginatedArticles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ArticleCard
              title={article.title}
              author={article.author}
              date={article.date}
              logoUrl={article.image}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={Math.ceil(articles.length / ITEMS_PER_PAGE)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default ArticleList;
