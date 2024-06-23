import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import MainPage from './components/Homepage/MainPage'
import { Route, Router, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import CorrectionPage from './components/CorrectionPage/Correction'


function App() {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/CorrectionPage">
        <CorrectionPage />
      </Route>
    </Switch>
  );
}

export default App
