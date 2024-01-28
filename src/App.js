import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Scroll  from './Components/GoToTop/GoToTop';
import RegisterAndLogin from './Pages/register/RegisterAndLogin';
import Team from '../src/Components/Team/Team';

function App() {
  return (
    <div className="App">
       <Scroll />
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<RegisterAndLogin/>} />
        </Routes>
        <Routes>
          <Route path="/team" element={<Team/>} />
        </Routes>
    </div>
  );
}

export default App;