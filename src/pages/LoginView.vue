<template>
  <v-app class="login">
    <v-layout justify-center align-center class="login">
      <v-card class="login-containr">
        <v-card-title>OneHower Admin</v-card-title>
        <v-card-text>
          <v-text-field
            label="username"
            v-model="username"
            :rules="[() => username.length > 0 || 'This field is required']"
            required
          ></v-text-field>
          <v-text-field
            label="password"
            v-model="password"
            type="password"
            :rules="[() => password.length > 0 || 'This field is required']"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="white">
          <v-layout justify-end>
            <v-btn flat color="cyan" @click="handleLogin">Login</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: 'login-view',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
  watch: {
    currentUser(user) {
      if (user && user.id) {
        const { query: { redirect } } = this.$route;
        const path = redirect || '/';

        this.$router.replace(path);
      }
    },
  },
  methods: {
    handleLogin() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 750px;
}

.login-containr {
  width: 400px;
}
</style>
