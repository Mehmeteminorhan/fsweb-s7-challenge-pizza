import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/Homepage/MainPage';
import CorrectionPage from './components/CorrectionPage/Correction';
import OrderPage from './components/OrderPage/OrderPage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/OrderPage" component={OrderPage} />
        <Route path="/CorrectionPage" component={CorrectionPage} />
      </Switch>
    </Router>
  );
}

export default App;