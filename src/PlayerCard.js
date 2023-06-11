import { styled } from '@mui/system';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import { useState } from 'react';

const PlayerCardRoot = styled(Card)(({ theme }) => ({
  position: 'relative',
  color: 'white',
  borderRadius: 6,
  overflow: 'hidden',
  height: 450,
  width: 350,
}));

const PlayerCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '100%',
}));

const PlayerCardContent = styled(CardContent)(({ theme }) => ({
  position: 'relative',
  bottom: '30%',
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  width: '100%',
  height: 450,
  padding: 25,
  transition: 'transform 0.3s ease-in-out',
  transform: 'translateY(0%)',
}));

const PlayerCard = () => {
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
        image="https://cdn.nba.com/teams/static/heat/imgs/roster/2223/1628389-2223.jpg"
        title="Bam Adebayo"
      />
      
      <PlayerCardContent style={{ transform: isHovered ? 'translateY(-70%)' : 'translateY(0%)' }}>
        {isHovered}
        <Typography variant="h5" component="h5">
          Bam
          <br />
          Adebayo
        </Typography>
        <Typography variant="subtitle1">Center-Forward</Typography>
          <br />
        {isHovered && (
          <>
            <Typography variant="body1">
              Height: <strong>6'9"</strong>
            </Typography>
            <Typography variant="body1">
              Weight: <strong>255lbs</strong>
            </Typography>
            <Typography variant="body1">
              DOB: <strong>07/18/1997</strong>
            </Typography>
            <Typography variant="body1">
              Prior To NBA: <strong>Kentucky</strong>
            </Typography>
            <Typography variant="body1">
              Country: <strong>USA</strong>
            </Typography>
          </>
        )}
      </PlayerCardContent>
    </PlayerCardRoot>
  );
};

export default PlayerCard;
