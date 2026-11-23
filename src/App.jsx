import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import SayedHamedDetails from "./pages/SayedHamedDetails";
import createSayedHamed from "./pages/CreateSayedHamed";
import UpdateSayedHamed from "./pages/UpdateSayedHamed";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sayed-hameds" element={<AllSayedHameds />} />
        <Route path="/sayed-hameds/:sayedHamedId" element={<SayedHamedDetails />} />
        <Route to="/sayed-hameds/create" element={<createSayedHamed />} />
        <Route path="/sayed-hameds/:sayedHamedId/edit" element={<UpdateSayedHamed />} />

      </Routes>
    </div>
  );
}

export default App;
