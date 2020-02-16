<template>
  <v-app>
    <v-app-bar
      :collapse="false"
      :collapse-on-scroll="false"
      absolute
      color="green lighten-1"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Intellecture</v-toolbar-title>

      <v-spacer></v-spacer>

      <h1>{{code}}</h1>

      <div v-if="logged" class="my-2 ml-3">
        <v-btn v-on:click="exit" depressed color="error">Exit</v-btn>
      </div>
    </v-app-bar>

    <div style="height: 64px;"></div>

    <v-content>
      <router-view v-on:code="changeCode($event)" v-on:logger="logged = !logged" :exit="exitVal"/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    code: "",
    exitVal: false,
    logged: false
  }),

  methods: {
    changeCode: function(data) {
      console.log(data);
      this.code = data;
    },
    exit: function() {
      this.exitVal = !this.exitVal;
    }
  }
};
</script>
