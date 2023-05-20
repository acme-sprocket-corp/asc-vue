<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<script setup lang="ts">
export interface TableElementProperties {
  headers: Array<string>;
}

defineProps<TableElementProperties>();
</script>
