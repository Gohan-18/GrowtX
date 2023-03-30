import { Alert, Box, Button, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

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

  const [value, setValue] = useState("");
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [mobileNoLength, setMobileNoLength] = useState("");

  async function sendFormData() {
    await fetch("https://eo3oi83n1j77wgp.m.pipedream.net", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async function handleInput() {
    if (
      formData.phone.trim() === "" ||
      formData.phone.length !== mobileNoLength
    ) {
      setError(true);
    } else {
      // console.log("success");
      setProgress(100);
      setLoadingBtn(true);
      await sendFormData();
      setLoadingBtn(false);
      setActiveStep(activeStep + 1);
    }
  }

  useEffect(() => {
    if (formData.phone.length) {
      setError(false);
      setProgress(100);
    } else {
      setProgress(85);
    }

    setFormData((val) => ({ ...val, phone: value }));
  }, [formData.phone, value]);

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
            <Box sx={{ my: "20px", display: "flex", gap: 3 }}>
              <PhoneInput
                placeholder="08123456789"
                className="phone"
                country={"in"}
                value={value}
                onChange={(phone, country, e) => {
                  setMobileNoLength(country.format.split(".").length - 1);
                  setValue(phone);
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
                Please input valid phone number!!
              </Alert>
            ) : (
              <LoadingButton
                loading={loadingBtn}
                onClick={handleInput}
                variant="contained"
                sx={{ color: "#fff", backgroundColor: "#0077ff" }}
              >
                Submit
              </LoadingButton>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AskPhoneNo;
