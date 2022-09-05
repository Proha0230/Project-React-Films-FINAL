
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
      count: 0,
      isCounting: false
    };

    // Вытаскиваем значения сохранившего значения таймера из LocalStorage используем унарный плюс для превращения строки в число

    componentDidMount () {
      const userCount = localStorage.getItem('timer');
      this.setState({count: +userCount});
    }

    // Отправка в LocalStorage данных о состоянии таймера пользователя 
    componentDidUpdate () {
      localStorage.setItem('timer', this.state.count)
    }

    // Если пользователь ушел с сайта и оставил выключенным таймер, нам нужно остановить команду SetInterval
    componentWillUnmount () {
      clearInterval(this.timerID);
    }

    // Функция для кнопки начала старта
    
    timerStart = ()=> {
      this.setState ({isCounting: true})
      this.timerID = setInterval ( ()=> {
        this.setState({count: this.state.count +1})
      }, 1000)
    }

    // Функция для кнопки остановки таймера

    timerStop = ()=> {
      this.setState ({isCounting:false});
      clearInterval (this.timerID);
    };

    // Функция для кнопки сброса таймера

    timerReset = ()=> {
      this.setState ({isCounting : false, count: 0});
      clearInterval(this.timerID)
    };

  render() {
    return (
      <div className='App' style={{ backgroundColor: "#FFFFCC"}}>
         <h1>React Секундомер</h1>
         <div> <h1>{this.state.count}</h1> </div>

         {! this.state.isCounting ? (
         <button onClick = { this.timerStart } style= {{margin: "10px"}}>Старт</button>
         ) : (
         <button onClick = { this.timerStop } style= {{margin: "10px"}}>Остановить</button>
         )}
         <button onClick={this.timerReset}>Сброс</button>
        
      </div>
    )
  }
}

export {App};