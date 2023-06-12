import React from 'react';
import { Box, Avatar } from '@mui/material';

const Footer = () => {
  const logos = [
    {
      src: "https://cdn.nba.com/teams/static/heat/imgs/global/team-logos-svg/MIA-classic-mh.svg",
      title: "Miami HEAT Classic",
      alt: "Miami HEAT Classic Logo"
    },
    {
      src: "https://cdn.nba.com/teams/static/heat/imgs/global/team-logos-svg/MIA-core-mh.svg",
      title: "Miami HEAT",
      alt: "Miami HEAT Logo"
    },
    {
      src: "https://cdn.nba.com/teams/static/heat/imgs/global/team-logos-svg/MIA-vice.svg?v=qskn23",
      title: "Miami HEAT Vice",
      alt: "Miami HEAT Vice Logo",
      style: {width: '75%'}
    },
    {
      src: "https://cdn.nba.com/teams/static/heat/imgs/global/team-logos-svg/MIA-mashup-mh.svg",
      title: "Miami HEAT Mashup",
      alt: "Miami HEAT Mashup Logo"
    }
  ];

  const teamLogosStyle = {
    background: 'lightgray',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    gap: '0.25rem',
    padding: '1rem',
    borderTop: '0.1rem solid black',
    boxSizing: 'border-box',
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: 'currentColor'
  };

  return (
    <Box sx={teamLogosStyle}>
      {logos.map((logo, index) => (
        <Box key={index}>
          <Avatar src={logo.src} alt={logo.alt} title={logo.title} style={logo.style}  
          sx={{ 
              width: { xs: 50, sm: 75, md: 100 },
              height: { xs: 50, sm: 75, md: 100 } 
            }}/>
        </Box>
      ))}
    </Box>
  );
};

export default Footer;
