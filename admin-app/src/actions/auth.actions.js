import axios from '../helper/axios';
import {authConstants} from './constants';
export const login = (user) => {
    console.log(user);
    // email: 'hemasshema@gmail.com',
        // password: 'hessmahema'
    
    return async (dispatch) => {
      dispatch({
        type: authConstants.LOGINREQUEST
      })
      const res = axios.post('http://localhost:2000/api/admin/signin', {
          ...user
      }).then((res) => {
        if(res.status == 200) {
          const {token, user} = res.data;
          localStorage.setItem('token', token)
          dispatch({
            type: authConstants.LOGINSUCCESS,
            payload: {
              token, user
            }
          })
        } else {
          if(res.status == 400) {
            dispatch({
              type: authConstants.LOGINFAILURE,
              payload: { error: res.data.error }
            })
          }
        }
      });
    }
}