<script setup lang="ts">
import {useGeneralStore} from "~/store/useGeneralStore";

const genStore = useGeneralStore()

</script>

<template>
  <template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center text-2xl text-blue-600">
      Tailwind CSS with Nuxt 3!
      {{ genStore.getAppName}}
    </div>
  </template>

</template>

<style scoped></style>
