<template>
  <div class="ma-auto" style="max-width:340px;">
    <sign-in-google class="mt-3" />
    <p>or</p>

    <form class="content-narrow" @submit.prevent="signIn">
      <p>
        <label for="email">Email</label><br>
        <input id="email" v-model="email" type="email">
      </p>
      <p>
        <label for="password">Password</label><br>
        <input id="password" v-model="password" type="password">
      </p>

      <p v-if="feedback">
        {{ feedback }}
      </p>

      <button :disabled="!email || !password" type="submit">
        Sign in
      </button>

      <button @click.prevent="resetPassword">
        Forgot password?
      </button>
    </form>
    <p>
      Don't have an account? <nuxt-link :to="{name: 'signup'}">
        Sign up
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import { auth } from '@/fireinit.js';

import SignInGoogle from '~/components/SignInGoogle.vue';

export default {
  name: 'SignIn',
  components: { SignInGoogle },
  head() {
    return {
      title: 'Sign in'
    };
  },
  data() {
    return {
      email: null,
      feedback: null,
      show: false,
      password: ''
    };
  },
  methods: {
    signIn() {
      if (this.email && this.password) {
        this.feedback = null;
        auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then(res => {
            this.$store.commit('user/setUser', res.user);
            this.$router.push({ name: 'index' });
          })
          .catch(err => {
            this.feedback = err.message;
          });
      } else {
        this.feedback = 'Email and Password are required';
      }
    },
    resetPassword() {
      if (this.email) {
        auth
          .sendPasswordResetEmail(this.email)
          .then(() => {
            this.feedback = 'Please check your email for a password reset';
          })
          .catch(err => {
            this.feedback = err.message;
          });
      } else {
        this.feedback = 'Enter your email to reset your password';
      }
    }
  }
};
</script>
