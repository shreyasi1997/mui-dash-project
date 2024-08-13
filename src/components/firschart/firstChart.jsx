import { Box, Typography } from '@mui/material';
import React from 'react';
import Month from '../MonthlyChart/Month';
import ThirtChart from '../thirdChart/ThirtChart';
import Totaluser from '../totalUser/Totaluser';
const FirstChart = () => {
    
  return (   
    <Box sx={{  padding: 2 }}>
      {/* Container for the three boxes */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        {/* First Box */}
        <Box sx={{ backgroundColor: '#f0f0f0', padding: 2, flex: 1 }}>
         <Totaluser/>
        </Box>

        {/* Second Box */}
        <Box sx={{ backgroundColor: 'white', padding: 2, flex: 1,height:"auto",marginTop:"30px" }}>
          <Month/>
        </Box>

        {/* Third Box */}
        <Box sx={{ backgroundColor: 'white', padding: 2, flex: 1 ,marginTop:"30px"}}>
          {/* <Typography>Content for the third box.</Typography> */}
          <ThirtChart/>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstChart;
