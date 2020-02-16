<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row align="center" justify="center">
        <v-card width="500" height="200">
          <v-card-text>
            <span class="text--primary title"><span style="background: red; padding: 2px 5px; color: white; border-radius: 3px;animation: animation: blink 1s step-start 0s infinite;" class="blink">LIVE</span> Average Understanding</span>
            <br><br><br><br>
            <span class="text--primary font-weight-black" style="margin: 0 auto; text-align: center; font-size: 80px; background: #ddd; border-radius: 7px; padding: 4px 10px;">{{ averageUnderstanding }}</span>
            <br>
          </v-card-text>
        </v-card>
      </v-row>

    </v-container>

      <v-footer
        fixed
        color="green lighten-3"
        class="font-weight-medium"
      >
        <v-col
          class="text-center"
          cols="12"
          sm="8"
        >
          <span style="font-size: 28px;">Give your students the join code: <span class="text--primary font-weight-black" style="background: #ddd; border-radius: 7px; padding: 4px 10px;">{{ id }}</span></span>
        </v-col>
      </v-footer>
  </v-content>
</template>

<script>

export default {
  data() {
    return {
      id: this.$route.query.id,
      averageUnderstanding: 5.14,
      client: null,
      channel: null
    }
  },
  methods: {
    setup() {
      this.channel = this.client.createChannel(this.id);
      this.channel.on('ChannelMessage', ({ text }, email) => {
        console.log(email, text);
      });
      this.channel.join().then(() => {
        console.log("You joined channel successfully");
      }).catch(error => {
        console.log("Failure to join channel");
      });
    }
  },
  mounted() {
    this.client = this.$client.createInstance('4b7e608f84004ea2acd537eda95f6bf8');
    this.client.on('ConnectionStateChange', (newState, reason) => {
      console.log('on connection state changed to ' + newState + ' reason: ' + reason);
    });
    this.client.login({ token: null, uid: 'teacher' }).then(() => {
      this.setup();
      console.log('AgoraRTM client login success');
    }).catch(err => {
      console.log('AgoraRTM client login failure', err);
    });
  }
}
</script>

<style>
@keyframes blink {
  50% {
    opacity: 0;
  }
}
.blink {
  animation: blink 1s step-start 0s infinite;
  transition: opacity 0.2s ease;
}
</style>