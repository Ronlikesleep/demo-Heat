import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import PlayerCard from './PlayerCard';
import data from '../data/miamiHeat.json';

//A series of the cards showing the players' info

const ShowCard = () => {
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
    <Container sx={{ py: 3, display: 'flex', justifyContent: 'center' }} maxWidth="xl">
      <Grid container spacing={2} justifyContent="flex-start">
        {miaPlayers.map((player, index) => (
          <Grid item key={player.nbaId} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center'}}>
            <PlayerCard player={player} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ShowCard;
