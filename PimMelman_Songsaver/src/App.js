import './App.css';
import SongOverview from './components/SongOverview';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import About from "./components/About";

function App() {
  return (
    <Router>
    <div>
      <nav className='mainNav'>
        <ul>
          <li>
            Pim's Playlist
          </li>
          <li>
            <Link to="/SongOverview">Song Overview</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/About" element={<About/>}/>
        <Route path="/SongOverview" element={<SongOverview/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
