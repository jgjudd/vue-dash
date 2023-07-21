<template>
  <img :src="imgUrl" />
</template>

<script setup lang="ts">
const props = defineProps({
  teamAbbreviation: String
})

const getLogoUrl = (teamAbbreviation: String) => {
  return `/src/assets/${teamAbbreviation}.png`
}
const imgUrl = getLogoUrl(`${props.teamAbbreviation}`)
</script>