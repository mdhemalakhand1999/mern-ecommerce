import {authConstants} from './constants';
import axios from '../helpers/axios';
export const login = (user) => {
    console.log(user);
    // email: 'hemasshema@gmail.com',
        // password: 'hessmahema'
    
    return async (dispatch) => {
      dispatch({
        type: authConstants.LOGINREQUEST
      })
      const res = await axios.post('/admin/signin', {
        ...user
      });
      if(res.status === 200) {
        const {token, user} = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({type: authConstants.LOGINSUCCESS, payload: {token, user}});
      } else {
        if(res.status === 400) {
          dispatch({
            type: authConstants.LOGINFAILURE,
            payload: {
              error: res.data.error
            }
          })
        }
      }
    }
}


export const isUserLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem('token');
    if(token) {
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch({
        type: authConstants.LOGINSUCCESS,
        payload: {
          token, user
        }
      })
    } else {
      dispatch({
        type: authConstants.LOGINFAILURE,
        payload: {
          error: "Failed to login"
        }
      })
    }
  }
}


export const signout = () => {
  return async dispatch => {
    localStorage.clear();
    dispatch({
      type: authConstants.LOGOUT_REQUEST
    })
  }
}