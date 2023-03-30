import { Typography, Box, Container, Button, IconButton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import AskName from "../components/AskFirstName";
import AskGoal from "../components/AskGoal";
import AskIndustry from "../components/AskIndustry";
import AskLastName from "../components/AskLastName";
import AskMail from "../components/AskMail";
import AskPhoneNo from "../components/AskPhoneNo";
import AskRole from "../components/AskRole";
import LandingPage from "../components/LandingPage";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Confirmation from "../components/Confirmation";

function getCurrentStep(activeStep) {
  switch (activeStep) {
    case 0:
      return <LandingPage />;
    case 1:
      return <AskName />;
    case 2:
      return <AskLastName />;
    case 3:
      return <AskIndustry />;
    case 4:
      return <AskRole />;
    case 5:
      return <AskGoal />;
    case 6:
      return <AskMail />;
    case 7:
      return <AskPhoneNo />;
    case 8:
      return <Confirmation />;
  }
}

function handleScroll() {}

const Home = () => {
  const { activeStep, setActiveStep, flags, setFlags } = useContext(AppContext);

  // async function fetchFlags () {
  //   await fetch('https://flagcdn.com/en/codes.json')
  //   .then((data) => data.json())
  //   .then((result) => {
  //     const flagsArray = Object.keys(result);
  //     setFlags(flagsArray)
  //   })
  // }

  // useEffect(() => {
  //   fetchFlags()
  // }, [])

  // console.log(flags)



  return (
    <Container maxWidth="md">
      <IconButton
        className="animate__animated animate__fadeIn"
        onClick={() => setActiveStep((prev) => prev - 1)}
        sx={{
          position: "fixed",
          top: "80px",
          right: "20px",
          zIndex: 50,
          display: activeStep === 0 || activeStep === 8 ? "none" : "flex",
        }}
      >
        <ArrowCircleUpIcon />
      </IconButton>
      <Box
        onScroll={handleScroll}
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
