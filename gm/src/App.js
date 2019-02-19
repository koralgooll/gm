import React, { Component } from 'react';
import logo from './logo.svg';

import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import PoliticalPartyTail from './PoliticalPartyTail'

import Button from '@material-ui/core/Button';
import PartiesGrid from './PartiesGrid';

class App extends Component {

  state = {
    parties: [
      {
        lp: 1, ewp: 2, name: 'Stronnictwo Demokratyczne', 
        adress: '00-626 Warszawa, ul. Marszałkowska 9/15 lok. 69',
        logo: './logo/StronnictwoDemokratyczne.gif', www: 'https://sd.pl/'
      },
      {
        lp: 2, ewp: 4, name: 'Polska Partia Socjalistyczna', 
        adress: '00-555 Warszawa, Al. Niepodległości 161 lok. 2',
        logo: './logo/PolskaPartiaSocjalistyczna.png', www: 'http://www.naszpps.ppspl.eu/'  
      },
      {
        lp: 1, ewp: 12, name: 'Unia Europejskich Demokratów', 
        adress: '00-581 Warszawa, ul. Marszałkowska 2 lok. 4',
        logo: './logo/UniaEuropejskichDemokratów.png', www: 'https://uniaeuropejskichdemokratow.pl/'  
      },
      {
        lp: 1, ewp: 23, name: 'Unia Polityki Realnej ??????', 
        adress: '00-019 Warszawa, ul. Złota 7 lok. 18',
        logo: './logo/UniaPolitykiRealnej.jpg', www: 'http://uniapolitykirealnej.org.pl/home.html'  
      },
      {
        lp: 1, ewp: 34, name: 'Polskie Stronnictwo Ludowe', 
        adress: '00-539 Warszawa, ul. Piękna 3A',
        logo: './logo/PolskieStronnictwoLudowe.jpg', www: 'https://www.psl.pl/'  
      }
    ]
  }

  render() {
    
    return (
      <div className="App">
        <CssBaseline />
        <header className="App-header">
          <PoliticalPartyTail></PoliticalPartyTail>
          <img src={logo} className="App-logo" alt="logo" />
          
          <PartiesGrid parties={this.state.parties}></PartiesGrid>

          <Button variant="contained" color="primary">
            Hello World
          </Button>
          <p>DUPA</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
