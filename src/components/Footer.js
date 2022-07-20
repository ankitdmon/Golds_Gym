import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
        
        <img src={Logo} alt="logo" style={{ width: '200px', height: '40px' }} />

        <Typography  variant="h5" sx={{ 
          fontSize: { lg: '14px', xs: '10px' } }} 
          mt="-20px" 
          textAlign="center" 
          pb="40px"
          color= "#993f43"
        >
         © 2022 Golds Gym, Inc.
        </Typography>

    </Stack>
    </Box>

  )
}

export default Footer