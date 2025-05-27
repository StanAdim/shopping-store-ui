<script setup lang="ts">
import FooterMain from "~/components/layout-items/footer-main.vue";
import HeaderMain from "~/components/layout-items/header-main.vue";
</script>

<template>
  <div class="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden" style='font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;'>
    <div class="layout-container flex h-full grow flex-col">
      <!--    header-->
      <header-main />

      <!--    content-->
      <slot />

      <!--    footer-->
      <footer-main />
    </div>
  </div>

</template>

<style scoped></style>
