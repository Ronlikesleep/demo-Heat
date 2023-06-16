import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roster from "./pages/Roster";
import Oladipo from "./pages/Oladipo";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Roster/>}/>
          <Route path="/Roster" element = {<Roster/>}/>
          <Route path="/Oladipo" element = {<Oladipo/>}/>
          <Route path="*" element = {<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;