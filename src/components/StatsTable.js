import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel, Grid,Typography } from '@mui/material';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CollapseDetails from './CollapseDetails';

const seasonTypes = ["Preseason", "Regular Season", "Playoffs", "Play In"];
const perModes = ["Totals", "Per Game", "Per 100 Poss", "Per 100 Plays", "Per 48 Minutes", "Per 40 Minutes", "Per 36 Minutes", "Per 1 Minute", "Per 1 Poss", "Per 1 Play", "Minutes Per"];

const glossary = [
  { term: 'GP', definition: 'Games Played' },
  { term: 'MIN', definition: 'Minutes Played' },
  { term: 'OFFRTG', definition: 'Offensive Rating' },
  { term: 'DEFRTG', definition: 'Defensive Rating' },
  { term: 'NETRTG', definition: 'Net Rating' },
  { term: 'AST%', definition: 'Assist Percentage' },
  { term: 'AST/TO', definition: 'Assist to Turnover Ratio' },
  { term: 'AST RATIO', definition: 'Assist Ratio' },
  { term: 'OREB%', definition: 'Offensive Rebounding Percentage' },
  { term: 'DREB%', definition: 'Defensive Rebounding Percentage' },
  { term: 'REB%', definition: 'Rebounding Percentage' },
  { term: 'TO RATIO', definition: 'Turnover Ratio' },
  { term: 'EFG%', definition: 'Effective Field Goal Percentage' },
  { term: 'TS%', definition: 'True Shooting Percentage' },
  { term: 'USG%', definition: 'Usage Percentage' },
];

const rows = [
  {
    year: '2022',
    team: 'Miami Heat',
    gp: 72,
    gs: 72,
    min: 2045,
    pts: 2032,
    fgm: 762,
    fgp: '46.2',
    tpm: 231,
    tpa: 631,
    tpp: '36.6',
    ored: 47,
    dreb: 292,
    reb: 339,
    ast: 418,
    stl: 130,
    blk: 32,
    tov: 264,
    pf: 184,
    plusMinus: '+241'
  },
  // add more player stats
];

function StatsTable() {
  const [seasonType, setSeasonType] = React.useState('');
  const [perMode, setPerMode] = React.useState('');
  const [open, setOpen] = useState(false);

  const handleSeasonTypeChange = (event) => {
    setSeasonType(event.target.value);
  };

  const handlePerModeChange = (event) => {
    setPerMode(event.target.value);
  };


  return (
    <Box sx={{ flexGrow: 1, padding:{sm:'2.75rem',xs:'1.0rem'},bgcolor: '#f6f6f6'}}>
      <Grid container sx={{bgcolor:'#ffffff', padding:'1.2rem'}}>
        <Grid item xs={12} sm={3} sx={{paddingRight:{sm:'1.5rem'}, paddingBottom:{xs:'0.5rem'}}}>
          <FormControl fullWidth>
            <InputLabel id="season-type-label">Season Type</InputLabel>
            <Select
              labelId="season-type-label"
              id="season-type"
              value={seasonType}
              label="Season Type"
              onChange={handleSeasonTypeChange}
            >
              {seasonTypes.map((type, index) => (
                <MenuItem key={index} value={type}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3} >
          <FormControl fullWidth>
            <InputLabel id="per-mode-label">Per Mode</InputLabel>
            <Select
              labelId="per-mode-label"
              id="per-mode"
              value={perMode}
              label="Per Mode"
              onChange={handlePerModeChange}
            >
              {perModes.map((mode, index) => (
                <MenuItem key={index} value={mode}>{mode}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TableContainer component={Paper} sx={{marginTop:'1rem'}}>
        <Table sx={{ minWidth: ' 650px' }} aria-label="details table">
          <TableHead>
            <TableRow >
              <TableCell sx={{fontWeight:'bold'}}>By Year</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">Team</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">GP</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">GS</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">MIN</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">PTS</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">FGM</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">FG%</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">3PM</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">3PA</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">3P%</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">OREB</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">DREB</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">REB</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">AST</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">STL</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">BLK</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">TOV</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">PF</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">+/-</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.year}</TableCell>
                <TableCell align="right">{row.team}</TableCell>
                <TableCell align="right">{row.gp}</TableCell>
                <TableCell align="right">{row.gs}</TableCell>
                <TableCell align="right">{row.min}</TableCell>
                <TableCell align="right">{row.pts}</TableCell>
                <TableCell align="right">{row.fgm}</TableCell>
                <TableCell align="right">{row.fgp}</TableCell>
                <TableCell align="right">{row.tpm}</TableCell>
                <TableCell align="right">{row.tpa}</TableCell>
                <TableCell align="right">{row.tpp}</TableCell>
                <TableCell align="right">{row.ored}</TableCell>
                <TableCell align="right">{row.dreb}</TableCell>
                <TableCell align="right">{row.reb}</TableCell>
                <TableCell align="right">{row.ast}</TableCell>
                <TableCell align="right">{row.stl}</TableCell>
                <TableCell align="right">{row.blk}</TableCell>
                <TableCell align="right">{row.tov}</TableCell>
                <TableCell align="right">{row.pf}</TableCell>
                <TableCell align="right">{row.plusMinus}</TableCell>
              </TableRow>
            ))}
            </TableBody>
            </Table>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end">
              <IconButton
                aria-label="expand row"
                size="medium"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
              <CollapseDetails open ={open} glossary={glossary}/>
            </Box>
      </TableContainer>
    </Box>
  );
}

export default StatsTable;
