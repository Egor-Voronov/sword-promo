// import { ref, onMounted } from 'vue';
import type { Ref } from "vue";
import { screenAppear } from "./screenAppear";

export const screenScroll = (targetEl: Ref<HTMLDivElement>) => {
  screenAppear(targetEl);
};