import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import Tea from './components/Menu/Tea';
import Coffee from './components/Menu/Coffee';
import Food from './components/Menu/Food';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/home" exact component={Home} />
        <Route path="/menu/tea" component={Tea} />
        <Route path ="/menu/coffee" component={Coffee} />
        <Route path="/menu/food" component={Food} />
        {/* Add more routes for other pages if needed */}
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
