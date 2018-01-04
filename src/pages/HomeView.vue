<template>
  <v-app div class="home">
    <app-drawer></app-drawer>
    <app-toolbar></app-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <app-welcome v-if="showWelcome"></app-welcome>
        <router-view v-else></router-view>
      </v-container>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Drawer from '@/components/Drawer';
import Toolbar from '@/components/Toolbar';
import Footer from '@/components/Footer';
import HelloView from '@/pages/HelloView';

export default {
  name: 'home-view',
  components: {
    'app-drawer': Drawer,
    'app-toolbar': Toolbar,
    'app-footer': Footer,
    'app-welcome': HelloView,
  },
  computed: {
    showWelcome() {
      return this.$route.fullPath === '/';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
