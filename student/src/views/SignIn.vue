<template>
    <v-content>
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="6"
                sm="8"
                md="8"
            >
                <v-card>
                    <v-toolbar
                        color="primary"
                        dark
                        flat
                    >
                        <v-toolbar-title>Sign in</v-toolbar-title>
                    </v-toolbar>

                    <v-card-text>
                        <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure">wat</GoogleLogin>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
import GoogleLogin from 'vue-google-login';
import { CLIENT_ID } from '@/constants.js';
import { setUserData } from '@/utils.js';

export default {
    data() {
        return {
            params: {
                client_id: CLIENT_ID,
            },
            renderParams: {
                width: 250,
                height: 50, 
                longtitle: true,
            },
            onSuccess: (googleUser) => {
                console.log(googleUser);
                setUserData(googleUser);
                
                this.$router.push("/join");
            },
            onFailure: (error) => {
                console.log("ERROR: ", error);
            },
        }
    },

    components: {
        GoogleLogin,
    },
}
</script>>