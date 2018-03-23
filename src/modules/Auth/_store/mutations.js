/* eslint no-param-reassign: "error" */
import { AUTH_REQUEST, AUTH_LOGOUT, AUTH_SUCCESS, AUTH_ERROR } from './const';


export default {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [AUTH_SUCCESS]: (state, token) => {
    console.log(token);
    state.status = 'success';
    state.token = token;
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error';
  },
  [AUTH_LOGOUT]: (state) => {
    state.status = '';
    state.token = '';
  },
};
