import store from '@/store.js';

export const setUserData = (user) => {
    if (user == null) {
        store.commit('setEmail', '');
        store.commit('setFirstName', '');
        store.commit('setLastName', '');
        store.commit('setProfilePic', '');
    } else {
        const firstName = user.Qt.vW;
        const lastName = user.Qt.wU;
        const profilePic = user.Qt.UK;
        const email = user.Qt.zu;
        store.commit('setEmail', email);
        store.commit('setFirstName', firstName);
        store.commit('setLastName', lastName);
        store.commit('setProfilePic', profilePic);
    }
};