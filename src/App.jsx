import { useState } from 'react';
import FirstNavbar from './components/firstappbar/Firstnav';
import SecondAppbar from './components/secondappbar/secondAppbar';
import FirstChartComponent from './components/firschart/firstChart';
import { Box} from '@mui/system';
import MostlikeUser from './components/mostlikeuser/MostlikeUser';

function App() {
  return (
    <>
      <FirstNavbar/>
      <SecondAppbar/>
      <Box sx={{ background: '#f0f0f0' ,height:'auto' ,width:'100%'}}>
        <FirstChartComponent/>
        <MostlikeUser/>
      </Box>
    </>
  );
}

export default App;
