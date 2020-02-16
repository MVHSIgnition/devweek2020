<template>
  <div>
    <v-content>
      <div v-if="error">
          <p class="red--text font-weight-bold	display-3 text-center mt-5">Invalid code</p>
      </div>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">

          <v-col v-if="!error" class="mt-9" cols="8" align="center" justify="center">
            <h1 class="mb-9 display-3">Rate your understanding</h1>
            <h1 id="understanding" class="display-1 mb-9" :style="{color: color}">{{understanding}}</h1>
            <v-slider
              v-model="slider"
              max="10"
              min="1"
              thumb-label="always"
              step="1"
              ticks="always"
              tick-size="4"
              class="mt-9 pt-3"
            ></v-slider>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
	name: "Lecture",
	data() {
		return {
      client: "",
      code: "",
      error: false,
      slider: 5,
      levels: ["I'm lost", "I'm confused", "I kinda get it", "I think I get it", "I completely understand"],
      colors: ['rgb(240, 53, 36)', "rgb(255, 183, 0)", "rgb(250, 225, 0)", "rgb(126, 196, 4)", "rgb(127, 240, 7)"],
      color: ""
    }
	},
	methods: {
  },
  created() {
    this.code = this.$route.query.code;

    this.client = this.$client.createInstance('4b7e608f84004ea2acd537eda95f6bf8'); 

    this.client.on('ConnectionStateChange', (newState, reason) => {
      console.log('on connection state changed to ' + newState + ' reason: ' + reason);
    });

    this.client.login({ token: null, uid: "Tony" }).then(() => {
      console.log("Login successful");
      this.client.getChannelMemberCount([this.code]).then((result) => {
        var lecCode = this.code;
        console.log("Channel member count: " + Object.values(result)[0]);
        if(/*Object.values(result)[0] > 0*/ true) {
          this.channel = this.client.createChannel(this.code);
          var message = "";
          channel.sendMessage({ text: message}).then(() => {}).catch(error => { console.log(error);});
          this.channel.on('ChannelMessage', ({ text }, senderId) => { 
            console.log(senderId + ": " + text);
          });
        } else {
          this.error = true;
        }
      });
    }).catch(err => {
      console.log('AgoraRTM client login failure', err);
    });

  },
  computed: {
    understanding: function() {
      this.color = this.colors[Math.floor((this.slider-1)/2)];
      return this.levels[Math.floor((this.slider-1)/2)]
    }
  }
}
</script>

<style scoped>

  #understanding {
    transition: all 0.4s;
  }

</style>
