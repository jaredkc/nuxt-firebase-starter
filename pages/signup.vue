<template>
  <page-card>
    <p><sign-in-google /></p>

    <p class="typ-center-line">
      or
    </p>

    <form class="content-narrow" @submit.prevent="signUp">
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
        Sign up
      </button>
    </form>

    <hr>

    <p>
      Already have an account?
      <nuxt-link :to="{name: 'signin'}">
        Sign in
      </nuxt-link>
    </p>
  </page-card>
</template>

<script>
import { auth } from '@/fireinit.js';

import PageCard from '@/components/PageCard.vue';
import SignInGoogle from '~/components/SignInGoogle.vue';

export default {
  name: 'SignUp',
  components: { PageCard, SignInGoogle },
  head() {
    return {
      title: 'Sign up'
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
    signUp() {
      if (this.email && this.password) {
        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(res => {
            this.$store.dispatch('user/authorize', res);
          })
          .then(() => {
            this.$router.push({ name: 'index' });
          })
          .catch(err => {
            this.feedback = err.message;
          });
      } else {
        this.feedback = 'Email and Password are required';
      }
    }
  }
};
</script>
