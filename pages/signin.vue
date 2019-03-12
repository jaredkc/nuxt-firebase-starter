<template>
  <div class="ma-auto" style="max-width:340px;">
    <v-card class="my-3">
      <v-card-text class="pa-4 text-xs-center">
        <sign-in-google class="mt-3" />
      </v-card-text>
      <div class="typ-center-line grey--text text--darken-2">
        or
      </div>
      <v-card-text class="pa-4">
        <v-form class="content-narrow" @submit.prevent="signIn">
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            :rules="[value => !!value || 'Required.']"
          />

          <v-text-field
            v-model="password"
            name="password"
            label="Password"
            hint="At least 8 characters"
            counter
            :append-icon="show ? 'visibility_off' : 'visibility'"
            :type="show ? 'text' : 'password'"
            :rules="[rules.required, rules.min]"
            @click:append="show = !show"
          />

          <v-alert
            :value="feedback"
            icon="error"
            color="error"
            transition="slide-y-transition"
            class="mt-4"
          >
            {{ feedback }}
          </v-alert>

          <div class="mt-4 mb-3">
            <v-btn
              :disabled="!email || !password"
              color="primary"
              type="submit"
              block
              large
            >
              Sign in
            </v-btn>
          </div>
          <v-btn block flat color="primary" @click.prevent="resetPassword">
            Forgot password?
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <v-card class="my-3">
      <v-card-text class="py-4 text-xs-center">
        Don't have an account?
        <nuxt-link :to="{name: 'signup'}">
          Sign up
        </nuxt-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { auth } from '@/fireinit.js'

import SignInGoogle from '~/components/SignInGoogle.vue'

export default {
  name: 'SignIn',
  components: { SignInGoogle },
  head() {
    return {
      title: 'Sign in'
    }
  },
  data() {
    return {
      email: null,
      feedback: null,
      show: false,
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters'
      }
    }
  },
  methods: {
    signIn() {
      if (this.email && this.password) {
        this.feedback = null
        auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then(res => {
            this.$store.commit('user/setUser', res.user)
            this.$router.push({ name: 'index' })
          })
          .catch(err => {
            this.feedback = err.message
          })
      } else {
        this.feedback = 'Email and Password are required'
      }
    },
    resetPassword() {
      if (this.email) {
        auth
          .sendPasswordResetEmail(this.email)
          .then(() => {
            this.feedback = 'Please check your email for a password reset'
          })
          .catch(err => {
            this.feedback = err.message
          })
      } else {
        this.feedback = 'Enter your email to reset your password'
      }
    }
  }
}
</script>
