import Nav from "../components/Nav";
import Footer from "../components/Footer";
import StatsTable from "../components/StatsTable";
import Summary from "../components/Summary";
import React, { useEffect } from 'react';
function Oladipo({ match }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <Summary />
      <StatsTable />
      <Footer />
    </>
  );
}

export default Oladipo;