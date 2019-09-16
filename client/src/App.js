import React from 'react';

import './App.css';

import GoogleDataList from './components/GoogleDataList';
import DarkMode from './components/DarkMode';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      googleData: []
    }
  }
  componentDidMount(){
    fetch("http://localhost:5000/api/players")
    .then(res => res.json())
    // .then(res => console.log('Return: ', res))
    .then(res => this.setState({googleData: res}))
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
        <DarkMode />
        <GoogleDataList googleData = {this.state.googleData} />
      </div>
    );
  }
  
}

export default App;
