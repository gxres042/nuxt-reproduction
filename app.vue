<template>
  <div>
    <NuxtRouteAnnouncer />
    
    <component :is="icon" />
    <component :is="ionc" />
  </div>
</template>

<script setup lang="ts">
// this doesn't work
const icon = resolveComponent(`Icon`)
// this ok
const ionc = resolveComponent('icon')
</script>
