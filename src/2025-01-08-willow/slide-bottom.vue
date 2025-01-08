<script setup lang="ts">
import { useSlideContext } from "@slidev/client";
const { $nav, $page } = useSlideContext();
</script>

<template>
  <footer
    v-if="$page !== 1"
    class="absolute bottom-0 right-4 p-4 text-xs opacity-50"
  >
    {{ $page }} / {{ $nav.total }}
  </footer>
</template>
