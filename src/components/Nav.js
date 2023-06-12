import React from 'react';
import { AppBar, Box, Avatar, Typography,CssBaseline } from '@mui/material';

const Nav = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: '#8B0000', height: '80px', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-left', alignItems: 'center', height: '100%', width: '100%', paddingLeft: '15px' }}>
          <Avatar
            src="https://cdn.nba.com/teams/static/heat/imgs/global/team-logos-svg/MIA-mh.svg"
            alt="Miami HEAT MH Logo"
            title="Miami HEAT"
            sx={{ mr: 1, width: { xs: 35, sm: 50, md: 75 }, height: { xs: 35, sm: 50, md: 75 } }}
          />
          <Typography variant="h4" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>
            Miami HEAT
          </Typography>
        </Box>
      </AppBar>
    </>
  );
};

export default Nav;
