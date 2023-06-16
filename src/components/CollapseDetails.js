import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// This is used for the details of the collapse under the table
// showing the meaning of the columns

const CollapseDetails = ({ open, glossary }) => {
    return (
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{ margin: 1 }}>
         <Typography sx={{padding:{sm:'0.5rem',xs:'0.1rem'}, fontWeight:'bolder', color:'grey', fontSize:'1.5rem'}}>Glossary</Typography>
          <Grid container sx={{paddingLeft:{sm:'0.5rem',xs:'0.1rem'},paddingBottom: '1rem'}}>
            {glossary.map((termPair, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                  <Typography variant="body2" sx={{paddingRight: '0.1rem', paddingBottom: '0.2rem'}}>
                    <strong>{termPair.term}:</strong> {termPair.definition}
                  </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Collapse>
    );
  };

export default CollapseDetails;
