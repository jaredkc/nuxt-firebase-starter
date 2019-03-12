<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" />

      <v-spacer />

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
          >
            <v-avatar
              v-if="$store.state.user.photoURL"
              :size="24"
              color="grey lighten-4"
            >
              <img :src="$store.state.user.photoURL" alt="avatar">
            </v-avatar>
            <v-icon v-else>
              account_circle
            </v-icon>
          </v-btn>
        </template>
        <v-list dense>
          <template v-if="$store.state.user.signedIn">
            <v-list-tile
              to="/account"
              router
              exact
            >
              <v-list-tile-title>My Account</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              @click="signOut"
            >
              <v-list-tile-title>Sign out</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile
            v-else
            to="/signin"
            router
            exact
          >
            <v-list-tile-title>Sign in</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <v-container
        :fluid="fillHeight"
        :fill-height="fillHeight"
      >
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { auth } from '@/fireinit.js'

export default {
  data() {
    return {
      title: 'NuxtFire App',
      clipped: true,
      drawer: true,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'settings',
          title: 'Admin',
          to: '/admin'
        }
      ],
      miniVariant: false
    }
  },
  computed: {
    fillHeight() {
      const routeName = this.$route.name
      return routeName === 'signup' || routeName === 'signin'
    }
  },
  methods: {
    signOut() {
      auth.signOut().then(() => {
        this.$store.commit('user/unsetUser')
        this.$router.push({ name: 'signin' })
      })
    }
  }
}
</script>
