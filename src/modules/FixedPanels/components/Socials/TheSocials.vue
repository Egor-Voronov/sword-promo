<script lang="ts" setup>
import SocialHref from "./ui/SocialHref.vue";
import type { TSocial } from "./types/TSocial";
import { ref } from "vue";

let id = 0;
const socialsList = ref<TSocial[]>([
  { title: "gh", href: "https://github.com/Egor-Voronov", id: id++ },
  { title: "tg", href: "https://t.me/Egor_Voronov_Dev", id: id++ },
  { title: "ln", href: "https://linkedin.com", id: id++ },
]);
</script>

<template>
  <div :class="$style.socials">
    <SocialHref :socials="socialsList" />
  </div>
</template>

<style module lang="scss">
.socials {
  display: flex;
  gap: toRemMob(10);

  @include _desktop {
    height: toRem(20);
    gap: toRem(15);
  }
}
</style>
