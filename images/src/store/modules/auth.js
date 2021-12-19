import api from '../../api/imgur.js';
import { router } from '../../main';
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('imgur_api'),
}

const getters = {
    isLoggedIn: state => !!state.token
}

const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin({ commit }, hash){
        const query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur_api', query.access_token);
        router.push('/');
    },
    logout: ({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_api');
    }
}

const mutations = {
    setToken: (state, token) => {
        state.token = token
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

