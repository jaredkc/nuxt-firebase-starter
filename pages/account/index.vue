<template>
  <page-card>
    <img :src="photoURL" alt="avatar" class="avatar">
    <h1>My Account</h1>
    <p>You can only access this page if you're signed in.</p>
    <p>
      <button @click="signOut">
        Sign out
      </button>
    </p>
  </page-card>
</template>

<script>
import { auth } from '@/fireinit.js';

import PageCard from '@/components/PageCard.vue';

export default {
  name: 'Account',
  components: { PageCard },
  computed: {
    photoURL() {
      return this.$store.state.user.photoURL;
    }
  },
  head() {
    return {
      title: 'Account'
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

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  width: 100px;
}
</style>
