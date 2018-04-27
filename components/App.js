import React from 'react';
import EnterNumber from './EnterNumber';
import Bracket from './Bracket';

class App extends React.Component {
  render () {
    return (
      <div>
        <EnterNumber/>
        <Bracket/>
      </div>
    )
  }
}

export default App;
