import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App';

const Confirmation = () => {

    const {formData, setFormData, setProgress} =
    useContext(AppContext);

    useEffect(() => {
        setFormData({
            fName: "",
            lName: "",
            industry: "",
            role: "",
            goal: [],
            mail: "",
            phone: "",
          });
        setProgress(0)
    }, [])
    

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
              All done! Thanks for your time.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Confirmation