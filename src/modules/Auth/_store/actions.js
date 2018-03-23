import axios from 'axios';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, USER_REQUEST, AUTH_LOGOUT } from './const';

export default {
  [AUTH_REQUEST]: ({ commit, dispatch }, user) => new Promise((resolve, reject) => {
    commit(AUTH_REQUEST);
    axios({ url: 'auth', data: user, method: 'POST' })
      .then((resp) => {
        const token = 'token123';
        localStorage.setItem('user-token', token);
        commit(AUTH_SUCCESS, token);
        resolve(resp);
      })
      .catch((err) => {
        const token = 'token123';
        localStorage.setItem('user-token', token);
        commit(AUTH_SUCCESS, token);
        resolve(token);
        // commit(AUTH_ERROR, err);
        // localStorage.removeItem('user-token');
        // reject(err);
      });
  }),
  [AUTH_LOGOUT]: ({ commit }) => new Promise((resolve) => {
    commit(AUTH_LOGOUT);
    localStorage.removeItem('user-token');
    resolve();
  }),
};

