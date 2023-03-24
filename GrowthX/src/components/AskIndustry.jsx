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
  const { activeStep, setActiveStep } = useContext(AppContext);

  const [industry, setIndustry] = useState("");

  function handleChange(e) {
    setIndustry(e.target.value);
  }

  return (
    <>
      <Box
        sx={{
          //   height: "100vh",
          //   height: '100%',
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
          //   overflow: 'scroll'
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
            <InputLabel id="industryList">Type or select an option</InputLabel>
            <Select
              labelId="industryList"
              id="industryList"
              value={industry}
              label="Type or select an option"
              onChange={handleChange}
              fullWidth
            >
              {industryList.map((item) => (
                <MenuItem value={item} key={item}>
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
    </>
  );
};

export default AskIndustry;
