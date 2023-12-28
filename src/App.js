import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Scroll  from './Components/GoToTop/GoToTop';

function App() {
  return (
    <div className="App">
       <Scroll />
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
