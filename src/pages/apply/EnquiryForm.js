import React from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Paper,
} from "@mui/material";

const districts = [
  { value: "", label: "–Please choose an option–" },
  { value: "District 1", label: "District 1" },
  { value: "District 2", label: "District 2" },
  { value: "District 3", label: "District 3" },
];

const EnquiryForm = () => {
  return (
    <Paper elevation={0} sx={{ padding: 4, maxWidth: 'auto', mt: 8, bgcolor: '#f1f1f1' }}>
      <Box
        display="flex"
        justifyContent="space-between"
        padding={2}
        bgcolor="#e1bee7" // Light purple background color
        mb={2}
      >
        <Box>
          <Typography variant="body1" color="text.secondary">
            Duration
          </Typography>
          <Typography variant="h6" sx={{ color: '#6A0DAD' }}> {/* Purple grapes color for text */}
            50 Hours
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" color="text.secondary">
            Fees
          </Typography>
          <Typography variant="h6" sx={{ color: '#6A0DAD' }}> {/* Purple grapes color for text */}
            ₹ 12000
          </Typography>
        </Box>
      </Box>
      <Typography variant="h5" mb={2} sx={{ color: '#6A0DAD' }}> {/* Purple grapes color for text */}
        Enquire Now
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          label="Full Name*"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#6A0DAD' } } }} // Purple border for text field
        />
        <TextField
          label="Email Address*"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#6A0DAD' } } }} // Purple border for text field
        />
        <TextField
          label="Mobile Number*"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#6A0DAD' } } }} // Purple border for text field
        />
        <TextField
          label="Your Qualification*"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#6A0DAD' } } }} // Purple border for text field
        />
        <TextField
          label="Name of your college"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#6A0DAD' } } }} // Purple border for text field
        />
        <TextField
          select
          label="District"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#6A0DAD' } } }} // Purple border for text field
        >
          {districts.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#6A0DAD' } } }} // Purple border for text field
        />
        <FormControlLabel
          control={<Checkbox sx={{ color: '#6A0DAD' }} />} // Purple color for checkbox
          label={
            <Typography variant="body2">
              I accept the{" "}
              <a href="#" style={{ color: "#6A0DAD" }}> {/* Purple grapes color for text */}
                terms & conditions
              </a>{" "}
              and{" "}
              <a href="#" style={{ color: "#6A0DAD" }}> {/* Purple grapes color for text */}
                terms of use
              </a>
            </Typography>
          }
        />
        <Button
          variant="contained"
          sx={{ marginTop: 2, backgroundColor: '#6A0DAD', color: 'white' }} // Purple grapes color for button
        >
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default EnquiryForm;
