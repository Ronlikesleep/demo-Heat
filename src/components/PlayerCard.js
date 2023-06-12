import { styled} from '@mui/system';
import { Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import React, { useState} from "react";

const PlayerCardRoot = styled(Card)(({ theme }) => ({
  position: 'relative',
  color: 'white',
  borderRadius: 6,
  overflow: 'hidden',
  height: '100%',
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    height: 200,
    width: 150,
  },
  [theme.breakpoints.up('sm')]: {
    height: 300,
    width: 200,
  },
  [theme.breakpoints.up('md')]: {  
    height: 400,  
    width: 300,
  },
  
}));

const PlayerCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '100%',
}));

const PlayerCardContent = styled(CardContent)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,  
  left: 0,  
  right: 0,  
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  width: '100%',
  height: '100%',  
  padding: 20,
  transition: 'transform 0.3s ease-in-out',
  transform: 'translateY(0%)',
  

  '&:hover': {
    '& #Name': {
      color: '#f9a01b',
    },
  },
}));

const PlayerCard = ({ player }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

    return (
    <PlayerCardRoot onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <PlayerCardMedia
        image={player.photoUrl}
        title={`${player.firstName} ${player.lastName}`}
      />
      
      <PlayerCardContent style={{ paddingLeft: "30px", transform: isHovered ? 'translateY(0%)' : 'translateY(70%)' }}>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography id = "Name" variant="h5" sx ={{fontWeight: 600}}>
              {player.firstName.toUpperCase()}
            </Typography>
            <Typography id = "Name" variant="h5" sx ={{fontWeight: 600,lineHeight: '0.7em'}}>
              {player.lastName.toUpperCase()}
            </Typography>
            <Typography variant="h5" sx={{color:isHovered? 'lightwhite':'lightgrey',lineHeight: '1.9em'}}>
              {player.position}
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ textAlign: "right", paddingRight: "20px",marginTop: '-30px'}}>
            <Typography variant="h2" sx={{ lineHeight: '0.9em',fontWeight:500 ,color:isHovered? 'lightwhite':'lightgrey'}}>
              {player.jerseyNum}
            </Typography>
          </Grid>
        </Grid>
          <br />
        {isHovered && (
          <>
            <Typography  sx={{ lineHeight: '2em', paragraphSpacing: '0.5em' ,fontSize: '1.2rem'}} variant="paragraph">
              HEIGHT: <strong>{Math.floor(player.height / 12)}'{player.height % 12}</strong>
              <br />
              WEIGHT: <strong>{player.weight} lbs</strong>
              <br />
              DOB: <strong>{new Date(player.birthDate).toLocaleDateString()}</strong>
              <br />
              YEARS PRO: <strong>{player.yearsPro}</strong>
              <br />
              COUNTRY: <strong>{player.homeCountry}</strong>
            </Typography>
          </>
        )}
      </PlayerCardContent>
    </PlayerCardRoot>
  );
};

export default PlayerCard;
