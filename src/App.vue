<script setup lang="ts">
import Header from './components/Header.vue'
import Dashboard from './components/views/Dashboard.vue'
</script>

<template>
  <Header />
  <Suspense>
    <Dashboard />
    <template #fallback>
      Loading...
    </template>
  </Suspense>

</template>

<style scoped>
</style>
