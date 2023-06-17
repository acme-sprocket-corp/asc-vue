<template>
  <div class="field">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.field {
  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
}
</style>
