import React, { Component } from 'react';
import './index.css';
import Header from "../../AppBar/index"
import firebase from "firebase";
import {UserList} from "../../../store/action/action"


let database = firebase.database().ref("/")
class Users extends Component {

    componentWillMount(){
        database.child("user").on("child_added",(snap)=>{
            let obj = snap.val()
            obj.id = snap.key

        })
    }


    render() {
        return (
            <div className="App">
                <div className="">
                    <Header />
                </div>

            </div>
        );
    }
}

export default Users;
