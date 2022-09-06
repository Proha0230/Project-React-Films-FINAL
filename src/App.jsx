
import './App.css';
import React, { Component } from "react";
import {Posts} from "./component/posts";


  class App extends Component {
 
    state ={
      posts: [
        {id:"abc1", name:"JS Basics"},
        {id:"abc2", name:"Js Advanced"},
        {id:"abc3", name:"ReactJS"},
      ],
    };

    removePost = (id)=> {      
      this.setState({posts: this.state.posts.filter(post=> post.id !== id)})
    }

    

  render() {

    const{posts} = this.state;

    return (
      <div className='App'>

      <Posts posts ={posts} removePost={this.removePost}/>

      </div>
    )
  }
}

export {App};