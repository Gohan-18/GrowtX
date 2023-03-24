import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { AppContext } from "../App";

const AskRole = () => {
  const { activeStep, setActiveStep } = useContext(AppContext);

  return (
    <>
      <Box
        sx={{
          //   height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          gap: {
            xs: 1,
            md: 2,
          },
          px: {
            xs: "10px",
            sm: "50px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "12px",
              sm: "15px",
            },
            minWidth: "max-content",
            py: {
              xs: "6px",
              md: "8px",
            },
          }}
        >
          {activeStep} ➜
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            height: "100%",
            width: "100%",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            gutterBottom
            sx={{ color: "#fff", fontSize: { xs: "20px", md: "24px" } }}
          >
            Your role in your company? *
          </Typography>
          <Typography
            gutterBottom
            sx={{ color: "#ffffffb3", fontSize: { xs: "16px", md: "20px" } }}
          >
            We want to understand how you spend your time right now.
          </Typography>
          <Typography
            gutterBottom
            sx={{
              color: "#ffffffb3",
              fontSize: { xs: "16px", md: "20px" },
              pt: "20px",
              fontStyle: "italic",
            }}
          >
            [ 🔴DEVELOPER NOTICE: Options in the questions ahead depend on this
            question's response/s. ]
          </Typography>
          <TextField
            required
            variant="standard"
            fullWidth
            placeholder="Type your answer here..."
            sx={{ py: "10px", fontSize: "40px" }}
          />
          <Button
            onClick={() => setActiveStep(activeStep + 1)}
            endIcon={<CheckIcon />}
            variant="contained"
            sx={{ color: "#fff", backgroundColor: "#0077ff", mt: "5px" }}
          >
            Ok
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AskRole;
