<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>
                        <span class="title font-weight-light">Sign in</span>
                    </v-card-title>

                    <v-card-text>
                        <v-row justify="center">
                            <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure">wat</GoogleLogin>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
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
                theme: 'dark',
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