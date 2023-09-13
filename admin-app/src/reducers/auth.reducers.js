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
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authConstants.LOGINSUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {...initState}
            break;
        default:
            return state;
    }
    return state;
}