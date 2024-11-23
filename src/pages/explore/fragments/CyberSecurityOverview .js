import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box
} from "@mui/material";

import {
    AccessTime,
    CalendarToday,
    School,
    Verified,
    LocationOn,
  } from "@mui/icons-material";

const CyberSecurityOverview = () => {
  return (
    <Grid container spacing={4} padding={4}>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" gutterBottom>
          PROGRAM OVERVIEW
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" gutterBottom>
              Program Pedagogy
            </Typography>
            <Typography variant="body1">Workshop mode</Typography>
            <Typography variant="body1">Brainstorming sessions</Typography>
            <Typography variant="body1">Presentations</Typography>
            <Typography variant="body1">Simulation exercises</Typography>
            <Typography variant="body1">Internship</Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              About CYBER SECURITY & ETHICAL HACKING
            </Typography>
            <Typography variant="body2" paragraph>
              Cyber Security and Ethical Hacking is the combination of
              processes, practices, and technologies designed to protect
              networks, computers, programs, data and information from attack,
              damage, or unauthorized access. As Cyber threats are exponentially
              increasing, the need for Cyber Security specialists is soaring.
              There is a need to nurture Engineers & IT Professionals with new
              tools and technologies in security domain.
            </Typography>
            <Typography variant="h5" gutterBottom>
              Program OBJECTIVES
            </Typography>
            <Typography variant="body2" paragraph>
              KEONICS’ CYBER SECURITY & ETHICAL HACKING offers an innovative
              milestone–based learning initiative for students to build their
              skills using a step–by–step process.
            </Typography>

            <Typography variant="h5" gutterBottom>
              Program OUTCOMES
            </Typography>
            <Typography variant="body2">
              Facilitating learning based on latest tools in Cyber Security
              Analytics.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card variant="outlined" sx={{ marginBottom: 2, padding: 2 }}>
  <CardContent>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box display="flex" alignItems="center">
          <AccessTime sx={{ marginRight: 1 }} />
          <Box>
            <Typography variant="subtitle1">Duration</Typography>
            <Typography variant="body2" color="green">
              400 Hours
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box display="flex" alignItems="center">
          <CalendarToday sx={{ marginRight: 1 }} />
          <Box>
            <Typography variant="subtitle1">Next Batch Start Date</Typography>
            <Typography variant="body2" color="green">
              March 2023
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Box display="flex" alignItems="center">
          <School sx={{ marginRight: 1 }} />
          <Box>
            <Typography variant="subtitle1">Course Partner</Typography>
            <Typography variant="body2" color="green">
              KEONICS
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box display="flex" alignItems="center">
          <Verified sx={{ marginRight: 1 }} />
          <Box>
            <Typography variant="subtitle1">Certification</Typography>
            <Typography variant="body2" color="green">
              KEONICS, Govt. of Karnataka
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Box display="flex" alignItems="center">
          <LocationOn sx={{ marginRight: 1 }} />
          <Box>
            <Typography variant="subtitle1">Training Location</Typography>
            <Typography variant="body2" color="green">
              Orisys Academy, Trivandrum
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </CardContent>
</Card>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Enquire Now
            </Typography>
            <TextField
              label="Full Name*"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email Address*"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Mobile Number*"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Your Qualification*"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Name of your college"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <FormControl fullWidth margin="normal">
              <InputLabel id="district-select-label">
                --Please choose an option--
              </InputLabel>
              <Select
                labelId="district-select-label"
                label="District"
                fullWidth
              >
                <MenuItem value="district1">District 1</MenuItem>
                <MenuItem value="district2">District 2</MenuItem>
                <MenuItem value="district3">District 3</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />

            <FormControlLabel
              control={<Checkbox />}
              label="I accept the terms & conditions and terms of use"
            />

            <Button variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CyberSecurityOverview;
