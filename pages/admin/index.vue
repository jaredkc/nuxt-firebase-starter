<template>
  <div>
    <h1>Welcome to the Admin</h1>
    <p>You can only access this page if you're signed in.</p>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  head() {
    return {
      title: 'Admin'
    };
  }
};
</script>
