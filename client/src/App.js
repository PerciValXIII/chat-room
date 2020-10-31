import React from 'react';
import Home from './Home';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
