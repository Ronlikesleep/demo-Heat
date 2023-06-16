import Nav from "../components/Nav";
import Footer from "../components/Footer";
import StatsTable from "../components/StatsTable";
import Summary from "../components/Summary";
import React, { useEffect } from 'react';
import Forum from "../components/Forum"
function Oladipo({ match }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <Summary />
      <StatsTable />
      <Forum />
      <Footer />
    </>
  );
}

export default Oladipo;