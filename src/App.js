import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/home" exact component={Home} />
        {/* Add more routes for other pages if needed */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
