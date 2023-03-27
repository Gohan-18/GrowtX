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
import React, { useContext, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { AppContext } from "../App";
import { industryList } from "../utils/constants";

const AskIndustry = () => {
  const { activeStep, setActiveStep, formData, setFormData } =
    useContext(AppContext);
  const [industry, setIndustry] = useState("");

  function handleChange(e) {
    setIndustry(e.target.value);
    setFormData((val) => ({...val, industry: e.target.value }));
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
                labelId="industryList"
                id="industryList"
                value={industry}
                label="Type or select an option"
                onChange={handleChange}
                fullWidth
              >
                {industryList.map((item) => (
                  <MenuItem
                  // defaultValue={formData.fName}
                    value={item}
                    key={item}
                    sx={{
                      "& .css-nn5bdz-MuiButtonBase-root-MuiMenuItem-root": {
                        border: "2px solid #fff",
                      },
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

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
      </Box>
    </>
  );
};

export default AskIndustry;
