// src/App.js

import './index.css'
import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Courses from './Courses'
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// We create this new component to get access to the location object
function AppContent() {
  const location = useLocation();

  return (
    // The main container div
    <div className="App bg-black flex flex-col full-h-screen">
      <Navbar />
      <div className="content flex-grow">
        {/* AnimatePresence handles the exit and enter animations */}
        <AnimatePresence mode="wait">
          {/* The key tells AnimatePresence when a new page is rendered */}
          <Switch location={location} key={location.pathname}>
            <Route exact path="/"><Home /></Route>
            <Route path="/Projects"><Projects /></Route>
            <Route path="/Courses"><Courses /></Route>
            <Route path="/Resume"><Resume /></Route>
            <Route path="/Contact"><Contact /></Route>
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Your main App component now just sets up the Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;