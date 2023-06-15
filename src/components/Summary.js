import { createTheme, ThemeProvider, styled } from '@mui/system';
import {  Typography, Grid, Box} from '@mui/material';

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
        <Grid container sx={{marginTop: '5.5rem'}}>
            <Grid item xs={0} sm={0} md={1} style={{ borderTop: '0.5px solid white', borderBottom: '0.5px solid white',backgroundColor: 'darkred'}}>
            </Grid>
            <Grid item xs={6} sm={6} md={2.5} style={{ borderTop: '0.5px solid white', borderBottom: '0.5px solid white',backgroundColor: 'darkred', alignItems: 'center', justifyContent: 'center'}}>
                <Box sx={{ padding: { xs: '0.8rem', sm: '1.2rem', md: '2rem' }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1.1rem' }, borderRight: '0.5px solid white', borderLeft: '0.5px solid white' }}>
                    <Typography variant="body1">
                        PPG
                    </Typography>
                    <Typography variant="body1" sx ={{fontWeight:'bolder'}}>
                        5.6
                    </Typography>
                    <Typography variant="body1">
                        RPG
                    </Typography>
                    <Typography variant="body1" sx ={{fontWeight:'bolder'}}>
                        2.4
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={2.5} style={{ borderTop: '0.5px solid white', borderBottom: '0.5px solid white',backgroundColor: 'darkred'}}>
                <Box sx={{ padding: { xs: '0.8rem', sm: '1.2rem', md: '2rem' }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1.1rem' }, borderRight: '0.5px solid white', borderLeft: '0.5px solid white' }}>
                    <Typography variant="body1">
                        APG
                    </Typography>
                    <Typography variant="body1" sx ={{fontWeight:'bolder'}}>
                        16.6
                    </Typography>
                    <Typography variant="body1">
                        PIE
                    </Typography>
                    <Typography variant="body1" sx ={{fontWeight:'bolder'}}>
                        7.6
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5} style={{ borderTop: '0.5px solid white', borderBottom: '0.5px solid white',backgroundColor: 'darkred' }}>
                <Grid container>
                    <Grid item xs={6} sm={6} md={6} style={{ borderBottom: '0.25px solid white', borderRight: '0.5px solid white'}}>
                    <Box sx={{ padding: { xs: '0.4rem', sm: '0.6rem', md: '1rem' }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1.1rem' }}}>
                            AGE:
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1.1rem' }, fontWeight: 'bold' }}>
                            28 Years
                        </Typography>
                    </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} style={{ borderBottom: '0.25px solid white',borderRight: '0.5px solid white'}}>
                    <Box sx={{ padding: { xs: '0.4rem', sm: '0.6rem', md: '1rem' }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1.1rem' }}}>
                            EXPERIENCE:
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1.1rem' }, fontWeight: 'bold' }}>
                            4 Years
                        </Typography>
                    </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} style={{ borderTop: '0.25px solid white', borderRight: '0.5px solid white'}}>
                    <Box sx={{ padding: { xs: '0.4rem', sm: '0.6rem', md: '1rem' }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1.1rem' }}}>
                            COUNTRY:
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1.1rem' }, fontWeight: 'bold' }}>
                            USA
                        </Typography>
                    </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} style={{ borderTop: '0.25px solid white', borderRight: '0.5px solid white'}}>
                    <Box sx={{ padding: { xs: '0.4rem', sm: '0.6rem', md: '1rem' }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1.1rem' }}}>
                            DREAM:
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white', fontSize: { xs: '0.5rem', sm: '0.7rem', md: '1.1rem' }, fontWeight: 'bold' }}>
                            GET AN INTERN
                        </Typography>
                    </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={1} style={{ borderTop: '0.5px solid white', borderBottom: '0.5px solid white',backgroundColor: 'darkred' }}>
            </Grid>
        </Grid>
    </ThemeProvider>
  );
}


export default Summary;
