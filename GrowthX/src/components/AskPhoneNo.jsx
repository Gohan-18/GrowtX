import {
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
  const { activeStep, setActiveStep, formData, setFormData } =
    useContext(AppContext);
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
            <Select
              displayEmpty
              labelId="countryList"
              id="countryList"
              value={"Country"}
              label="Type or select an option"
              // onChange={handleChange}
            >
              <MenuItem value={0}>1</MenuItem>
            </Select>
            <TextField
              type="number"
              required
              variant="standard"
              placeholder="08123456789"
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
          </FormControl>

          <Button
            onClick={() => setActiveStep(activeStep + 1)}
            variant="contained"
            sx={{ color: "#fff", backgroundColor: "#0077ff", mt: "5px" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
      </Box>
    </>
  );
};

export default AskPhoneNo;
