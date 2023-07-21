<template>

    <div v-if="loading">
      <h2>Loading...</h2>
      {{ loading }}
    </div>
    <div v-else class="m-2">

      <h2 class="text-center text-xl mb-2">Eastern Conference</h2>
      <div class="grid gap-4 grid-cols-3 justify-stretch">
        <TeamCard v-for="team in easternConference" :teamInfo="team"></TeamCard>
      </div>

      <h2 class="text-center text-xl mb-2">Western Conference</h2>
      <div class="grid gap-4 grid-cols-3 justify-stretch">
        <TeamCard v-for="team in westernConference" :teamInfo="team"></TeamCard>
      </div>

    </div>
</template>

<script setup lang="ts">
import TeamCard from '../atoms/TeamCard.vue'
import { getAllTeams } from '../../composables/useGetTeams'
const { easternConference, westernConference, loading } = await getAllTeams()
</script>

