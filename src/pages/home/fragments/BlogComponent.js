import React from 'react';
import { Box, Typography, Button, Grid, CardMedia, CardContent, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const blogs = [
  {
    date: '5th February 2024',
    title: 'Harnessing the Future of No-Code Platforms: A New Era of Innovation and Learning',
    imageUrl: 'https://orisysacademy.com/wp-content/uploads/2024/02/DALL%C2%B7E-2024-02-05-10.13.05-Create-an-image-of-a-female-programmer-working-on-a-no-code-development-platform.-The-setting-is-an-innovative-tech-environment-with-a-futuristic-inte-500x350.webp',
  },
  {
    date: '19th January 2024',
    title: 'The Future of Full Stack Development in an AI-Dominated Era',
    imageUrl: 'https://orisysacademy.com/wp-content/uploads/2024/01/iottt-1-500x350.jpg',
  },
  {
    date: '19th January 2024',
    title: 'Full Stack Development: A Gateway to Diverse Career Opportunities',
    imageUrl: 'https://orisysacademy.com/wp-content/uploads/2024/01/block4.jpg',
  },
  {
    date: '19th January 2024',
    title: 'The Synergy of ONDC and AI in India: Catalyzing Economic Growth',
    imageUrl: 'https://orisysacademy.com/wp-content/uploads/2024/01/T-Koshy-MD-CEO-ONDC-3-scaled-1-500x350.jpg',
  },
];

const BlogComponent = () => {
  const navigate = useNavigate();

  const handleBlogClick = () => {
    navigate('/viewblog');
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '40px 20px', color: '#6A0DAD' }}>
      {/* Latest Blogs Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          textAlign: 'center',
          color: '#512DA8',
          fontSize: { xs: '24px', sm: '28px', md: '32px' },
        }}
      >
        Latest Blogs
      </Typography>

      <Grid container spacing={4}>
        {/* Left Section: Large Blog Card */}
        <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '100%', maxWidth: '500px' }}>
            <CardMedia
              component="img"
              height="260"
              image={blogs[0].imageUrl}
              alt={blogs[0].title}
              sx={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                objectFit: 'cover',
                width: '100%',
              }}
            />
            <CardContent
              sx={{
                backgroundColor: '#fff',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {blogs[0].date}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mt: 1,
                  color: '#9575CD',
                  fontSize: { xs: '16px', sm: '18px', md: '20px' },
                }}
              >
                {blogs[0].title}
              </Typography>
            </CardContent>
          </Box>
        </Grid>

        {/* Right Section: Smaller Blog Cards + Subscription */}
        <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            {blogs.slice(1).map((blog, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  mb: 3,
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Box
                  sx={{
                    width: { xs: '100%', sm: '90px' },
                    height: '60px',
                    mr: { sm: 2, xs: 0 },
                    mb: { xs: 1, sm: 0 },
                  }}
                >
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {blog.date}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 'bold',
                      lineHeight: '1.2',
                      color: '#9575CD',
                      fontSize: { xs: '14px', sm: '16px' },
                    }}
                  >
                    {blog.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Subscription Box */}
          <Box
            sx={{
              backgroundColor: '#6A0DAD',
              borderRadius: '8px',
              p: { xs: 2, sm: 3 },
              mt: 2,
              textAlign: 'center',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1040/1040207.png"
                alt="newsletter icon"
                width={40}
                height={40}
                style={{ marginBottom: '10px', marginRight: '10px' }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff', mb: 1 }}>
                Subscribe
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#fff', mb: 2, fontSize: { xs: '14px', sm: '16px' } }}>
              Our Newsletter
            </Typography>
            <TextField
              fullWidth
              placeholder="Email Address"
              variant="outlined"
              sx={{
                backgroundColor: 'white',
                borderRadius: '4px',
                mb: 2,
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#D1C4E9',
                color: '#000',
                borderRadius: '4px',
                fontSize: { xs: '14px', sm: '16px' },
              }}
            >
              SUBSCRIBE
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* View All Blogs Button */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          variant="contained"
          onClick={handleBlogClick}
          sx={{
            backgroundColor: '#9575CD',
            fontWeight: 'bold',
            px: 5,
            color: 'white',
            fontSize: { xs: '14px', sm: '16px' },
          }}
        >
          View All Blogs
        </Button>
      </Box>
    </Box>
  );
};

export default BlogComponent;
