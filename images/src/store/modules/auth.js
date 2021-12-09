const state = {
    token: null,
}

const getters = {
    isLoggedIn: state => !!state.token
}

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null);
    }
}

const mutuations = {
    setToken: (state, token) => {
        state.token = token
    }
}

