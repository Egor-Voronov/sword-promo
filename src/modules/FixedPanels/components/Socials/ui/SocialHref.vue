<script lang="ts" setup>
import type { SocialsType } from "../types/SocialsType";

const props = defineProps<{
  socials: SocialsType[];
}>();
</script>

<template>
  <a :href="socialHref.href" :key="socialHref.id" v-for="socialHref in socials">
    {{ socialHref.title }}
  </a>
</template>

<style lang="scss" module>
a {
  pointer-events: auto;
}
</style>
