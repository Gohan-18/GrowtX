import {
  Alert,
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { AppContext } from "../App";
import { rolesList } from "../utils/constants";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const AskRole = () => {
  const { activeStep, setActiveStep, formData, setFormData, error, setError, setProgress } =
    useContext(AppContext);

    function handleInput() {
      if (
        formData.role === null ||
        formData.role === undefined ||
        formData.role.trim() === ''
      ) {
        setError(true);
      } else {
        // setError(false)
        setActiveStep(activeStep + 1);
      }
    }

    useEffect(() => {
      if(formData.industry.trim() === '') {
        setProgress(50)
      }
      else {
        setProgress(75)
      }
    }, [formData.industry])
    


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
              [ 🔴DEVELOPER NOTICE: Options in the questions ahead depend on
              this question's response/s. ]
            </Typography>
            <RadioGroup
              sx={{ py: "20px", ml: "10px" }}
              aria-labelledby="askRole"
              value={formData.role}
              onChange={(e) => {
                setFormData((val) => ({ ...val, role: e.target.value }));
                setFormData((val) => ({ ...val, goal: [] }));
                setError(false)
                setActiveStep(activeStep + 1)
              }}
              name="askRole"
            >
              {rolesList.map((item) => (
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
            </RadioGroup>
            {/* <TextField
            defaultValue={formData.role}
            onChange={(e) => {
              setFormData((val) => ({...val, role: e.target.value }));
            }}
            required
            variant="standard"
            fullWidth
            placeholder="Type your answer here..."
            sx={{ py: "10px", fontSize: "40px" }}
          /> */}
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

export default AskRole;
