import React, { Component } from 'react';
import './index.css';
import Header from "../../AppBar/index"
import firebase from "firebase";
import { UserList } from "../../../store/action/action"
import history from "../../../History"


let database = firebase.database().ref("/")
class Users extends Component {

    componentWillMount() {
        let checkAouth = localStorage.getItem("token")
        if (checkAouth == null) {
            history.push("/logIn");
        }
        database.child("user").on("child_added", (snap) => {
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
