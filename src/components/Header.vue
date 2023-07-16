<script setup lang="ts">

</script>

<template>
  <header id="site-header">
    <ul class="menu-items">
      <li class="menu-item">One</li>
      <li class="menu-item">Two</li>
      <li class="menu-item">Three</li>
    </ul>
  </header>
</template>

<style scoped>
#site-header {
  width: 100%;
  min-height: 10%;
  background-color: #131384;
}
.menu-items {
  margin-top: 0;
  display: flex;
  min-height: 7vh;
  align-items: center;
  list-style: none;
}
.menu-item {
  color: whitesmoke;
  margin-right: 1rem;
}
</style>