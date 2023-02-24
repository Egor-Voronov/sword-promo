<script lang="ts" setup>
import type { PropType } from "vue";
import type { socialsType } from "../types/socialsType";

const props = defineProps({
  socials: {
    required: true,
    type: Array as PropType<socialsType[]>,
  },
});
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
