<template>
  <v-content>
    <v-container
      fluid
    >
      <h1 class="display-1">Lecture: <strong>{{ lectureName }}</strong></h1>
      <br><br>
      <v-row align="center" justify="center">
        <v-card width="400" height="400">
          <v-card-text>
            <span class="text--primary title"><span style="background: red; padding: 2px 5px; color: white; border-radius: 3px;animation: animation: blink 1s step-start 0s infinite;" class="blink">LIVE</span> Understanding Score</span>
            <br><br><br><br><br><br>
            <span class="text--primary font-weight-black" style="margin: 0 auto; text-align: center; font-size: 150px; background: #ddd; border-radius: 7px; padding: 4px 10px;">{{ understandingScore }}%</span>
            <br><br><br><br>
            <span class="text--primary title">Average Understanding: </span>
            <span class="text--primary font-weight-black" style="font-size: 20px; background: #ddd; padding: 2px 4px; border-radius: 3px;">{{ averageUnderstanding }}</span>
            <br>
            <span class="text--primary title">Understanding Range: </span>
            <span class="text--primary font-weight-black" style="font-size: 20px; background: #ddd; padding: 2px 4px; border-radius: 3px;">{{ range }}</span>
            <br>
          </v-card-text>
        </v-card>
        <v-card width="800px" height="400px" align="center" justify="center" style="padding-top: 50px;">
          <div id="chart-container" class="ml-3" style="height: 300px; width: 700px"></div>
        </v-card>
      </v-row>
      <v-row align="center" justify="center">
        <v-col align="center">
          <a href="#questions"><i id="arrow-btn" class="fas fa-chevron-down" style="font-size:8vmin;color:gray;transform:translate(0,0);"></i></a>

          <h1 id="questions" class="display-2 mt-9 mb-4 pt-9">Questions</h1>
          <ul style="list-style-type: none">
            <li v-for="question in questions" v-bind:key="question.id">
              <v-banner>
                {{question.text}}
                <template v-slot:actions>
                  <v-btn text color="primary">Dismiss</v-btn>
                </template>
              </v-banner>
            </li>
          </ul>

          <div style="min-height: 80vh;"></div>
        </v-col>
      </v-row>

          <v-col>
            <v-card
              class="mx-auto"
              max-width="400"
              tile
            >
              <v-list-item 
                v-for="n in 3"
                v-bind:key="n"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ (n) + ': ' + keywords[n-1].word }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          
          <v-col>
            <ul style="list-style-type: none">
              <li v-for="question in questions" v-bind:key="question.id">
                <v-banner>
                  {{question.text}}
                  <template v-slot:actions>
                    <v-btn text color="primary">Dismiss</v-btn>
                  </template>
                </v-banner>
              </li>
            </ul>
            <div style="height: 400px;"></div>
          </v-col>
        </v-col>
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
import * as http from 'http';

export default {
  data() {
    return {
      id: this.$route.query.id,
      lectureName: this.$route.query.name,
      understandingScore: '--',
      averageUnderstanding: '--',
      range: '--',
      client: null,
      channel: null,
      people: {},
      understandingByPerson: {},
      log: [],
      averageLog: [],
      start: Date.now(),
      questions: [
        {text: "waht is this", id: 0},
        {text: "waht is this", id: 1},
        {text: "waht is this", id: 2}
      ],
      keywords: /* hardcoded data */ [{word: 'gaussian surface', count: 6}, {word: 'electric flux', count: 4}, {word: 'voltage', count: 3}],
    }
  },
  methods: {
    setup() {
      console.log('keywords', this.keywords);
      this.channel = this.client.createChannel(this.id);
      this.channel.on('ChannelMessage', ({ text }, email) => {
        let obj = JSON.parse(text);
        console.log(text);

        if (obj.type === 'login') {
          this.people[email] = text;
          this.saveForEmail(email, 5);
        } else if (obj.type === 'update') {
          this.saveForEmail(email, obj.value);
        } else if (obj.type === 'question') {
          this.analyzeQuestion(obj.question);
          console.log('Question: ' + obj.question)
          this.questions.unshift({text: obj.question, id: this.questions.length});
          return;
        }

        this.averageUnderstanding = this.computeAverage();
        this.range = this.calculateStandardDeviation(this.averageUnderstanding);
        this.understandingScore = this.compositeScore(this.averageUnderstanding, this.range);
        this.averageLog.push({
          x: (Date.now() - this.start) / 1000,
          y: this.understandingScore
        });

        this.chart.render();
        while (this.averageLog[this.averageLog.length - 1].x - this.averageLog[0].x > 30) {
          this.averageLog.shift();
        }
      });
      this.channel.join().then(() => {
        console.log("You joined channel successfully");
      }).catch(error => {
        console.log("Failure to join channel");
      });
    },
    async analyzeQuestion(question) {
      //TODO: fix this api call!!! (cors error)

      /*let formData = new FormData();
      formData.append('extractors', 'entities,phrases');
      formData.append('text', question);

      console.log('analyze question', question);

      await fetch('https://api.textrazor.com/', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-textrazor-key': '58ac6a6d3c599102da02a774d80ebd58de757aac78a10f99071178c0',
        },
        body: formData,
      })
      .then((response) => response.json())
      .then(function(data) {
        console.log('data: ', data);
      })
      .catch(err => console.log(err));
      */
    },
    saveForEmail(email, value) {
      this.log.push({ email, value, time: Date.now() });
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
      console.log(max - min);
      return max - min;
    },
    compositeScore(avg, std) {
      return Math.round((avg - (.1 * avg * std)) * 10);
    },
    initChart() {
      this.chart = new CanvasJS.Chart('chart-container', {
        exportEnabled: true,
        title: {
          text: 'Understanding',
          fontFamily: 'Roboto'
        },
        axisY: {
          includeZero: true,
          maximum: 100,
        },
        data: [{
          type: 'line',
          markerSize: 0,
          lineThinkness: 6,
          dataPoints: this.averageLog,
          lineColor: "red"
        }]
      });
      this.chart.render();
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
    this.initChart();
    this.$emit("startlecture");
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

html {
  scroll-behavior: smooth;
}

#arrow-btn {
  transition: all 0.3s;
}

#arrow-btn:hover {
  font-size: 20px;
}

</style>