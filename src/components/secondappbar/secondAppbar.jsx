import React from 'react';
import { Box, Button, Typography } from '@mui/material';

// Importing Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const SecondAppbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Shadow below the Box
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button sx={{ color: 'black', textTransform: 'none' }}>
          <DashboardIcon sx={{ color: '#ffc107', marginRight: '4px' }} />
          <Typography sx={{ color: '#ffc107' }}>Dashboard</Typography>
        </Button>
        <Button sx={{ color: 'black', textTransform: 'none' }}>
          <PersonIcon sx={{ color: 'black', marginRight: '4px' }} />
          User
        </Button>
        <Button sx={{ color: 'black', textTransform: 'none' }}>
          <SubscriptionsIcon sx={{ color: 'black', marginRight: '4px' }} />
          Subscriptions
        </Button>
        <Button sx={{ color: 'black', textTransform: 'none' }}>
          <AttachMoneyIcon sx={{ color: 'black', marginRight: '4px' }} />
          Transactions
        </Button>
        <Button sx={{ color: 'black', textTransform: 'none' }}>
          <AssessmentIcon sx={{ color: 'black', marginRight: '4px' }} />
          Reports
        </Button>
        <Button sx={{ color: 'black', textTransform: 'none' }}>
          <SettingsIcon sx={{ color: 'black', marginRight: '4px' }} />
          Field Management
        </Button>
        <Button sx={{ color: 'black', textTransform: 'none' }}>
          <ManageAccountsIcon sx={{ color: 'black', marginRight: '4px' }} />
          Content Management
        </Button>
      </Box>

      {/* Admin/Dashboard Text */}
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Typography sx={{ color: 'black' }}>Admin/</Typography>
        <Typography sx={{ color: '#ffc107', fontWeight: 'bold' }}>Dashboard</Typography>
      </Box>
    </Box>
  );
}

export default SecondAppbar;
