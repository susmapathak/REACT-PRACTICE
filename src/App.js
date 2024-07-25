import Navbar from "./Navbar"
import Home from "./Home"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ClubList from "./ClubList";
import ClubCreate from "./components/ClubCreate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/clubs" element={<ClubList />}></Route>
            <Route path="/club/create" element={<ClubCreate />}></Route>
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
