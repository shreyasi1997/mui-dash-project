import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography, Box, Divider, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const MonthlyUserAnalysis = () => {
  // Access the data from Redux state
  const data = useSelector((state) => state.graph.monthlyUserData);

  return (
    <Box sx={{ p: 2, backgroundColor: 'white', borderRadius: 1, border: '2px solid white' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Monthly User Analysis
        </Typography>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
      <Divider sx={{ my: 2 }} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={data}
            margin={{
              top: 20, // Adjust top margin to create space above bars
              bottom: 20,
            }}
            barCategoryGap="20%" // Ensures bars are placed at the start and equally spaced
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis ticks={[120, 100, 80, 60, 40, 20, 0]} /> {/* Custom Y-axis ticks */}
            <Tooltip />
            <Legend />
            <Bar dataKey="ActiveUsers" fill="#0088FE" />
            <Bar dataKey="PremiumUsers" fill="#FFBB28" />
            <Bar dataKey="NewUsers" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Box>
  );
};

export default MonthlyUserAnalysis;
