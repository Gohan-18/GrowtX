import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { AppContext } from "../App";

const AskPhoneNo = () => {
  const { activeStep, setActiveStep, formData, setFormData, error, setError } =
    useContext(AppContext);

  function handleInput() {
    // if (
    //   formData.phone === null ||
    //   formData.phone === undefined ||
    //   typeof formData.phone === 'string' ||
    //   formData.phone.trim() === ''
    // ) {
    //   setError(true);
    //   setFormData((val) => ({ ...val, phone: 0 }));
    // } else {
    //   // setError(false)
    //   setActiveStep(activeStep + 1);
    // }
  }

  function handleChange(e) {
    setFormData((val) => ({ ...val, phone: e.target.value }));
  }

  return (
    <>
      <Box
        className="animate__animated animate__slideInUp"
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
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
              Your phone number *
            </Typography>
            <Typography
              gutterBottom
              sx={{ color: "#ffffffb3", fontSize: { xs: "16px", md: "20px" } }}
            >
              We won't call you unless it is absolutely required to process your
              application.
            </Typography>
            <FormControl sx={{ my: "20px" }}>
              {/* <Select
              displayEmpty
              labelId="countryList"
              id="countryList"
              value={"Country"}
              label="Type or select an option"
              // onChange={handleChange}
            >
              <MenuItem value={0}>1</MenuItem>
            </Select> */}
              <TextField
                type="number"
                value={formData.phone}
                onChange={handleChange}
                required
                variant="standard"
                placeholder="08123456789"
                sx={{
                  // py: "10px",
                  fontSize: "40px",
                  "& .css-ume8vi-MuiInputBase-input-MuiInput-input ": {
                    fontSize: "25px",
                    color: "#f4f4f4",
                    pb: "5px",
                  },
                  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                    {
                      display: "none",
                    },
                  "& input[type=number]": {
                    MozAppearance: "textfield",
                  },
                }}
              />
            </FormControl>

            {error ? (
              <Alert
                sx={{
                  fontSize: "16px",
                  bgcolor: "rgb(247, 230, 230)",
                  color: "rgb(175, 4, 4)",
                }}
                variant="filled"
                className="animate__animated animate__slideInUp"
                severity="error"
              >
                Please fill this in!!
              </Alert>
            ) : (
              <Button
                onClick={handleInput}
                variant="contained"
                sx={{ color: "#fff", backgroundColor: "#0077ff" }}
              >
                Submit
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AskPhoneNo;
