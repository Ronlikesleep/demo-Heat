import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roster from "./pages/Roster";
import Oladipo from "./pages/Oladipo";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Oladipo/>}/>
          <Route path="/Roster" element = {<Roster/>}/>
          <Route path="/Oladipo" element = {<Oladipo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;