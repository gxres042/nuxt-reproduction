<template>

</template>

<script lang="ts" setup>
import { initNoutious } from "~~/noutious";
const noutious = await initNoutious();
const posts = noutious.getPosts();
console.log(posts)
</script>

<style></style>
