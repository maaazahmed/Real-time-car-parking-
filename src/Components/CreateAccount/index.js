import React, { Component } from 'react';
import './index.css';
// App Bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// Card
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// Form 
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import * as firebase from "firebase";
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux"
import history from "../../History"

import { 
  isLoaderAction,
  isRegisterAction
 } from "../../store/action/action"


// Initialize Firebase
var config = {
  apiKey: "AIzaSyBfKA-J6-HrEWjVQyAsBWrKvubRnnGhsyE",
  authDomain: "crime-tracer-app.firebaseapp.com",
  databaseURL: "https://crime-tracer-app.firebaseio.com",
  projectId: "crime-tracer-app",
  storageBucket: "crime-tracer-app.appspot.com",
  messagingSenderId: "223715442629"
};
firebase.initializeApp(config);

let database = firebase.database().ref("/")
class CreateAccount extends Component {
  constructor() {
    super()
    this.state = {
      amount: '',
      username: "",
      Email: "",
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
      errorMsg:""
    };
  }
  handleChange(ev) {
    this.setState({ 
      [ev.target.name]: ev.target.value
     });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };



  CreateAccountHandler(){
   let user = {
     username : this.state.username,
     Email : this.state.Email,
     password : this.state.password,
     accountType:"user"
   }
   this.props.isLoaderAction(true)


   if(user.username !== "" && user.Email !== "" && user.password !== ""){
       setTimeout(() => {
        firebase.auth().createUserWithEmailAndPassword(user.Email, user.password)
          .then((res) => {
            console.log(res)
            database.child("user/" + res.user.uid).set(user)
              .then(() => {
                  this.props.isLoaderAction(false)
                  this.props.isRegisterAction('')
                  let firstPass = user.password.slice(3).toLowerCase()
                  let secondPass = user.password.slice(1,4).toUpperCase()
                  let FirstEmail =user.Email.slice(0,3).toLowerCase()
                  let SectEmail =user.Email.slice(3,15).toUpperCase()
                  let num_1 = Math.random(86868686868*86868686868)
                  num_1 = (parseInt(105780*num_1)*86868686868)
                  let num_2 = Math.random(3453434534*345345345)
                  num_2 = (parseInt(105780*num_2)*86868686868)
                  let num_3 = Math.random(656767*345345343453455)
                  num_3 = (parseInt(105780*num_3)*86868686868)
                  const token = SectEmail+num_3+firstPass+num_1+num_2+SectEmail+num_2+secondPass+num_3+FirstEmail+num_1
                  localStorage.setItem('token', JSON.stringify(token))
                  history.push("/Dashboard")

    
              })
            })
                .catch((error) => {
                  var errorMessage = error.message;
                  this.props.isLoaderAction(false)
                  this.props.isRegisterAction(errorMessage)
                });
      }, 1500)
   }
   else{
      this.props.isLoaderAction(false)
      this.props.isRegisterAction("You can't abandon empty eny input feild")
   }



 
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="title"
              color="inherit">
              Sing up
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <Card className="FormCard">
            <CardContent>
              <FormControl style={{ width: "100%" }} >
                <InputLabel htmlFor="adornment-username">Username</InputLabel>
                <Input
                  id="adornment-username"
                  type={'text'}
                  value={this.state.username}
                  onChange={this.handleChange.bind(this)}
                  name="username"

                  endAdornment={
                    <InputAdornment position="end">
                      <svg style={{marginRight:"10"}} fill="#3f51b5" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl style={{ width: "100%" }}  >
                <InputLabel htmlFor="adornment-email">Email</InputLabel>
                <Input
                  id="adornment-email"
                  type={'text'}
                  value={this.state.Email}
                  onChange={this.handleChange.bind(this)}
                  name="Email"
                  endAdornment={
                    <InputAdornment position="end">
                      <svg style={{marginRight:"10"}} fill="#3f51b5" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M19.6,8.25l-6.54,4.09
	                       	c-0.65,0.41-1.47,0.41-2.12,0L4.4,8.25C4.15,8.09,4,7.82,4,7.53c0-0.67,0.73-1.07,1.3-0.72L12,11l6.7-4.19
	                       	C19.27,6.46,20,6.86,20,7.53C20,7.82,19.85,8.09,19.6,8.25z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl style={{ width: "100%" }}  >
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                  id="adornment-password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.state.password}
                  onChange={this.handleChange.bind(this)}
                  name="password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.state.showPassword ? 
                         <svg fill="#3f51b5" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                         <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                         <path d="M0 0h24v24H0z" fill="none" />
                       </svg>
                        :
                         <svg fill="#3f51b5" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                         <path d="M12 4.5C7 
                         4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                         <path d="M0 0h24v24H0z" fill="none" />
                       </svg>
                         }
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <div style={{textAlign:"center"}} >
              <Button disabled={(this.props.isLoader.isLoader)} 
              onClick={this.CreateAccountHandler.bind(this)}
                  variant="contained" 
                   className="Button_createAccount" 
                    color="primary">
                  {(this.props.isLoader.isLoader)?
                  <CircularProgress thickness={2} size={20} style={{color:"#3f51b5"}} /> 
                  :
                  <div>
                    Sign Up 
                  </div>
                  }
              </Button>
              </div>
              {(this.props.isRegisterError.isRegisterError !== "")?
              <div className="errorMessage" >
                {this.props.isRegisterError.isRegisterError}
              </div>:null}
            </CardContent>
          </Card>
          <div 
          className="Creat-account-button-container" >
            <button
             onClick={()=>{history.push("/")}} 
            className="Creat-account-button" >
              Alredy an Account
           </button>
          </div>
        </div>
      </div>
    );
  }
}




const mapStateToProp = (state) => {
  // console.log(state.root)
  return ({
      isLoader: state.root,
      isRegisterError:state.root
  });
};
const mapDispatchToProp = (dispatch) => {
  return {
      isLoaderAction: (data) => {
          dispatch(isLoaderAction(data))
      },
      isRegisterAction: (data) => {
          dispatch(isRegisterAction(data))
      }
  };
};


export default connect(mapStateToProp, mapDispatchToProp)(CreateAccount)