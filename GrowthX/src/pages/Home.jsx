import { Typography, Box, Container, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import AskName from "../components/AskName";
import LandingPage from "../components/LandingPage";

function getCurrentStep (activeStep) {
    switch(activeStep) {
        case 0 : return <LandingPage/>
        case 1 : return <AskName/>
    }
}

const Home = () => {

    const {activeStep, setActiveStep} = useContext(AppContext);

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {getCurrentStep(activeStep)}
      </Box>
    </Container>
  );
};

export default Home;
