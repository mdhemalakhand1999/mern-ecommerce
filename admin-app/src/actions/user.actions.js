import {userConstants} from './constants';
import axios from '../helpers/axios';


export const signup = (user) => {
    console.log(user);
    return async (dispatch) => {
      dispatch({
        type: userConstants.USER_REGISTER_REQUEST
      })
      const res = await axios.post('/admin/signup', {
        ...user
      });
      console.log('hemal');
      console.log(res.status);
      if(res.status === 200) {
        const {message} = res.data.message;
        dispatch({type: userConstants.USER_REGISTER_SUCCESS, payload: {message}});
      } else {
        if(res.status === 400) {
          console.log(res.data.error);
          dispatch({
            type: userConstants.USER_REGISTER_FAILURE,
            payload: {
              error: res.data.error
            }
          })
        }
      }
    }
  }
  