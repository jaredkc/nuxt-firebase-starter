<template>
  <div>
    <nav class="app-nav">
      <div>
        <nuxt-link :to="{name: 'index'}">
          <b>{{ title }}</b>
        </nuxt-link>
      </div>
      <div v-if="isSignedIn">
        <ul>
          <li>
            <nuxt-link :to="{name: 'admin'}">
              Admin
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{name: 'account'}">
              My Account
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div v-else>
        <ul>
          <li>
            <nuxt-link :to="{name: 'signin'}">
              Sign in
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'NuxtFire App'
    };
  },
  computed: {
    isSignedIn() {
      return this.$store.state.user.signedIn;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-nav {
  align-items: center;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    display: inline-block;
    margin-left: 1rem;
  }
}
</style>
