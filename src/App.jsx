import React from "react";
import { Typography, AppBar, CssBaseline, Grid,  Container,  Box } from '@mui/material';
import PlayerCard from './PlayerCard';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: '#8B0000', height: '80px', width: '100%', display: 'flex', alignItems: 'left', justifyContent: 'center' }}>
        <Typography variant="h4" sx={{ pl: 3 ,fontStyle: 'italic',fontWeight: 'bold' }}>
          Miami HEAT
        </Typography>
      </AppBar>
     
      <main>
        <Container sx={{ py: 3, display: 'flex', justifyContent: 'center' }} maxWidth="xl">
          <Grid container spacing={4} justifyContent="flex-start">
            {cards.map((card, index) => (
              <Grid item key={card} xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                <PlayerCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </Box>
    </>
  );
}

export default App;
