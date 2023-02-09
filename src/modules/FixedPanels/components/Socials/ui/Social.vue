<script lang="ts" setup>
import type { PropType } from "vue";
import type { SocialsType } from "../types/SocialsType";

const props = defineProps({
  socials: {
    required: true,
    type: Array as PropType<SocialsType[]>,
  },
});
</script>

<template>
  <a
    :href="social.href"
    :key="social.id"
    :class="$style.social"
    v-for="social in socials"
  >
    {{ social.title }}
  </a>
</template>

<style lang="scss" module>
.social {
}
</style>
