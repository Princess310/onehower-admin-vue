<template>
  <v-navigation-drawer
    fixed
    clipped
    app
    v-model="openDrawer"
  >
    <v-list>
      <template v-for="(item, i) in items">
        <v-list-tile
          ripple
          exact
          :key="i"
          :to="item.url"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'drawer',
    data() {
      return {
        items: [
          { icon: 'home', text: 'Home', url: '/' },
          { icon: 'contacts', text: 'Users', url: '/user' },
          { icon: 'history', text: 'Moments', url: '/moments' },
          { icon: 'settings', text: 'Settings', url: 'settings' },
          { icon: 'help', text: 'Help', url: '/help' },
        ],
      };
    },
    computed: {
      openDrawer: {
        get() {
          return this.$store.state.openDrawer;
        },
        set(v) {
          this.$store.dispatch('toggleDrawer', v);
        },
      },
    },
  };
</script>

<style scoped>
</style>
