import { authConstants } from "../actions/constants"

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    authenticate: false,
    authenticating: false
}
export default (state=initState, action) => {
    console.log(action)
    switch(action.type) {
        case authConstants.LOGINREQUEST:
            console.log(state);
            return state = {
                ...state,
                authenticating: true
            }
        case authConstants.LOGINSUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
        default:
            return state;
    }
}