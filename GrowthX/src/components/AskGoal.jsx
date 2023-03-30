import {
  Alert,
  Box,
  Button,
  Checkbox,
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
import { founderGoal, otherGoals } from "../utils/constants";

// const newArr = [];

const AskGoal = () => {
  const {
    activeStep,
    setActiveStep,
    formData,
    setFormData,
    setProgress,
    error,
    setError,
  } = useContext(AppContext);

  const newArr = formData.goal;

  // console.log(newArr);

  useEffect(() => {
    if (formData.goal.length === 0) {
      setProgress(60);
    } else {
      setProgress(75);
    }
  }, [formData.goal]);

  function handleChange(item) {
    // console.log(item);
    setError(false);

    if (newArr[0] === item || newArr[1] === item) {
      let index = newArr.indexOf(item);
      if (index !== -1) {
        newArr.splice(index, 2);
        setFormData((val) => ({ ...val, goal: newArr }));
      }
    } else {
      setFormData((val) => {
        if (newArr.length < 2) {
          newArr.push(item);
          return { ...val, goal: newArr };
        } else {
          newArr.pop();
          newArr.push(item);
          return { ...val, goal: newArr };
        }
      });
    }
  }

  function handleNext() {
    if (formData.goal.length === 2) {
      setActiveStep(activeStep + 1);
    } else {
      setError(true);
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
              What's your professional goal for the next 12 months? *
            </Typography>
            {formData.role === "Founder or CXO" ? (
              <Box
                sx={{
                  py: "20px",
                  ml: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {founderGoal.map((item) => (
                  <IconButton
                    className="button"
                    disableRipple
                    disabled={
                      formData.goal.length === 2
                        ? formData.goal[0] === item || formData.goal[1] === item
                          ? false
                          : true
                        : false
                    }
                    key={item}
                    onClick={() => handleChange(item)}
                    sx={{
                      // color: '#f4f4f4',
                      width: "100%",
                      border:
                        formData.goal[0] === item || formData.goal[1] === item
                          ? "3px solid #f4f4f4"
                          : "3px solid #a09e9ed2",
                      mt: "10px",
                      px: "25px",
                      py: "5px",
                      transition: "all 200ms",
                      bgcolor: "#fcfbfb13",
                      fontSize: "12px",
                      "&:hover": {
                        bgcolor: "#edebeb43",
                      },
                      "& .PrivateSwitchBase-input": {
                        display: "none",
                      },
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "20px",
                        },
                        textAlign: "start",
                      }}
                    >
                      {item}
                    </Typography>
                  </IconButton>
                ))}
              </Box>
            ) : (
              <Box
                sx={{
                  py: "20px",
                  ml: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {otherGoals.map((item) => (
                  <IconButton
                    className="button"
                    disableRipple
                    disabled={
                      formData.goal.length === 2
                        ? formData.goal[0] === item || formData.goal[1] === item
                          ? false
                          : true
                        : false
                    }
                    key={item}
                    onClick={() => handleChange(item)}
                    sx={{
                      // color: '#f4f4f4',
                      width: "100%",
                      border:
                        formData.goal[0] === item || formData.goal[1] === item
                          ? "3px solid #f4f4f4"
                          : "3px solid #a09e9ed2",
                      mt: "10px",
                      px: "25px",
                      py: "5px",
                      transition: "all 200ms",
                      bgcolor: "#fcfbfb13",
                      fontSize: "12px",
                      "&:hover": {
                        bgcolor: "#edebeb43",
                      },
                      "& .PrivateSwitchBase-input": {
                        display: "none",
                      },
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "20px",
                        },
                        textAlign: "start",
                      }}
                    >
                      {item}
                    </Typography>
                  </IconButton>
                ))}
              </Box>
            )}
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
                Please select more choices!!
              </Alert>
            ) : (
              <Button
                onClick={handleNext}
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

export default AskGoal;

{
  /* <RadioGroup
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
            </RadioGroup> */
}

// <FormControlLabel
//   key={item}
//   sx={{
//     border:
//       formData.role === item
//         ? "3px solid #f4f4f4"
//         : "3px solid #a09e9ed2",
//     mt: "10px",
//     px: "15px",
//     py: "5px",
//     borderRadius: "5px",
//     transition: "all 200ms",
//     bgcolor: "#fcfbfb13",
//     fontSize: "12px",
//     "&:hover": {
//       bgcolor: "#edebeb43",
//     },
//     "& .PrivateSwitchBase-input": {
//       display: "none",
//     },
//   }}
//   value={item}
//   // control={<Radio sx={{display: "none"}} />}
//   label={item}
// />
