<template>
  <page-card>
    <h1>Welcome to the Admin</h1>
    <p>You can only access this page if you're signed in.</p>
  </page-card>
</template>

<script>
import PageCard from '@/components/PageCard.vue';

export default {
  name: 'Admin',
  components: { PageCard },
  head() {
    return {
      title: 'Admin'
    };
  }
};
</script>
