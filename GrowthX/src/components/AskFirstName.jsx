import { Alert, Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { AppContext } from "../App";

const AskName = () => {
  const { activeStep, setActiveStep, formData, setFormData, error, setError } =
    useContext(AppContext);

    function handleInput() {
      if(formData.fName === null || formData.fName === undefined || formData.fName === '') {
        setError(true)
      }
      else{
        // setError(false)
        setActiveStep(activeStep + 1);
      }
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
              What's your first name? *
            </Typography>
            {/* <form style={{width: '100%'}} > */}
            <TextField
              required
              variant="standard"
              defaultValue={formData.fName}
              onChange={(e) => {
                setFormData((val) => ({...val, fName: e.target.value }));
                setError(false)
              }}
              fullWidth
              placeholder="Type your answer here..."
              sx={{
                py: "10px",
                fontSize: "40px",
                "& .css-ume8vi-MuiInputBase-input-MuiInput-input ": {
                  fontSize: "25px",
                  color: "#f4f4f4",
                  pb: "5px",
                },
              }}
            />
            {error ? 
            <Alert sx={{fontSize: '16px',bgcolor: 'rgb(247, 230, 230)', color: 'rgb(175, 4, 4)', }} variant="filled" className="animate__animated animate__slideInUp" severity="error">Please fill this in!!</Alert>
            : 
            <Button
              // type='submit'
              // onClick={(e) => {
              //   // e.preventDefault();
              //   setActiveStep(activeStep + 1);
              // }}
              onClick={handleInput}
              endIcon={<CheckIcon />}
              variant="contained"
              sx={{ color: "#fff", backgroundColor: "#0077ff", mt: "5px" }}
            >
              Ok
            </Button>}
            {/* </form> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AskName;
