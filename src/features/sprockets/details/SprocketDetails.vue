<template>
  <p>{{ id }}</p>
</template>

<script setup lang="ts">
import type IEntityIdProperties from "@/router/id-route/IEntityIdProperties";

defineProps<IEntityIdProperties>();
</script>
