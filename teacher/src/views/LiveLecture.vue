<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
    </v-container>
  </v-content>
</template>

<script>

export default {
  data() {
    return {
      id: this.$route.query.id,
      client: null,
      channel: null
    }
  },
  methods: {
    setup() {
      this.channel = this.client.createChannel(this.id);
      this.channel.on('ChannelMessage', ({ json }, email) => {
        let obj = JSON.parse(json);
        console.log(email, obj);
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
