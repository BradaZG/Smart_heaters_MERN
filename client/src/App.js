import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import AddReadings from './components/AddReadings';
import HeaterCreate from './components/HeaterCreate';
import Heaters from './components/Heaters';
import HeaterUpdate from './components/HeaterUpdate';
import NavBar from './components/NavBar';
import ViewHeater from './components/ViewHeater';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Container className='mt-4'>
          <Route path='/' exact component={Heaters} />
          <Route path='/add' exact component={HeaterCreate} />
          <Route path='/update' exact component={HeaterUpdate} />
          <Route path='/addReadings' exact component={AddReadings} />
          <Route path='/:id' exact component={ViewHeater} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
