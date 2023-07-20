<template>

    <div v-if="loading">
      <h2>Loading...</h2>
      {{ loading }}
    </div>
    <div v-else class="m-2">
      
      <h2>Eastern Conference</h2>
      <div class="grid gap-4 grid-cols-3 justify-stretch">
        <Card v-for="team in easternConference">
          <p>{{ team.name }}</p>
          <p>{{ team.conference.name }} Conference ({{ team.division.name }} Division)</p>
          <a :href="team.officialSiteUrl" target="_blank">{{ team.officialSiteUrl }}</a>
          <p>Venue: {{ team.venue.name }}</p>
          <p>First Year Of Play: {{ team.firstYearOfPlay }}</p>
        </Card>
      </div>

      <h2>Western Conference</h2>
      <div class="grid gap-4 grid-cols-3 justify-stretch">
        <Card v-for="team in westernConference">
          <p>{{ team.name }}</p>
          <p>{{ team.conference.name }} Conference ({{ team.division.name }} Division)</p>
          <a :href="team.officialSiteUrl" target="_blank">{{ team.officialSiteUrl }}</a>
          <p>Venue: {{ team.venue.name }}</p>
          <p>First Year Of Play: {{ team.firstYearOfPlay }}</p>
        </Card>
      </div>

    </div>
</template>

<script setup lang="ts">
import Card from '../atoms/Card.vue'
import { getAllTeams } from '../../composables/useGetTeams'
const { easternConference, westernConference, loading } = await getAllTeams()
</script>

