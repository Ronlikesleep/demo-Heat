import { styled} from '@mui/system';
import { Typography, Card, CardMedia, CardContent, Grid, Box } from '@mui/material';
import React, { useState} from "react";
import { Link } from "react-router-dom";

//Showing one specific player basic info in Heat

const PlayerCardRoot = styled(Card)(({ theme }) => ({
  position: 'relative',
  color: 'white',
  borderRadius: '0.3rem',
  overflow: 'hidden',
  height: '100%',
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    height: '23.5rem',
    width: '21.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    height: '26rem',
    width: '24rem',
  },
  [theme.breakpoints.up('md')]: {  
    height: '30rem',  
    width: '22.75rem',
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
  padding: '1.25rem',
  transition: 'transform 0.5s ease-in-out',
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
    <Link to={`/${player.lastName}`}>
      <PlayerCardRoot onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <PlayerCardMedia
          image={player.photoUrl}
          title={`${player.firstName} ${player.lastName}`}
        />
        
        <PlayerCardContent style={{ paddingLeft: "30px", transform: isHovered ? 'translateY(0%)' : 'translateY(70%)' }}>
          <Grid container alignItems="center">
            <Grid item xs={8}>
              <Typography id = "Name" variant="h5" sx ={{fontSize:'2rem',fontWeight: 600, paddingLeft:'0.5rem'}}>
                {player.firstName.toUpperCase()}
              </Typography>
              <Typography id = "Name" variant="h5" sx ={{fontWeight: 600,lineHeight: '0.7em',paddingLeft:'0.5rem'}}>
                {player.lastName.toUpperCase()}
              </Typography>
              <Typography variant="h5" sx={{color:isHovered? 'lightwhite':'lightgrey',lineHeight: '1.9em',paddingLeft:'0.5rem'}}>
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
            <Box sx={{paddingLeft:'0.5rem', paddingTop:{md:'2.5rem',sm:'1rem'}}}>
              <Typography  sx={{lineHeight: '2em',fontSize: '1.2rem'}} variant="paragraph">
                HEIGHT: <strong>{Math.floor(player.height / 12)}'{player.height % 12}</strong>
                <br />
                WEIGHT: <strong>{player.weight} lbs</strong>
                <br />
                DOB: <strong>{new Date(player.birthDate).toLocaleDateString()}</strong>
                <br />
                EXPERIENCE: <strong>{player.yearsPro}</strong>
                <br />
                COUNTRY: <strong>{player.homeCountry}</strong>
              </Typography>
            </Box>
          )}
        </PlayerCardContent>
      </PlayerCardRoot>
    </Link>
  );
};

export default PlayerCard;
