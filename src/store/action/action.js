import ActionTypes from "../constant/constant"


export const isLoaderAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.IS_SIGN_LODER,
            payload: data
        })
    }
}
export const isRegisterAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.IS_REGISTER_ERROR,
            payload: data
        })
    }
}

export const ParkingAction = (data) => {
    console.log(data, "___________ParkingAction")    
    return dispatch => {
        dispatch({
            type: ActionTypes.PARKING_LIST,
            payload: data
        })
    }
}


export const Parking_ID = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.PARKING_ID,
            payload: data
        })
    }
}

export const slotsAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.SLOTS_,
            payload: data
        })
    }
}




export const selectedData = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.SELECTED_DATA,
            payload: data
        })
    }
}



export const mySlotsAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.MY_SLOTS,
            payload: data
        })
    }
}

export const DeleteSlotAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.DELETE_SLOT,
            payload: data
        })
    }
}


export const AreaNameAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.AREA_NAME,
            payload: data
        })
    }
}

export const EmptyParkingList = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.EMPTY_PARKING_LIST,
            payload: data
        })
    }
}

export const EmptyParUserList = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.EMPTY_USER_LIST,
            payload: data
        })
    }
}

export const EmptySelectedSlots = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.EMPTY_PARKING_SELECT,
            payload: data
        })
    }
}


export const currentUserData = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.CURRENT_USER,
            payload: data
        })
    }
}


export const AllBookings = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.ALL_BOOKING,
            payload: data
        })
    }
}



export const UserList = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.USER_LIST,
            payload: data
        })
    }
}


export const ParkingTime = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.PARKING_TIME,
            payload: data
        })
    }
}

export const ParkingTimeEmpty = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.PARKING_TIME_EMPTY,
            payload: data
        })
    }
}

export const deleteAllbooking = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.DELETE_BOOKINGs,
            payload: data
        })
    }
}

export const deleteUser = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.DELETE_USER,
            payload: data
        })
    }
}

export const EmptyAllbooking = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.EMPTY_ALL_BOOKING_LIST,
            payload: data
        })
    }
}


export const ClearState = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.EMPTY_STATE,
            payload: data
        })
    }
}
