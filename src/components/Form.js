import { Button, TextField, Box, Typography,Grid } from '@mui/material';
import { useState } from 'react';

const ScoutingReports = () => {
  
  const [formInput, setFormInput] = useState({
    scout: '',
    player: '',
    event: '',
    report: '',
    team: ''
  });

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    console.log("submit");
    const response = await fetch('/abcde', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formInput)
    });
  
      if (response.ok) {
        console.log('Report submitted successfully');
      } else {
        console.error('Failed to submit report');
      }
    
  };
  

  return (
    <Box sx={{ flexGrow: 1, paddingRight: { sm: '10rem', xs: '5.0rem' }, paddingLeft:{sm:'10rem', xs:'5rem'},bgcolor: '#f6f6f6',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h5" gutterBottom>Scouting Reports</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        label="Scout"
                        name="scout"
                        value={formInput.scout}
                        onChange={handleChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        label="Player"
                        name="player"
                        value={formInput.player}
                        onChange={handleChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}> 
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        label="Event"
                        name="event"
                        value={formInput.event}
                        onChange={handleChange}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        label="Team"
                        name="team"
                        value={formInput.team}
                        onChange={handleChange}
                        fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        rows={4}
                        label="Report"
                        name="report"
                        value={formInput.report}
                        onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Box spacing={2} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Button
                    type="submit"
                    required
                    variant="contained"
                    color="primary"
                    >
                    Submit Report
                    </Button>
                </Box>
                
            </form>
        </Box>


  );
};

export default ScoutingReports;
