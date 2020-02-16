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

      <v-toolbar-title>Intellecture Teacher Portal</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn @click="$router.push({ path: '/new' })">Start Lecture</v-btn>
    </v-app-bar>

    <div style="height: 64px;"></div>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
