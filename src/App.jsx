import './App.css';

import React from 'react'

export class App extends React.Component {
  render() {
    return (
      <header>
        <form id="to-do-form">
          <input type="text" placeholder='Enter Text' />
        </form>
      </header>
    )
  }
}

export default App;
