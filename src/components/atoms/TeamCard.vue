<template>
  <button 
    class="p-1 bg-grey-500 flex justify-between items-center border-2 shadow shadow-slate-50 active:bg-slate-50 hover:border-green-200"
  >
    <div class="text-left">  
      <p class="mb-2 ml-1 text-lg">{{ teamInfo?.name }} ({{ teamInfo?.abbreviation }})</p>
      <p class="ml-2 text-sm">Founded: {{ teamInfo?.firstYearOfPlay }}</p>
      <p class="ml-2 text-sm">Venue: {{ teamInfo?.venue.name }}</p>
      <p class="ml-2 text-sm text-blue-500">
        <a :href="teamInfo?.officialSiteUrl" target="_blank">Official Site</a>
      </p>
    </div>
    <div class="mr-1">
      <Logo :team-abbreviation="teamInfo?.abbreviation" />
    </div>
  </button>
</template>

<script setup lang="ts">
import Logo from '../../components/atoms/Logo.vue'

defineProps({
  teamInfo: Object
})
</script>

<style>

button:active {
  transform: translateX(1px) translateY(1px);
}
</style>