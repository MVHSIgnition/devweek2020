<template>
  <div>
    <v-content>
      <div v-if="error == 'true'">
          <p class="red--text font-weight-bold display-4 text-center mt-9 pt-9">Invalid code</p>
      </div>
      <v-container>
        <v-row align="center" justify="center">
          <v-col v-if="error == 'false'" class="mt-1" align="center" justify="center">
            <v-card
              class="mx-auto"
              max-width="100vw"
              style="padding: 20px;"
              outlined
            >
              <h1 class="mb-9 header" id="rate-text">Rate your understanding</h1>
              <div id="understanding-container">
                <h1 id="understanding" class="header mb-9" :style="{color: color}">{{understanding}}</h1>
              </div>
              <v-slider
                v-model="slider"
                max="10"
                min="1"
                thumb-label
                step="1"
                ticks="always"
                tick-size="4"
                class="mt-9 pt-3"
                :tick-labels="numbers"
              ></v-slider>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-if="error == 'false'" class="mt-1" align="center" justify="center">
            <v-card
              class="mx-auto"
              max-width="100vw"
              style="padding: 20px;"
              outlined
            >
              <h1 class="mb-9 header" id="quest-text">Any questions?</h1>
              <form>
                <v-text-field label="Questions" v-model="question" outlined></v-text-field>
                <v-btn class="mr-4" @click="submit">submit</v-btn>
              </form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Lecture",
  props: {
    exit: Boolean
  },
	data() {
		return {
      client: "",
      code: "",
      error: "none",
      slider: 5,
      levels: ["I'm lost", "I'm confused", "I kinda get it", "I think I get it", "I completely understand"],
      colors: ["rgb(240, 53, 36)", "rgb(255, 183, 0)", "rgb(250, 225, 0)", "rgb(126, 196, 4)", "rgb(127, 240, 7)"],
      color: "",
      prev: 5,
      numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      question: ""
    }
	},
	methods: {
    submit: function() {
      var message = {
        type: "question",
        question: this.question
      }
      this.channel.sendMessage({ text: JSON.stringify(message)}).then(() => {}).catch(error => { console.log(error);});
      this.question = "";
    }
  },
  created() {
    this.code = this.$route.query.code;
    this.$emit('code', this.code);
    this.$emit('logger');

    this.client = this.$client.createInstance('4b7e608f84004ea2acd537eda95f6bf8'); 

    this.client.on('ConnectionStateChange', (newState, reason) => {
      console.log('on connection state changed to ' + newState + ' reason: ' + reason);
    });

    this.client.login({ token: null, uid: this.email}).then(() => {
      console.log("Login successful");
      this.client.getChannelMemberCount([this.code]).then((result) => {
        var lecCode = this.code;
        console.log("Channel member count: " + Object.values(result)[0]);
        if(Object.values(result)[0] > 0) {
          this.channel = this.client.createChannel(this.code);
          this.channel.join().then(() => {
            this.error = "false";
            var message = {
              type: "login",
              name: this.firstName + " " + this.lastName
            };
            //var message = window.name;
            this.channel.sendMessage({ text: JSON.stringify(message)}).then(() => {}).catch(error => { console.log(error);});
            this.channel.on('ChannelMessage', ({ text }, senderId) => { 
              console.log(senderId + ": " + text);
            });
          }).catch(error => {
            console.log(error);
          });
        } else {
          this.error = "true";
        }
      });
    }).catch(err => {
      console.log('AgoraRTM client login failure', err);
    });
  },
  computed: {
    understanding: function() {
      this.color = this.colors[Math.floor((this.slider-1)/2)];
      if(this.channel != null && this.channel != "null") {
        if(this.slider != this.prev) {
          this.prev = this.slider
          var message = {
            type: "update",
            value: this.slider
          }
          console.log(message);
          this.channel.sendMessage({ text: JSON.stringify(message)}).then(() => {}).catch(error => { console.log(error);});
        }
      }
      return this.levels[Math.floor((this.slider-1)/2)]
    },
    ...mapState(['firstName', 'lastName', 'profilePic', 'email'])
  },
  watch: {
    'exit': function() {
      if(this.channel != null && this.channel != "null") {
        this.channel.leave();
      }
      if(this.client != null && this.client != "null") {
        this.client.logout();
      }
      this.$emit('logger');
      this.$router.push({ path: '/join'});
    }
  }
}
</script>

<style scoped>

  #understanding {
    transition: all 0.4s;
    font-size: 35px;
    font-weight: 395;
  }

  #rate-text, #quest-text {
    font-size: 45px;
    font-weight: 400;
  }

  @media (max-width: 767px) {
    #rate-text, #quest-text {
      font-size: 35px;
    }

    #understanding {
      font-size: 30px;
      font-weight: 400;
    }

    #understanding-container {
      height: 90px;
    }
  }

</style>
