<template>
  <div>
    {{ teams }}
  </div>
</template>

<script setup lang="ts">
  import { getAllTeams } from '../../composables/useGetTeams'
  const teams = await getAllTeams()
  console.log(teams)
</script>

