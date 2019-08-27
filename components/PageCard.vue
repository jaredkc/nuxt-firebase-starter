<template>
  <div class="page-card">
    <div class="page-card__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageCard'
};
</script>

<style lang="scss" scoped>
.page-card {
  align-items: center;
  background-color: #f8f8f8;
  display: flex;
  height: 100vh;
  padding: 1rem;
  width: 100%;
}
.page-card__content {
  background-color: #fff;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  margin: 1rem auto;
  max-width: 100%;
  padding: 1rem 2rem;
  width: 36rem;
}
</style>
