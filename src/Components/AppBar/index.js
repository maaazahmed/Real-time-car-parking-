import React, { Component } from 'react';
import './index.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import history from "../../History"
import firebase from "firebase"
import { connect } from "react-redux"
import {
    EmptyParkingList,
    EmptySelectedSlots,
    currentUserData,
    ClearState,
    EmptyAllbooking

} from "../../store/action/action"

let database = firebase.database().ref('/')
class Header extends Component {
    constructor() {
        super()
        this.state = {
            anchorEl: null
        }
    }

    handleMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };


    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                database.child(`user/${user.uid}`).on("value", (snapshot) => {
                    let user = snapshot.val()
                    user.id = snapshot.key
                    this.props.currentUserData(user)

                })

            }
        });
    }


    render() {
        const { anchorEl } = this.state;
        return (
            <div>
                <div >
                    <AppBar
                        style={{
                            position: "fixed",
                            boxShadow: "none",
                        }}
                        position="static">
                        <Toolbar style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                            variant="dense">
                            <Typography variant="title"
                                color="inherit">
                                {this.props.heading}
                            </Typography>
                            <div>
                                <IconButton
                                    onClick={this.handleMenuOpen}
                                    aria-haspopup={true}
                                    aria-owns={anchorEl ? 'simple-menu' : null}
                                    color="inherit" aria-label="Menu">
                                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                </IconButton>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={this.handleMenuClose}>
                                    <MenuItem onClick={() => {
                                        this.props.EmptyParkingList()
                                        this.handleMenuClose()
                                        this.props.EmptyAllbooking()
                                        history.push("/Dashboard")
                                    }}>Book Parking
                                    </MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            this.props.EmptyParkingList()
                                            this.handleMenuClose()
                                            this.props.EmptySelectedSlots()
                                            this.props.EmptyAllbooking()
                                            history.push("/ViweBooking")
                                        }}>View booking</MenuItem>
                                    {(this.props.user.currentUser.accountType === "admin") ?
                                        <MenuItem
                                            onClick={() => {
                                                history.push("/AllParkins")
                                            }}>
                                            All Bookings
                                    </MenuItem>
                                        : null}

                                    {(this.props.user.currentUser.accountType === "admin") ?
                                        <MenuItem
                                            onClick={() => {
                                                this.props.EmptyAllbooking()
                                                history.push("/Users")
                                            }}>
                                            All Users
                                    </MenuItem>
                                        : null}





                                    <MenuItem
                                        onClick={() => {
                                            history.push("login");
                                            localStorage.removeItem("token")
                                            this.props.ClearState()
                                        }}>Logout</MenuItem>
                                </Menu>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        );
    }
}


const mapStateToProp = (state) => {
    return ({
        ParkingList: state.root,
        parkinID: state.root,
        allSlots: state.root,
        selected_Data: state.root,
        areaName: state.root,
        user: state.root,
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        EmptyParkingList: (data) => {
            dispatch(EmptyParkingList(data))
        },
        EmptySelectedSlots: (data) => {
            dispatch(EmptySelectedSlots(data))
        },
        currentUserData: (data) => {
            dispatch(currentUserData(data))
        },
        ClearState: (data) => {
            dispatch(ClearState(data))
        },
        EmptyAllbooking: (data) => {
            dispatch(EmptyAllbooking(data))
        },


    };
};


export default connect(mapStateToProp, mapDispatchToProp)(Header)

