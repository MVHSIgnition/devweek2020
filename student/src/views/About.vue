<template>
  <div class="about">
    <h1>This is an  page</h1>
    <button v-on:click="login">login</button>
    <button v-on:click="create">create</button>
    <button v-on:click="join">join</button>
    <button v-on:click="send">send</button>
  </div>
</template>

<script>


export default {
  name: 'About',
  props: {

  },
  data: function() {
    return {
      client: "",
      channel: "",
      uid: 'DE4UEhqJ1A5npT1KgEz87c74MO7yjwJlyOUxBle2YEKpo0xa3LXmxX4pBVwSbs8' + Math.floor(Math.random() * 10)
    }
  },
  methods: {

    login: function() {
      this.client.login({ token: null, uid: this.uid }).then(() => {
        console.log('AgoraRTM client login success');
      }).catch(err => {
        console.log('AgoraRTM client login failure', err);
      });
    },
    create: function() {
      this.channel = this.client.createChannel('demoChannelName'); // Pass your channel ID here.
      this.channel.on('ChannelMessage', ({ text }, senderId) => { // text: text of the received channel message; senderId: user ID of the sender.
        console.log(senderId + ": " + text);
      });
    },
    join: function() {
      this.channel.join().then(() => {
        console.log("You joined channel successfully");
      }).catch(error => {
        console.log("Failure to join channel");
      });
    },
    send: function() {
      this.channel.sendMessage({ text: 'test channel message' }).then(() => {
        console.log("successfully sent");
      }).catch(error => {
        console.log("failure to send");
      });
    }
  },
  created() {
    this.client = this.$client.createInstance('4b7e608f84004ea2acd537eda95f6bf8'); 
    console.log("hi");

    this.client.on('ConnectionStateChange', (newState, reason) => {
      console.log('on connection state changed to ' + newState + ' reason: ' + reason);
    });
  }
}
</script>