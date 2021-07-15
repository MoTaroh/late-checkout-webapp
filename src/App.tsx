import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopPage from './pages/TopPage';
import HotelListPage from './pages/HotelListPage';

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <TopPage/>
                </Route>
                <Route path="/hotels">
                    <HotelListPage></HotelListPage>
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
