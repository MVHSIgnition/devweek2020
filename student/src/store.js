import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        email: '',
        firstName: '',
        lastName: '',
        profilePic: '',
        auth2: null,
    },
    mutations: {
        setEmail(state, payload) {
            state.email = payload;
        },
        setFirstName(state, payload) {
            state.firstName = payload;
        },
        setLastName(state, payload) {
            state.lastName = payload;
        },
        setProfilePic(state, payload) {
            state.profilePic = payload;
        },
        setAuth2(state, payload) {
            state.auth2 = payload;
        }
    },
    getters: {
        email(state) {
            return state.email;
        },
        firstName(state) {
            return state.firstName;
        },
        lastName(state) {
            return state.lastName;
        },
        profilePic(state) {
            return state.profilePic;
        },
        auth2(state) {
            return state.auth2;
        }
    }
});