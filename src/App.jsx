import React, { Component } from 'react';
import Table from './components/Table/Table';


const animals = [
  { type: `turtle`, icon: `🐢` },
  { type: `octopus`, icon: `🐙` },
  { type: `fish`, icon: `🐠` },
  { type: `flamingo`, icon: `🦩` },
  { type: `penguin`, icon: `🐧` }
];

class App extends Component {



  render() {
    return (
      <Table animals={ animals} />
    );
  }
}

export default App;