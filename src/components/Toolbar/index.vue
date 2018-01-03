<template>
  <v-toolbar
    color="primary darken-3"
    dark
    app
    clipped-left
    fixed
  >
    <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="handleDrawer"></v-toolbar-side-icon>
      <span class="hidden-xs-only">OneHower Admin</span>
    </v-toolbar-title>
    <div class="d-flex align-center" style="margin-left: auto">
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
    </div>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'toolbar',
    data() {
      return {
        drawer: null,
      };
    },
    methods: {
      handleDrawer() {
        this.$store.dispatch('toggleDrawer', !this.$store.state.openDrawer);
      },
    },
  };
</script>

<style scoped>
</style>
