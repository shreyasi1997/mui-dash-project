import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { Person, Star, Lock, Groups, Report, HowToReg } from '@mui/icons-material';

const data = [
  { name: 'Man', value: 57.9, color: '#0088FE' },
  { name: 'Woman', value: 42.1, color: '#00C49F' },
];

const stats = [
  { label: 'Total Users', value: 45, icon: <Person sx={{ color: '#FFFFFF' }} />, bgColor: '#7DCEA0' },
  { label: 'Premium Users', value: 20, icon: <Star sx={{ color: '#FFFFFF' }} />, bgColor: '#F8C471' },
  { label: 'Subscriptions', value: 15, icon: <Lock sx={{ color: '#FFFFFF' }} />, bgColor: '#5DADE2' },
  { label: 'Active Users', value: 12, icon: <Groups sx={{ color: '#FFFFFF' }} />, bgColor: '#82E0AA' },
  { label: 'New Registration', value: 5, icon: <HowToReg sx={{ color: '#FFFFFF' }} />, bgColor: '#73C6B6' },
  { label: 'Total Received Reports', value: 3, icon: <Report sx={{ color: '#FFFFFF' }} />, bgColor: '#E74C3C' },
];

const Totaluser = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                borderRadius: 2,
                height: '100%',
                boxSizing: 'border-box',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flex: 1,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flex: 1,
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{stat.label}</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{stat.value}</Typography>
                </Box>
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 0, // Rectangle shape
                    backgroundColor: stat.bgColor, // Unique background color for each icon
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 20, // Consistent width for all icons
                    height: 20, // Consistent height for all icons
                    mr: 2, // Margin to space the icon from the text
                  }}
                >
                  {stat.icon}
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}

        {/* Pie Chart */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, borderRadius: 2, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Gender Distribution</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Totaluser;
