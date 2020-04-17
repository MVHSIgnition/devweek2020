import store from '@/store.js';

export const setUserData = (user) => {
    if (user == null) {
        store.commit('setEmail', '');
        store.commit('setFirstName', '');
        store.commit('setLastName', '');
        store.commit('setProfilePic', '');
    } else {
        const profile = user.getBasicProfile();
        console.log('USER: ', profile);
        const name = profile.getName().split(' ');
        const firstName = name[0];
        const lastName = name[1];
        const profilePic = profile.getImageUrl();
        const email = profile.getEmail();

        store.commit('setEmail', email);
        store.commit('setFirstName', firstName);
        store.commit('setLastName', lastName);
        store.commit('setProfilePic', profilePic);
    }
};