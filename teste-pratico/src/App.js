import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from '../src/pages/home'
import InsertData from '../src/pages/insertData'
import Header from '../src/components/Header'


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/form' component={InsertData} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
