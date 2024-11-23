import React from "react";
import { Box, Typography, Chip, createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

// Create a custom theme with purple as the primary color
const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: purple[300],
        },
    },
});

// Event data including image URLs
const events = [
    {
        id: 1,
        day: "11",
        monthYear: "March, 2023",
        title: "Will ChatGPT take away tech jobs?",
        description:
            "Join Olysys Academy for an insightful webinar on 'Will ChatGPT take away tech jobs?' with Dr. Sahil Kumar...",
        pastEvent: true,
        dateTime: "Fri, 31st March, 2023 4 PM",
        //venue: "Online",
        organizer: "Olysys Academy Skill Development & Research",
        image: "https://orisysacademy.com/wp-content/uploads/2023/03/96CF2EF7-3F53-42EB-8605-63CFC0A1E6BA-500x350.jpeg",
    },
    {
        id: 2,
        day: "10",
        monthYear: "October, 2020",
        title: "Develop your own mobile application",
        description:
            "JG Trivandrum Smart City in association with Inle Intelligent Solutions Pvt. Ltd & Olysys Academy...",
        pastEvent: true,
        dateTime: "20th October, 2020 8 PM",
        //venue: "Online",
        organizer: "JG Trivandrum Smart City",
        image: "https://orisysacademy.com/wp-content/uploads/2020/10/1x2XX-500x350.jpg",
    },
    {
        id: 3, // Corrected ID
        day: "26",
        monthYear: "September, 2020",
        title: "Introduction to data analytics (OUVE Analytics)",
        description:
            "Introduction To Data Analytics (Ouve Analytics) Free Registration Limited Seats, register now! Registration link: ouveanalytics.com/events",
        pastEvent: true,
        dateTime: "26 September, 2020 7 PM to 26 September, 2020 8 PM",
        venue: "Online",
        //organizer: "JG Trivandrum Smart City",
        image: "https://orisysacademy.com/wp-content/uploads/2020/09/Introduction-to-data-analytics-OUVE-Analytics-500x350.jpg",
    },
    {
        id: 4, // Corrected ID
        day: "26",
        monthYear: "August, 2020",
        title: "TELL ME HOW – Can I get Placed after COVID",
        description:
            "JCI Trivandrum Smart City in association with Liz Intelligent Solutions Pvt. Ltd. & Orisys Academy of Research and Development is inviting you to a webinar on TELL ME HOW – Can I get Placed after COVID Who Must Attend? B.Tech Graduates, IT Job Aspirants, Fresh Graduates, Internship Candidates, Final Year Students. Are you someone who […]",
        pastEvent: true,
        dateTime: " 23 August, 2020 5 PM to 23 August, 2020 7 PM",
        venue: "Online",
        //organizer: "JG Trivandrum Smart City",
        image: "https://orisysacademy.com/wp-content/uploads/2020/08/TELL-ME-HOW-Can-I-get-Placed-after-COVID-500x350.jpeg",
    },
    {
        id: 5, // Corrected ID
        day: "10",
        monthYear: "May, 2020",
        title: "Online workshop on Artificial Intelligence",
        description:
            "JCI Trivandrum Smart City in association with Liz Intelligent Solutions Pvt. Ltd. & Orisys Academy of Research and Development is inviting you to a free online workshop on Artificial Intelligence",
        pastEvent: true,
        dateTime: "  10 May, 2020 6 PM to 10 May, 2020 8 PM",
        venue: "Online",
        //organizer: "JG Trivandrum Smart City",
        image: "https://orisysacademy.com/wp-content/uploads/2020/05/Artificial-Intelligence-500x350.jpeg",
    },
    {
        id: 6, // Corrected ID
        day: "02",
        monthYear: "October, 2019",
        title: "Blogging / Video Blogging / Photography – One Day Workshop by Trivandrum Vloggers",
        description:
            "JCI Trivandrum Smart City in association with Liz Intelligent Solutions Pvt. Ltd. & Orisys Academy of Research and Development is inviting you to a free online workshop on Artificial Intelligence",
        pastEvent: true,
        dateTime: " 02 October, 2019 10 AM to 02 October, 2019 2 PM",
        //venue: "Online",
        organizer: "Orisys Academy for Skill Development & Research",
        image: "https://orisysacademy.com/wp-content/uploads/2019/10/vlogging-workshop-e1569927342847-500x350.jpeg",
    },
    {
        id: 7, // Corrected ID
        day: "04",
        monthYear: "September, 2019",
        title: "Session on Agile & Scrum",
        description:
            "Most of the agile development methods break a problem into smaller tasks. There is no direct long-term planning for any requirement.",
        pastEvent: true,
        dateTime: " 04 September, 2019 5 PM to 04 September, 2019 7 PM",
        //venue: "Online",
        organizer: "Orisys Academy for Skill Development & Research",
        image: "https://orisysacademy.com/wp-content/uploads/2019/10/2-min-500x350.jpeg",
    },
    // Add other events as needed
];

const EventCard = ({ event }) => {
    const navigate = useNavigate();

    const handleEventopenClick = () => {
        navigate('/eventopen');
    };

    return (
        <Box
            
            sx={{
                display: "flex",
                mb: 3,
                flexDirection: { xs: "column", sm: "row" },
                p: 4, // Increased padding
                borderRadius: "8px",
                borderBottom: "1px solid #e0e0e0", // Add a subtle border for separation
            }}
        >
            {/* Image Section */}
            <Box
            onClick={handleEventopenClick}
                sx={{
                    width: { xs: "100%", sm: "300px" }, // Increased width
                    mr: 4, // Increased margin
                    mb: { xs: 4, sm: 0 }, // Increased margin
                    overflow: "hidden",
                    borderRadius: "4px",
                }}
            >
                <img
                    src={event.image}
                    alt={event.title}
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "8px", // Added border radius
                    }}
                />
            </Box>

            {/* Event Details Section */}
            <Box sx={{ flex: 1 }}>
                {/* Date Section */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2, // Increased margin
                    }}
                >
                    <Box
                        sx={{
                            width: "80px", // Increased width
                            height: "80px", // Increased height
                            backgroundColor: "#E8F5E9",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 3, // Increased margin
                        }}
                    >
                        <Typography variant="h4" color="primary"> {/* Increased font size */}
                            {event.day}
                        </Typography>
                    </Box>
                    <Typography variant="subtitle1" color="text.secondary"> {/* Increased font size */}
                        {event.monthYear}
                    </Typography>
                </Box>

                <Typography variant="h5" color="primary" gutterBottom> {/* Increased font size */}
                    {event.title}
                </Typography>
                <Typography variant="body1" gutterBottom> {/* Increased font size */}
                    {event.description}
                </Typography>

                {/* Past Event Badge */}
                {event.pastEvent && (
                    <Chip label="Past Event" color="error" variant="outlined" sx={{ mb: 2 }} /> // Increased margin
                )}

                {/* Date & Venue Info */}
                <Box sx={{ mt: 2 }}> {/* Increased margin */}
                    <Typography variant="body1" color="text.secondary"> {/* Increased font size */}
                        📅 {event.dateTime}
                    </Typography>
                    <Typography variant="body1" color="text.secondary"> {/* Increased font size */}
                        📍 {event.venue}
                    </Typography>
                    <Typography variant="body1" color="text.secondary"> {/* Increased font size */}
                        🏫 {event.organizer}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

const EventList = () => (
    <ThemeProvider theme={theme}>
        <Box sx={{ maxWidth: 1200, mx: "auto", p: 4 }}> {/* Increased maxWidth and padding */}
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </Box>
    </ThemeProvider>
);

export default EventList;
