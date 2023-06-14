import { createTheme, ThemeProvider, styled } from '@mui/system';
import {  Typography, Grid} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto",arial,sans-serif',
  },
  palette: {
    primary: {
      main: 'white',
    },
    secondary: {
      main: 'black',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

function Summary() {
  return (
    <ThemeProvider theme={theme}>
        <Grid container spacing={3} style={{ maxWidth: '100%', height: 'auto',position: 'relative', top: '5rem'}}>
            <Grid item xs={12} sm={6} md={5} style={{ paddingLeft:'6rem',paddingRight: '5rem'}}>
                <img
                src="https://cdn.nba.com/headshots/nba/latest/1040x760/203506.png"
                style={{ maxWidth: '110%',height:'auto'}}
                alt="Player Headshot"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={7} sx={{lineHeight: '0.9'}}>
                <Typography variant="body1" sx = {{paddingLeft:'3rem',fontSize: {xs: '1.5rem', sm: '1.7rem', md: '2.1rem' }}} >
                    Miami Heat | #4 | SG
                </Typography>
                <Typography variant="h5" sx={ {paddingLeft:'3rem',fontWeight: 'bolder',fontSize: { xs: '2rem', sm: '3.2rem', md: '4.4rem' }}}>
                    Victor
                </Typography>
                <Typography variant="h5" sx={ {paddingLeft:'3rem',fontWeight: 'bolder',fontSize: { xs: '2rem', sm: '3.2rem', md: '4.4rem' }}}>
                    Oladipo
                </Typography>
            </Grid>
        </Grid>
        <Grid container sx={{marginTop: '5rem'}}>
            <Grid item xs={12} sm={12} md={1} style={{ borderTop: '2px solid white', borderBottom: '2px solid white',backgroundColor: 'darkred'}}>
            </Grid>
            <Grid item xs={12} sm={12} md={2.5} style={{ borderTop: '2px solid white', borderBottom: '2px solid white',backgroundColor: 'darkred', alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant="body1" sx = {{color:'white', fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1.1rem' }, borderRight:'0.5px solid white',borderLeft:'1px solid white'}}>
                    <Typography sx={{padding:{ xs: '1rem', sm: '2rem', md: '2.5rem' },display:'flex',alignItems: 'center', justifyContent: 'center'}}>
                        PPG: 
                        <br/>
                        16.6
                        <br/>
                        RPG: 
                        <br/>
                        2.7
                    </Typography>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={2.5} style={{ borderTop: '2px solid white', borderBottom: '2px solid white',backgroundColor: 'darkred'}}>
                <Typography variant="body1" sx = {{color:'white', fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1.1rem' }, borderRight:'0.5px solid white',borderLeft:'0.5px solid white'}}>
                    <Typography sx={{padding:{ xs: '1rem', sm: '2rem', md: '2.5rem'},display:'flex',alignItems: 'center', justifyContent: 'center'}}>
                        APG:
                        <br/>
                        0.8
                        <br/>
                        PIE: 
                        <br/>
                        7.6
                    </Typography>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={5} style={{ borderTop: '2px solid white', borderBottom: '2px solid white',backgroundColor: 'darkred' }}>
            <Typography variant="body1" sx = {{color:'white', fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1.1rem' }, borderRight:'1px solid white',borderLeft:'0.5px solid white'}}>
                    <Typography sx={{padding:{ xs: '1rem', sm: '2rem', md: '2.5rem' },display:'flex',alignItems: 'center', justifyContent: 'center'}}>
                        EXPERIENCE: 
                        <br/>
                        4 Years
                        <br/>
                        Age: 
                        <br/>
                        28 Years
                    </Typography>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={1} style={{ borderTop: '2px solid white', borderBottom: '2px solid white',backgroundColor: 'darkred' }}>
            </Grid>
        </Grid>
    </ThemeProvider>
    
  );
}


export default Summary;
