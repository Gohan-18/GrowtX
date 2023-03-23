import { Box, LinearProgress } from '@mui/material'
import React, { useState } from 'react';
import GrowthXLogo from '../assets/Dark background full logo.svg'

const Header = () => {

    const [progress, setProgress] = useState(50)

  return (
    <Box sx={{position: 'fixed', top: 0, left: 0, right: 0}} >
    <LinearProgress variant="determinate" value={progress} />
    <Box sx={{width: '100%', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'start', px: '16px', backgroundColor: '#121212'}} >
        <img  style={{width: '100px'}} src={GrowthXLogo} alt='GrowthX logo' />
    </Box>
    </Box>
  )
}

export default Header