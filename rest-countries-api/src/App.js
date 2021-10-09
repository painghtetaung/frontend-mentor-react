import React from 'react'
import { GlobalStyle } from './GlobalStyle.js'

//Route
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import Home from './components/Home'
import HeaderBar from './components/HeaderBar'
import CountryInfo from './components/CountryInfo'
import NotFound from './components/NotFound'
const App = () => {

  return (
    <>
      <Router>
        <HeaderBar></HeaderBar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/country/:countryId'>
              <CountryInfo></CountryInfo>
            </Route>
            <Route path='*'>
             <NotFound></NotFound>
            </Route>
          </Switch>
          <GlobalStyle />
      </Router>
     
     
    </>
  )
}

export default App;
