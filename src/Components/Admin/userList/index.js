import React, { Component } from 'react';
import './index.css';
import Header from "../../AppBar/index"
import firebase from "firebase";
import { UserList, deleteUser } from "../../../store/action/action"
import history from "../../../History"
import { connect } from "react-redux"
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

let database = firebase.database().ref("/")
class Users extends Component {
    constructor() {
        super()
        this.state = {
            currentUserID: ""
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ currentUserID: user.uid })
            }
        });


        let checkAouth = localStorage.getItem("token")
        if (checkAouth == null) {
            history.push("/logIn");
        }
        database.child("user").on("child_added", (snap) => {
            let obj = snap.val()
            obj.id = snap.key,
                this.props.UserList(obj)

        })

    }

    deleteUser(data, index) {
        console.log(data.id, "////////////////")
        let userList = this.props.userLis.userLst
        userList = userList.slice(0, index).concat(userList.slice(index + 1))
        database.child(`user/${data.id}`).remove()
        this.props.deleteUser(userList)
    }

    render() {
        console.log(this.props.userLis.userLst
        )
        return (
            <div className="App">
                <div className="">
                    <Header />
                </div>
                <br /><br /><br />
                <div>
                    {this.props.userLis.userLst.map((val, inde) => {
                        console.log(val)
                        return (
                            <div key={inde} >
                                {(this.state.currentUserID !== val.id) ?
                                    <Card className="slots_button_list">
                                        <CardContent
                                            className="CardContent_class">
                                            <div style={{ display: "flex", alignItems: "center" }} >{val.username}</div>
                                            <div style={{ display: "flex", alignItems: "center" }} >{val.Email}</div>
                                            <div>
                                                <IconButton
                                                    style={{ display: "flex", alignItems: "center" }} onClick={this.deleteUser.bind(this, val, inde)} >
                                                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                                        <path d="M0 0h24v24H0z" fill="none" />
                                                    </svg>
                                                </IconButton>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    : null}
                            </div>
                        )
                    })}
                </div>

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
        UserList: (data) => {
            dispatch(UserList(data))
        },
        deleteUser: (data) => {
            dispatch(deleteUser(data))
        },

    };
};


export default connect(mapStateToProp, mapDispatchToProp)(Users)

