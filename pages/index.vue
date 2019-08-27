<template>
  <page-card>
    <h1>Welcome</h1>
    <p>
      This is a starter template for <a
        href="https://nuxtjs.org/"
        target="_blank"
      >Nuxt</a> and <a
        href="https://firebase.google.com/"
        target="_blank"
      >Firebase</a>. Some basic configuration is in place. Enough to get you started, simply enough to let you work the way you want.
    </p>
    <ul>
      <li>Firebase Authentication via email/password or Google sign in. Easy to add other sign-in methods.</li>
      <li>
        User data is saved in Vuex Store.
      </li>
      <li>Routes for <code>/admin</code> and <code>/account</code> only accessible once you're signed in.</li>
      <li>Nuxt Style Resources to share variables, mixins and functions across SCSS and Vue files.</li>
    </ul>
    <p>To learn more visit this <a href="https://github.com/jaredkc/nuxt-firebase-starter">project on Github</a>.</p>
  </page-card>
</template>

<script>
import PageCard from '@/components/PageCard.vue';

export default {
  name: 'Index',
  components: { PageCard },
  head() {
    return {
      title: 'Welcome'
    };
  }
};
</script>
