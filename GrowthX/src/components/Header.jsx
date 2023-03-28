import { Box, LinearProgress } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import GrowthXLogo from "../assets/Dark background full logo.svg";

const Header = () => {

  const { setActiveStep, progress, setProgress, formData } = useContext(AppContext);



  return (
    <Box sx={{ position: "fixed", top: 0, left: 0, right: 0 }}>
      <LinearProgress variant="determinate" value={progress} />
      <Box
        sx={{
          width: "100%",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          px: "16px",
          backgroundColor: "#121212",
        }}
      >
        <img
        className="animate__animated animate__slideInUp"
          onClick={() => setActiveStep(0)}
          style={{ width: "100px", cursor: "pointer" }}
          src={GrowthXLogo}
          alt="GrowthX logo"
        />
      </Box>
    </Box>
  );
};

export default Header;
