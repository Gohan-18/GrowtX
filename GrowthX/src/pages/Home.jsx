import { Typography, Box, Container, Button } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          px: {
            xs: "30px",
            md: "50px",
          },
        }}
      >
        <Typography
          gutterBottom
          sx={{ color: "#fff", fontSize: { xs: "20px", md: "24px" } }}
        >
          Up-skilling requires time commitment
        </Typography>
        <Typography
        gutterBottom
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: { xs: "16px", md: "20px" },
          }}
        >
          The GrowthX experience is designed by keeping in mind the working
          hours founders & full time operators typically work in.
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: { xs: "16px", md: "20px" },
            py: '20px'
          }}
        >
          You will spend
          <span style={{display: 'block'}} >
          - 6 hours/week for the first 5 weeks
          </span>
          <span style={{display: 'block'}}>
          - 15 hours/week for the last 3 weeks
          </span>
        </Typography>
        <Button variant="contained" sx={{backgroundColor: 'rgb(0, 119, 255)', color: '#fff', fontWeight: '500'}} >I agree</Button>
      </Box>
    </Container>
  );
};

export default Home;
