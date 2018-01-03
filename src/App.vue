<template>
  <v-app id="app">
    <app-drawer></app-drawer>
    <app-toolbar></app-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Drawer from '@/components/Drawer';
import Toolbar from '@/components/Toolbar';

export default {
  name: 'app',
  components: {
    'app-drawer': Drawer,
    'app-toolbar': Toolbar,
  },
};
</script>

<style>
</style>
