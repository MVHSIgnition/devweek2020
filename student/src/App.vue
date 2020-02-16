<template>
  <v-app>
    <v-app-bar
      :collapse="false"
      :collapse-on-scroll="false"
      absolute
      color="green lighten-1"
      dark
    >

      <v-toolbar-title v-if="code == ''">Intellecture Student</v-toolbar-title>
      <div v-if="code != ''" style="border-radius: 5px; background-color: #ddd; padding: 0px 10px; color: black; height: 40px; font-size: 15px;">
        <h1>{{code}}</h1>
      </div>
      <div v-if="logged" class="my-2 ml-3">
        <v-btn v-on:click="exit" depressed color="error">Exit</v-btn>
      </div>

      <v-spacer></v-spacer>

      <div v-if="profilePic != undefined && profilePic != ''" >
        <v-menu
          v-model="signOutValue"
        >
          <template v-slot:activator="{ on }">
            <v-avatar v-on="on">
              <v-img v-bind:src="profilePic"></v-img>
            </v-avatar>
          </template>
          <v-list>
            <v-list-item
              @click="signOut"
            >
              <v-list-item-title>Sign out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
import { mapState } from 'vuex';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  computed: {
    ...mapState(['profilePic', 'auth2'])
  },

  data: () => ({
    code: "",
    exitVal: false,
    logged: false,
    signOutValue: false,
  }),

  methods: {
    changeCode: function(data) {
      console.log(data);
      this.code = data;
    },
    exit: function() {
      this.exitVal = !this.exitVal;
    },
    signOut: function() {
      this.auth2.signOut();
    },
  }
};
</script>

<style scoped>

</style>