import React from 'react';
import logo from './logo.svg';
import './App.css';
import ZooContainer from './ZooContainer'

class App extends React.Component {
  constructor(props){ 
    super(props);
    this.state = {
      name: 1
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <ZooContainer 
            name={this.state.name}
          />
        </header>
      </div>
    );
  }
}

export default App;
