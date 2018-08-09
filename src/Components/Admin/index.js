import React, { Component } from 'react';
import './index.css';
import Header from  "../AppBar/index"
import history from "../../History"



class AdminComponent extends Component {
   componentWillMount(){
    let checkAouth = localStorage.getItem("token")
    if (checkAouth == null) {
        history.push("/logIn");
    }
  }
  render() {
    return (
      <div className="App">
        <div className="">
          <Header/>
        </div>
      </div>
    );
  }
}

export default AdminComponent;
