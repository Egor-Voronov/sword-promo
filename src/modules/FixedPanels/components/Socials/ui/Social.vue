<script lang="ts" setup>
import type { SocialsType } from "../types/SocialsType";

const props = defineProps<{
  socials: SocialsType[];
}>();
</script>

<template>
  <a :href="social.href" :key="social.id" v-for="social in socials">
    {{ social.title }}
  </a>
</template>

<style lang="scss" module>
a {
  pointer-events: auto;
}
</style>
