<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6">
          <v-card>
            <v-progress-linear
              :active="loading"
              :indeterminate="true"
              absolute
              top
              color="green lighten-1"
            ></v-progress-linear>
            <v-card-title>
              <span class="display-1 font-weight-bold">Login with YubiKey</span>
            </v-card-title>
            
            <v-card-text>
              <v-form>
                <v-row align="center" justify="center">
                  <v-col cols="12" sm="10">
                    <v-text-field
                      label="Username"
                      outlined
                      v-model="username"
                      style="position: relative"
                    ></v-text-field>
                    <v-btn @click="login" block color="primary" x-large>Login</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>

export default {
  data() {
    return {
      username: '',
      loading: false
    }
  },
  methods: {
    async login() {
      this.loading = true;

      const credential = await navigator.credentials.get({
        publicKey: {
          challenge: Uint8Array.from('jkjhgfrtyhgtyu3jhgtyui87yhnbvfd', c => c.charCodeAt(0)),
          allowCredentials: [{
            id: Uint8Array.from([234, 214, 85, 133, 7, 218, 156, 108, 120, 66, 253, 74, 37, 14, 64, 18, 15, 99, 22, 7, 55, 161, 213, 238, 224, 98, 111, 179, 47, 164, 214, 20, 203, 145, 41, 88, 224, 12, 34, 31, 43, 115, 133, 209, 20, 7, 155, 44, 20, 118, 200, 129, 65, 80, 219, 165, 26, 64, 168, 163, 22, 230, 78, 120]),
            type: 'public-key',
            transports: ['usb', 'ble', 'nfc'],
          }],
          timeout: 60000,
          userVerification: 'discouraged'
        }
      });

      console.log(credential);

      setTimeout(() => {
        this.loading = false;
        this.$router.push({
          path: '/dashboard'
        });
      }, 2000);
    },
    async register() {
      const credential = await navigator.credentials.create({
        publicKey: {
          challenge: Uint8Array.from('jkjhgfrtyhgtyu3jhgtyui87yhnbvfd', c => c.charCodeAt(0)),
          rp: {
            name: "Intellecture",
          },
          user: {
            id: Uint8Array.from("thisismyid", c => c.charCodeAt(0)),
            name: "david.grissom@mvla.net",
            displayName: "David",
          },
          pubKeyCredParams: [{alg: -7, type: "public-key"}],
          authenticatorSelection: {
            authenticatorAttachment: "cross-platform",
            userVerification: 'discouraged'
          },
          timeout: 60000,
          attestation: "direct",
        }
      });

      // https://webauthn.guide/

      console.log(credential);
    }
  },
}
</script>

<style scoped>

</style>