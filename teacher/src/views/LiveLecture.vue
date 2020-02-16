<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row align="center" justify="center">
        <v-card width="500" height="400">
          <v-card-text>
            <span class="text--primary title"><span style="background: red; padding: 2px 5px; color: white; border-radius: 3px;animation: animation: blink 1s step-start 0s infinite;" class="blink">LIVE</span> Average Understanding</span>
            <br><br><br><br>
            <span class="text--primary font-weight-black" style="margin: 0 auto; text-align: center; font-size: 100px; background: #ddd; border-radius: 7px; padding: 4px 10px;">{{ averageUnderstanding }}</span>
            <br><br><br>
            <span class="text--primary title"><span style="background: red; padding: 2px 5px; color: white; border-radius: 3px;animation: animation: blink 1s step-start 0s infinite;" class="blink">LIVE</span> Understanding Range</span>
            <br><br><br><br>
            <span class="text--primary font-weight-black" style="margin: 0 auto; text-align: center; font-size: 100px; background: #ddd; border-radius: 7px; padding: 4px 10px;">{{ range }}</span>
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
      averageUnderstanding: 5,
      range: '0',
      client: null,
      channel: null,
      people: {},
      understandingByPerson: {},
      log: []
    }
  },
  methods: {
    setup() {
      this.channel = this.client.createChannel(this.id);
      this.channel.on('ChannelMessage', ({ text }, email) => {
        let val = parseInt(text);

        if (isNaN(val)) {
          this.people[email] = text;
          this.saveForEmail(email, 5);
        } else {
          this.saveForEmail(email, val);
        }

        this.averageUnderstanding = this.computeAverage();
        this.range = this.calculateStandardDeviation(this.averageUnderstanding) + '';
      });
      this.channel.join().then(() => {
        console.log("You joined channel successfully");
      }).catch(error => {
        console.log("Failure to join channel");
      });
    },
    saveForEmail(email, value) {
      this.log.push({ email, value });
      this.understandingByPerson[email] = value;
    },
    computeAverage() {
      let arr = Object.values(this.understandingByPerson);
      let total = 0;
      for (let each of arr) total += each;
      return total / arr.length;
    },
    calculateStandardDeviation(avg) {
      let arr = Object.values(this.understandingByPerson);
      let num = 0;
      for (let each of arr) {
        num += (avg - each) ** 2;
      }
      return Math.sqrt(num / arr.length);
    },
    calculateRange() {
      let arr = Object.values(this.understandingByPerson);
      let min = arr[0];
      let max = arr[0];
      for (let each of arr) {
        if (min > each) {
          min = each;
        }

        if (max < each) {
          max = each;
        }
      }
      console.log(max-min);
      return max - min;
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
/* @keyframes blink {
  0% { background: red; }
  50% { background: black; }
  100% { background: red; }
}
.blink {
  animation: blink 3s linear infinite;
} */
</style>