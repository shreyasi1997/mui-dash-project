import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/system';
import { setUsers } from '../../features/userSlice';
const StyledPagination = styled(Pagination)({
  '& .MuiPaginationItem-root': {
    borderRadius: '4px',
    border: '1px solid green',
    backgroundColor: 'transparent',
  },
});
const MostlikeUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users); // Access users from Redux state
console.log("Most like users",users)
  useEffect(() => {
    // Simulating data fetching or API call
    const fetchedUsers = [
      { id: 1, name: 'John Brown', email: 'john@example.com', mobile: '+1234567890', gender: 'Male', country: 'USA', city: 'New York', activeTime: '2 hours', lastSeen: '1 day ago' },
      { id: 2, name: 'Jim Green', email: 'jim@example.com', mobile: '+9876543210', gender: 'Male', country: 'UK', city: 'London', activeTime: '5 hours', lastSeen: '2 hours ago' },
      { id: 3, name: 'Joe Black', email: 'joe@example.com', mobile: '+1122334455', gender: 'Male', country: 'Australia', city: 'Sydney', activeTime: '24 hours', lastSeen: '3 days ago' },
      
    ];

    // Dispatch the action to set users in Redux store
    dispatch(setUsers(fetchedUsers));
  }, [dispatch]);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Most Liked Users
      </Typography>
      <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#007bff' }}>
              <TableCell sx={{ color: 'white' }}>User ID</TableCell>
              <TableCell sx={{ color: 'white' }}>User Name</TableCell>
              <TableCell sx={{ color: 'white' }}>Registered Email</TableCell>
              <TableCell sx={{ color: 'white' }}>Registered Mobile</TableCell>
              <TableCell sx={{ color: 'white' }}>Gender</TableCell>
              <TableCell sx={{ color: 'white' }}>Country</TableCell>
              <TableCell sx={{ color: 'white' }}>City</TableCell>
              <TableCell sx={{ color: 'white' }}>Active Time</TableCell>
              <TableCell sx={{ color: 'white' }}>Last Seen</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f8f9fa' }, '&:nth-of-type(even)': { backgroundColor: 'white' } }}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.mobile}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.country}</TableCell>
                <TableCell>{user.city}</TableCell>
                <TableCell>{user.activeTime}</TableCell>
                <TableCell>{user.lastSeen}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
          <StyledPagination count={1} color="primary" />
        </Box>
      </TableContainer>
    </Box>
  );
};

export default MostlikeUser;
