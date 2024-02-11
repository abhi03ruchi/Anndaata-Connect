import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Scroll  from './Components/GoToTop/GoToTop';


import Login from './Pages/RegisterAndLoginforNGO/Login';
import Registration from './Pages/RegisterAndLoginforNGO/Registration';
import ProtectedRoute from "./Components/ProtectedRout";
import UserAuthContextProvider from "./context/UserAuthContext";
   

import Team from '../src/Components/Team/Team';
import Donor from '../src/Pages/ProfilePages/donarForm';
import Admin from '../src/Pages/adminPage/adminList';
import NGO from '../src/Pages/NGOList/NGOList';
import NGOProfile from '../src/Pages/ProfilePages/NGOForm';
function App() {
  return (
    <div className="App">
       <Scroll />
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Routes>
          <Route path="/loginD" element={<RegisterAndLogin/>} />
        </Routes> */}
        <Routes>
          <Route path="/loginN" element={<Login/>} />
        </Routes>
        <Routes>
          <Route path="/team" element={<Team/>} />
        </Routes>
        <Routes>
          <Route path="/donorProfile" element={<Donor/>} />
        </Routes>
        <Routes>
          <Route path="/adminPage" element={<Admin/>} />
        </Routes>
        <Routes>
          <Route path="/ngoList" element={<NGO/>} />
        </Routes>
        <Routes>
          <Route path="/ngoProfile" element={<NGOProfile/>} />
        </Routes>
        <Routes>
          <Route path="/registration" element={<Registration/>} />
        </Routes>
    </div>
  );
}

export default App;