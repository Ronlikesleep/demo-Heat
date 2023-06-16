import Nav from '../components/Nav' 
import Footer from '../components/Footer'
import { Link } from "react-router-dom";

function NoPage() {
    
  
    return (
      <>
        <Nav />
        <div>Under Construction, click the <Link to={'/Roster'}> top Avatar</Link> Go back to Roster</div>
        <Footer />
      </>
    );
  }
  
  export default NoPage;