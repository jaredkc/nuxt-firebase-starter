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
          Your User Account
        </v-card-title>
        <v-card-text>
          <p>You can only access this page if you're signed in.</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Account',
  head() {
    return {
      title: 'Account'
    }
  }
}
</script>
