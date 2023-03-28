import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { AppContext } from "../App";
import { founderGoal, otherGoals } from "../utils/constants";

const AskGoal = () => {
  const { activeStep, setActiveStep, formData, setFormData, setProgress } =
    useContext(AppContext);

    if(formData.role.trim() === '') {
      setProgress(75)
    }
    else {
      setProgress(60)
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
              What's your professional goal for the next 12 months? *
            </Typography>
            {formData.role === "Founder or CXO" ? (
              <Box
                sx={{ py: "20px", ml: "10px" }}
                aria-labelledby="askRole"
                value={formData.role}
                onChange={(e) => {
                  setFormData((val) => ({ ...val, role: e.target.value }));
                  setError(false);
                  setActiveStep(activeStep + 1);
                }}
                name="askRole"
              >
                {founderGoal.map((item) => (
                  <FormControlLabel
                    key={item}
                    sx={{
                      border:
                        formData.role === item
                          ? "3px solid #f4f4f4"
                          : "3px solid #a09e9ed2",
                      mt: "10px",
                      px: "15px",
                      py: "5px",
                      borderRadius: "5px",
                      transition: "all 200ms",
                      bgcolor: "#fcfbfb13",
                      fontSize: "12px",
                      "&:hover": {
                        bgcolor: "#edebeb43",
                      },
                      "& .PrivateSwitchBase-input": {
                        display: "none",
                      },
                    }}
                    value={item}
                    control={<Checkbox sx={{ display: "none" }} />}
                    label={item}
                  />
                ))}
              </Box>
            ) : (
              <Box
                sx={{ py: "20px", ml: "10px" }}
                aria-labelledby="askRole"
                value={formData.role}
                onChange={(e) => {
                  setFormData((val) => ({ ...val, role: e.target.value }));
                  setError(false);
                  setActiveStep(activeStep + 1);
                }}
                name="askRole"
              >
                {otherGoals.map((item) => (
                  <FormControlLabel
                    key={item}
                    sx={{
                      border:
                        formData.role === item
                          ? "3px solid #f4f4f4"
                          : "3px solid #a09e9ed2",
                      mt: "10px",
                      px: "15px",
                      py: "5px",
                      borderRadius: "5px",
                      transition: "all 200ms",
                      bgcolor: "#fcfbfb13",
                      fontSize: "12px",
                      "&:hover": {
                        bgcolor: "#edebeb43",
                      },
                      "& .PrivateSwitchBase-input": {
                        display: "none",
                      },
                    }}
                    value={item}
                    control={<Checkbox  />}
                    label={item}
                  />
                ))}
              </Box>
            )}
            {/* <RadioGroup
              sx={{ py: "20px", ml: "10px" }}
              aria-labelledby="askRole"
              value={formData.role}
              onChange={(e) => {
                setFormData((val) => ({ ...val, role: e.target.value }));
                setError(false)
                setActiveStep(activeStep + 1)
              }}
              name="askRole"
            >
              {founderGoal.map((item) => (
                <FormControlLabel
                  key={item}
                  sx={{
                    border:
                      formData.role === item
                        ? "3px solid #f4f4f4"
                        : "3px solid #a09e9ed2",
                    mt: "10px",
                    px: "15px",
                    py: "5px",
                    borderRadius: "5px",
                    transition: "all 200ms",
                    bgcolor: "#fcfbfb13",
                    fontSize: "12px",
                    "&:hover": {
                      bgcolor: "#edebeb43",
                    },
                    "& .PrivateSwitchBase-input": {
                      display: "none",
                    },
                  }}
                  value={item}
                  control={<Radio sx={{ display: "none" }} />}
                  label={item}
                />
              ))}
            </RadioGroup> */}
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

export default AskGoal;
