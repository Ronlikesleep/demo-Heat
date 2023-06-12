import React, { useEffect, useState } from "react";
import {Grid, Container } from '@mui/material';
import PlayerCard from './PlayerCard';
import data from './miamiHeat.json';
import Footer from "./Footer";
import Nav from "./Nav";

function App() {
  const [miaPlayers, setMiaPlayers] = useState([]);

  useEffect(() => {
    const players = [];

    data.depthChart.forEach(unit => {
      unit.players.forEach(player => {
        if (player && player.team === 'MIA') {
          const playerData = {
            firstName: player.firstName,
            lastName: player.lastName,
            height: player.height,
            weight: player.weight,
            homeCountry: player.homeCountry,
            photoUrl: player.photoUrl,
            jerseyNum: player.jerseyNum,
            position: player.position,
            birthDate: player.birthDate,
            yearsPro: player.yearsPro,
          };
          players.push(playerData);
        }
      });
    });

    setMiaPlayers(players);
  }, []);

  return (
    <>
      <Nav/>
      <main>
        <Container sx={{ py: 3, display: 'flex', justifyContent: 'center' }} maxWidth="xl">
          <Grid container spacing={2} justifyContent="flex-start">
            {miaPlayers.map((player, index) => (
              <Grid item key={player.nbaId} xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center'}}>
                <PlayerCard player={player} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
