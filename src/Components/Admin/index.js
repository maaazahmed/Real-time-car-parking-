import React, { Component } from 'react';
import './index.css';
import Header from  "../AppBar/index"


const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

class AdminComponent extends Component {
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
