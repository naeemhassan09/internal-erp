import React from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { logout } from '../../store/thunks/auth';

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout({}));
  };

  return (
    <>
      <Typography variant='h1'>Dashboard - Admin Only</Typography>
      <Box>
        <Button variant='contained' onClick={ handleLogout }>
          <Box>
            <Typography>Logout</Typography>
          </Box>
        </Button>
      </Box>
    </>
  );
};
