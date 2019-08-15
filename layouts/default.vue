<template>
  <div>
    <nav class="app-nav">
      <div>
        {{ title }}
      </div>
      <div>
        <nuxt-link :to="{name: 'index'}">
          Home
        </nuxt-link>
        &middot;
        <nuxt-link :to="{name: 'admin'}">
          Admin
        </nuxt-link>
      </div>
      <div v-if="$store.state.user.signedIn">
        <img :src="$store.state.user.photoURL" alt="avatar" class="avatar">
        <nuxt-link :to="{name: 'account'}">
          My Account
        </nuxt-link>
        <button @click="signOut">
          Sign out
        </button>
      </div>
      <div v-else>
        <nuxt-link :to="{name: 'signin'}">
          Sign in
        </nuxt-link>
      </div>
    </nav>

    <main class="app-main">
      <nuxt />
    </main>
  </div>
</template>

<script>
import { auth } from '@/fireinit.js';

export default {
  data() {
    return {
      title: 'NuxtFire App'
    };
  },
  methods: {
    signOut() {
      auth.signOut().then(() => {
        this.$store.commit('user/unsetUser');
        this.$router.push({ name: 'signin' });
      });
    }
  }
};
</script>

<style lang="scss">
.app-nav {
  align-items: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  min-height: 3rem;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.avatar {
  border-radius: 15px;
  width: 30px;
}
.app-main {
  align-items: center;
  display: flex;
  height: 100vh;
  padding: 1rem;
}
</style>
