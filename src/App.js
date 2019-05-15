import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './scss/App.scss';
import Landing from './js/components/Landing';
import About from './js/components/About';
import Work from './js/components/Work';
import Contact from './js/components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/myworks" component={Work} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    </div>
  );
}

export default App;
