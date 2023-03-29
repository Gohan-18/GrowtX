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
import React, { useContext, useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { AppContext } from "../App";

const AskPhoneNo = () => {
  const {
    activeStep,
    setActiveStep,
    formData,
    setFormData,
    error,
    setError,
    setProgress,
    flags,
  } = useContext(AppContext);

  const [flag, setFlag] = useState(flags[109])

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

    if (formData.phone.trim() === "" || formData.phone.length < 10 || formData.phone.length > 10) {
      setError(true);
    } else {
      console.log("success");
      setProgress(100);
      setActiveStep(activeStep + 1);
    }
  }

  function handleChange(e) {
    setError(false);
    setFormData((val) => ({ ...val, phone: e.target.value }));
  }

  function handleFlagChange(e) {
    console.log(flags.indexOf(e.target.value))
    setFlag(flags[flags.indexOf(e.target.value)])
  }

  useEffect(() => {
    if (formData.phone.length) {
      setProgress(100);
    }
    else {
      setProgress(85);
    }
  }, [formData.phone])
  

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
            <Box sx={{ my: "20px", display: 'flex', gap: 3, }}>
              <Select
              // sx={{mx: '10px'}}
                // displayEmpty
                // labelId="countryList"
                variant="standard"
                id="countryList"
                value={flag}
                // label="Type or select an option"
                autoWidth
              //   input={<img
              //     src={`https://flagcdn.com/28x21/za.png`}
              //     srcset={`https://flagcdn.com/32x24/za.png 2x,
              // https://flagcdn.com/48x36/za.png 3x`}
              //     width="28"
              //     height="21"
              //     alt={`item`}
              //   />}
                onChange={handleFlagChange}
              >
                {flags.map((item) => (
                  <MenuItem                     sx={{
                    // color: '#f4f4f4',
                    width: "100%",
                    border :'3px solid #a09e9ed2',
                    // border:
                    //   formData.goal[0] === item || formData.goal[1] === item
                    //     ? "3px solid #f4f4f4"
                    //     : "3px solid #a09e9ed2",
                    my: "5px",
                    // px: "25px",
                    // py: "5px",
                    transition: "all 200ms",
                    // bgcolor: "#fcfbfb13",
                    fontSize: "12px",
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
                  }} value={item} key={item}>
                    <img
                    style={{margin: '5px 10px 5px 10px'}}
                      src={`https://flagcdn.com/28x21/${item}.png`}
                  //     srcset={`https://flagcdn.com/32x24/za.png 2x,
                  // https://flagcdn.com/48x36/za.png 3x`}
                      width="28"
                      height="21"
                      alt={item}
                    />
                  </MenuItem>
                ))}
              </Select>
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
            </Box>

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
