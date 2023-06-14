import React from "react";
import {Typography } from '@mui/material';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ShowCard from "../components/ShowCard";

function Roster() {
  return (
    <>
      <Nav/>
      <Typography variant="h3" sx={{ color: '#8B0000',fontWeight: 'bold', paddingTop: '30px', paddingLeft: '30px',paddingBottom: '30px' }}>
        Roster
      </Typography>
      <main>
        <ShowCard/>
      </main>
      <Footer />
    </>
  );
}

export default Roster;