<script setup lang="ts">

</script>

<template>
  <header id="site-header">
    <ul class="menu-items">
      <li class="logo">Vue NHL Dashboard</li>
    </ul>
  </header>
</template>

<style scoped>
#site-header {
  width: 100%;
  min-height: 10%;
  background-color: #41b782;
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
.logo {
  font-size: x-large;
  font-weight: bold;
  color: whitesmoke;
  margin-left: 1rem;
}
</style>