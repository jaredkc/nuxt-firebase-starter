<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">
          Welcome
        </v-card-title>
        <v-card-text>
          <p>
            This is a starter template for <a
              href="https://nuxtjs.org/"
              target="_blank"
            >Nuxt</a>, <a
              href="https://vuetifyjs.com"
              target="_blank"
            >Vuetify</a>, and <a
              href="https://firebase.google.com/"
              target="_blank"
            >Firebase</a>.
          </p>
          <p>To learn more visit this <a href="https://github.com/jaredkc/nuxt-firebase-starter">project on Github</a>.</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Index',
  head() {
    return {
      title: 'Welcome'
    }
  }
}
</script>
