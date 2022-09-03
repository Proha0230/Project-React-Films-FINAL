
import './App.css';
import React, { Component } from "react";
// import {Book} from "./Book";
// import {Preloader} from './Preloader';


  // const App = (props) => {
  //   return props.isLoading ? (
  //   <Preloader />
  //   ) : <div>
  //   <h1 id="hello" className='class1' >Hello from React</h1>
  //   <Book name = 'JS for beginners' year = "2018" price = "1000" /> 
  //   <Book name = 'React' year = "2020" price = "1200" />
  //   <Book name = 'Vue JS' year = "2019" price = "1100" />
  //   </div>
    
  // };

  class App extends Component {
    state ={
      count: 0
    };

  
  render() {
    return (
      <div className='App'>
        <h1>Мой кликер</h1> 
        <button onClick = { ()=> this.setState({count: this.state.count -1})}>-</button>
        <span>{this.state.count}</span>
        <button onClick = { ()=> this.setState({count: this.state.count +1})}>+</button>

      </div>
    )
  }
}

export {App};