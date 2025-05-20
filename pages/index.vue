<script setup lang="ts">
import {useGeneralStore} from "~/store/useGeneralStore";

const genStore = useGeneralStore()

</script>

<template>
  <template>
    <div class="flex flex-col">
      <login />
      <register />
    </div>

  </template>

</template>

<style scoped></style>
