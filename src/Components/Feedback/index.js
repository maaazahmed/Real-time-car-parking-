import React, { Component } from 'react';
import './index.css';
// import Header from "../../AppBar/index"
import firebase from "firebase";
// import { UserList, deleteUser } from "../../../store/action/action"
// import history from "../../../History"
import { connect } from "react-redux"
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

let database = firebase.database().ref("/")
class Feedback extends Component {
    constructor() {
        super()
        this.state = {
            currentUserID: ""
        }
    }



    render() {

        return (
            <div className="App">
                Feedback
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return ({
        userLis: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        // UserList: (data) => {
        //     dispatch(UserList(data))
        // },


    };
};


export default connect(mapStateToProp, mapDispatchToProp)(Feedback)

