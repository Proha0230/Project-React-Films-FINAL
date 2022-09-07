
import './App.css';
import React, { Component } from "react";


  class App extends Component {
 
    state ={
      email: "",
      regulations: false
    };


    handleSubmit = ()=> {
      const isValidEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(this.state.email);
      const isValidCheckbox = this.state.regulations;
      if(!isValidEmail){
        alert("Вы ввели некорректный Email")
        return
      }
      if(!isValidCheckbox){
        alert("Вы не согласились с правилами и условиями")
        return
      }
      this.setState({email:"", regulations: false})
      alert("Спасибо! Вы подписались!")
    }

    handleChange =(event) => {
      this.setState({[event.target.name] : event.target.value})
    }

    handleCheckboxChange =(event) => {
      this.setState({[event.target.name]: event.target.checked})
    }

    

  render() {

    const{email, regulations} = this.state;

    return (
      <div>
          <input
          type="email"
          name="email"
          placeholder='email'
          value={email}        
          onChange={this.handleChange}
          onBlur={this.validateEmail}            
          />

          <br />

          <label>
          <input
          type="checkbox"
          name="regulations"
          checked={regulations}
          onChange={this.handleCheckboxChange}
          /> Я согласен с правилами и условиями
          </label>
         <br />

         <button onClick={()=> {this.handleSubmit()}}>Отправить</button>

      </div>
    )
  }
}

export {App};