<template>
  <v-navigation-drawer
    fixed
    clipped
    app
    v-model="openDrawer"
  >
    <div>Drawer list here</div>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'drawer',
    data() {
      return {
      };
    },
    computed: {
      openDrawer() {
        return this.$store.state.openDrawer;
      },
    },
  };
</script>

<style scoped>
</style>
