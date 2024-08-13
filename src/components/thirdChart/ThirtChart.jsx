import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Typography, Box, Stack } from '@mui/material';

const data = [
  { name: 'Jan \'23', value: 30 },
  { name: 'Feb \'23', value: 20 },
  { name: 'Mar \'23', value: 50 },
  { name: 'Apr \'23', value: 70 },
  { name: 'May \'23', value: 80 },
  { name: 'Jun \'23', value: 110 },
  { name: 'Jul \'23', value: 130 },
  { name: 'Aug \'23', value: 120 },
  { name: 'Sep \'23', value: 100 },
  { name: 'Oct \'23', value: 90 },
  { name: 'Nov \'23', value: 95 },
];

const ThirtChart = () => {
  return (
    <Box sx={{ p: 2, backgroundColor: 'white', borderRadius: 1, border: '2px solid white' }}>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
        {/* Small Rectangle Box with a Small AreaChart */}
        <Box
          sx={{
            width: 60,
            height: 40,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis hide />
              <YAxis hide />
              <Area type="monotone" dataKey="value" stroke="blue" fill="yellow" />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
        <Typography variant="h6" component="div" fontWeight="bold">
          Total Subscription Amount
        </Typography>
      </Stack>
      <Typography variant="h4" color="text.primary" gutterBottom fontWeight="bold">
        $8,999
      </Typography>
      <ResponsiveContainer width="100%" height={450}>
        <AreaChart
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="blue" fill="yellow" />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ThirtChart;
