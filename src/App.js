import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';



function App() {
  return (
    <Router>
      {/* {showNavbar && <Navbar />} */}
      <Navbar />
      <Routes>
        {/* <Route path="/" exact element={<Home />} /> */}

        {/* <Route path="/game" exact element={<Game />} />

        <Route path="/card" exact element={<Card />} /> */}

        <Route path="/auth" exact element={<Auth />} />

        <Route path='/dashboard' exact element={<Dashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
