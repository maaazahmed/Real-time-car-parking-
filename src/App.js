import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="title" 
                 color="inherit">
                Log in
            </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

export default App;
