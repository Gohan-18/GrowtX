import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { AppContext } from "../App";

const AskMail = () => {
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
            Email you'd like to register with? *
          </Typography>
          <Typography
            gutterBottom
            sx={{ color: "#ffffffb3", fontSize: { xs: "16px", md: "20px" } }}
          >
            We will keep all our communications with you through this email. Do
            check your spam inbox if you can't find our application received
            email.
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
            [ 🔴DEVELOPER NOTICE: Responses submitted to this form will be
            forwarded to the email you input here, for you to test data
            submissions. ]
          </Typography>
          <TextField
            type="email"
            required
            variant="standard"
            fullWidth
            placeholder="name@example.com"
            sx={{
              py: "10px",
              fontSize: "40px",
              "& .css-ume8vi-MuiInputBase-input-MuiInput-input ": {
                fontSize: "30px",
                color: "#f4f4f4",
                pb: "5px",
              },
            }}
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

export default AskMail;
