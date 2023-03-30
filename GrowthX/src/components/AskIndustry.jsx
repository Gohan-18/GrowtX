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
import React, { useContext, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { AppContext } from "../App";
import { industryList } from "../utils/constants";

const AskIndustry = () => {
  const {
    activeStep,
    setActiveStep,
    formData,
    setFormData,
    error,
    setError,
    setProgress,
  } = useContext(AppContext);

  function handleChange(e) {
    setTimeout(() => {
      // setFormData((val) => ({ ...val, industry: e.target.value }));
      setError(false);
      setActiveStep(activeStep + 1);
    }, 600)
    // console.log(e)
    setFormData((val) => ({ ...val, industry: e.target.value }));
    // setError(false);
    // setActiveStep(activeStep + 1);
  }

  function handleInput() {
    if (formData.industry.trim() === "") {
      setError(true);
    } else {
      setActiveStep(activeStep + 1);
    }
  }

  // if(formData.industry.trim() === '') {
  //   setProgress(50)
  // }
  // else {
  //   setProgress(75)
  // }

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
              What industry is your company in? *
            </Typography>
            <Typography
              gutterBottom
              sx={{ color: "#ffffffb3", fontSize: { xs: "16px", md: "20px" } }}
            >
              We will personalize your learning experience accordingly
            </Typography>

            <FormControl fullWidth sx={{ my: "20px" }}>
              <InputLabel id="industryList">
                Type or select an option
              </InputLabel>
              <Select
                variant="standard"
                labelId="industryList"
                id="industryList"
                value={formData.industry}
                label="Type or select an option"
                onChange={handleChange}
                fullWidth
                // sx={{maxHeight: '200px'}}
              >
                {industryList.map((item) => (
                  <MenuItem
                  className="button"
                    sx={{
                      fontSize: "16px",
                      width: "100%",
                      border: "3px solid #a09e9ed2",
                      mb: "5px",
                      // px: "25px",
                      // py: "5px",
                      transition: "all 200ms",
                      // bgcolor: "#fcfbfb13",
                      // fontSize: "12px",
                      "&:hover": {
                        bgcolor: "#fcfbfb13",
                      },
                      // "& .PrivateSwitchBase-input": {
                      //   display: "none",
                      // },
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      borderRadius: "5px",
                      // maxHeight: ''
                    }}
                    value={item}
                    key={item}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Select>
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
                endIcon={<CheckIcon />}
                variant="contained"
                sx={{ color: "#fff", backgroundColor: "#0077ff", mt: "5px" }}
              >
                Ok
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AskIndustry;
