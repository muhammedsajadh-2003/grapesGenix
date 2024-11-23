import { Grid, Typography, Container, Box, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import Navbar from '../home/fragments/Navbar';
import EnquiryForm from './EnquiryForm';
import Footer from '../home/fragments/Footer';

function Apply() {
  return (
    <>
      {/* Navbar section */}
      <Grid container>
        <Grid item xs={12} md={12}>
          <Navbar />
        </Grid>
      </Grid>

      {/* Page header section */}
      <Grid container sx={{ textAlign: 'center', bgcolor: '#6A0DAD' }}>
        <Grid item xs={12}>
          <Typography
            sx={{ mt: 7, color: 'white' }}
            variant="h4"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Excel Mastery: From Basics to Advanced Techniques
          </Typography>

          <Typography sx={{ mt: 1, mb: 7, color: 'lightgreen' }} variant="subtitle2">
            Home <span>/</span> Courses
            <span style={{ color: 'white' }}>
              {' '}
              / Excel Mastery : From Basics to Advanced Techniques
            </span>
          </Typography>
        </Grid>
      </Grid>
      <Container >
        <Grid container spacing={3} >
          <Grid item xs={12} md={8}>
            <Typography sx={{ mt: 8, color: '#6A0DAD' }} variant='h5'>Course Description</Typography>
            <Typography sx={{ mt: 2, color: '#6A0DAD' }}>Excel Mastery: From Basics to Advanced Techniques is an intensive 25-day program designed to equip participants with comprehensive Excel skills essential for professional success. This course covers a wide range of topics, starting from fundamental Excel functionalities to advanced techniques such as data analysis, visualization, and automation.</Typography>
            <Box sx={{ bgcolor: '#D1C4E9', mt: 5, mb: 3 }} >
              <Typography sx={{ pl: 7, pt: 3, pb: 3, color: '#6A0DAD' }} fontWeight='bold' variant='h6' fontFamily='monospace'>Getting Started with MS Excel</Typography>
            </Box>
            {/* Day 1 */}
            <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#6A0DAD' }}>
              <strong>Day 1: Introduction to Excel (2 hours)</strong>
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="• Overview of Excel interface" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Understanding workbooks and worksheets" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Introduction to ribbon and quick access toolbar" sx={{ color: '#6A0DAD' }} />
              </ListItem>
            </List>

            {/* Day 2 */}
            <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#6A0DAD' }}>
              <strong>Day 2: Navigating Excel efficiently (2 hours)</strong>
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="• Keyboard shortcuts for efficient navigation" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Using scroll bars and navigation tools" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Customizing Excel settings for personal preferences" sx={{ color: '#6A0DAD' }} />
              </ListItem>
            </List>

            {/* Day 3 */}
            <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#6A0DAD' }}>
              <strong>Day 3: Data Entry Techniques (2 hours)</strong>
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="• Best practices for entering and formatting data" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Managing data using autofill and flash fill" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Formatting options for cells and text" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Renaming, inserting, deleting, and organizing sheets" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Grouping and ungrouping worksheets" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Using color codes and tabs for better organization" sx={{ color: '#6A0DAD' }} />
              </ListItem>
            </List>
            <Box sx={{ bgcolor: '#D1C4E9', mt: 5, mb: 3 }} >
              <Typography sx={{ pl: 7, pt: 3, pb: 3, color: '#6A0DAD' }} fontWeight='bold' variant='h6' fontFamily='monospace'>Working with Data</Typography>
            </Box>
            {/* Day 4 */}
            <Typography variant="h6" component="h2" sx={{ mb: 1, color: '#6A0DAD' }}>
              <strong>Day 4: Sorting and Filtering Data (2 hours)</strong>
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText sx={{ fontWeight: 'bold', color: '#6A0DAD' }} primary="• Sorting data:" />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Learn how to sort data alphabetically, numerically, and by color to organize information effectively." sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="• Filtering data:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Explore Excel’s filtering options to display specific data subsets and analyze information based on criteria." sx={{ color: '#6A0DAD' }} />
              </ListItem>
            </List>

            {/* Day 5 */}
            <Typography variant="h6" component="h2" sx={{ mt: 2, mb: 1, color: '#6A0DAD' }}>
              <strong>Day 5: Data Validation (2 hours)</strong>
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="• Setting up drop-down lists:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Create drop-down lists to standardize data entry and ensure consistency." sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="• Restricting data entry:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Implement data validation rules to prevent incorrect data entry and maintain data integrity." sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="• Input message creation:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Provide users with helpful input messages to guide them during data entry and ensure accurate input." sx={{ color: '#6A0DAD' }} />
              </ListItem>
            </List>

            {/* Day 6 */}
            <Typography variant="h6" component="h2" sx={{ mt: 2, mb: 1, color: '#6A0DAD' }}>
              <strong>Day 6: Advanced Filtering (2 hours)</strong>
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="• Utilizing advanced filter criteria:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Learn how to apply complex filter criteria to extract specific data subsets from large datasets." sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="• Filtering unique records:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Discover techniques for filtering unique records based on specific criteria to identify distinct data entries." sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="• Handling complex filter scenarios:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Explore strategies for addressing complex filtering scenarios involving multiple criteria and logical operators." sx={{ color: '#6A0DAD' }} />
              </ListItem>
            </List>
            <Box sx={{ bgcolor: '#D1C4E9', mt: 5, mb: 3 }} >
              <Typography sx={{ pl: 7, pt: 3, pb: 3, color: '#6A0DAD' }} fontWeight='bold' variant='h6' fontFamily='monospace'>Tables</Typography>
            </Box>
            <Typography variant="h6" component="h2" sx={{ mb: 1, color: '#6A0DAD' }}>
              <strong>Day 7: Introduction to Excel Tables (2 hours)</strong>
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText sx={{ fontWeight: 'bold', color: '#6A0DAD' }} primary="• Sorting data:" />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Learn how to sort data alphabetically, numerically, and by color to organize information effectively." sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="• Filtering data:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Explore Excel’s filtering options to display specific data subsets and analyze information based on criteria." sx={{ color: '#6A0DAD' }} />
              </ListItem>
            </List>

            {/* Day 5 */}
            <Typography variant="h6" component="h2" sx={{ mt: 2, mb: 1, color: '#6A0DAD' }}>
              <strong>Day 8: Structured References (2 hours)</strong>
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="• Setting up drop-down lists:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Create drop-down lists to standardize data entry and ensure consistency." sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="• Restricting data entry:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Implement data validation rules to prevent incorrect data entry and maintain data integrity." sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="• Input message creation:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Provide users with helpful input messages to guide them during data entry and ensure accurate input." sx={{ color: '#6A0DAD' }} />
              </ListItem>
            </List>

            {/* Day 6 */}
            <Typography variant="h6" component="h2" sx={{ mt: 2, mb: 1, color: '#6A0DAD' }}>
              <strong>Day 9: Sorting and Filtering Tables (2 hours)</strong>
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="• Utilizing advanced filter criteria:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Learn how to apply complex filter criteria to extract specific data subsets from large datasets." sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="• Filtering unique records:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Discover techniques for filtering unique records based on specific criteria to identify distinct data entries." sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="• Handling complex filter scenarios:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Explore strategies for addressing complex filtering scenarios involving multiple criteria and logical operators." sx={{ color: '#6A0DAD' }} />
              </ListItem>
            </List>
            <Box sx={{ bgcolor: '#D1C4E9', mt: 5, mb: 3 }} >
              <Typography sx={{ pl: 7, pt: 3, pb: 3, color: '#6A0DAD' }} fontWeight='bold' variant='h6' fontFamily='monospace'>Power Query</Typography>
            </Box>
            <Typography variant="h6" component="h2" sx={{ mt: 2, mb: 1, color: '#6A0DAD' }}>
              <strong>Day 10: Introduction to Power Query (2 hours)</strong>
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="• Importing data:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Learn how to apply complex filter criteria to extract specific data subsets from large datasets." sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="• Transforming data:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Discover techniques for filtering unique records based on specific criteria to identify distinct data entries." sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="• Cleaning data:" sx={{ color: '#6A0DAD' }} />
              </ListItem>
              <ListItem disableGutters sx={{ pl: 4 }}>
                <ListItemText primary="▪ Explore strategies for addressing complex filtering scenarios involving multiple criteria and logical operators." sx={{ color: '#6A0DAD' }} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <EnquiryForm />
          </Grid>
        </Grid>
      </Container>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Footer/>
        </Grid>
      </Grid>

    </>
  );
}

export default Apply;
