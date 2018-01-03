<template>
  <v-footer
    app
    dark
    color="cyan"
  >
    <div class="desc white--text">{{copyInfo}}</div>
  </v-footer>
</template>

<script>
  export default {
    name: 'app-footer',
    data() {
      return {
        copyInfo: 'Copyright © 2016 - 2017 Princess310. All Rights Reserved.蜀ICP备16032532号',
      };
    },
  };
</script>

<style scoped>
.footer {
  justify-content: center;
}

.desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
