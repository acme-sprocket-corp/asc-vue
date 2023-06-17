<template>
  <TableElement :headers="headers">
    <tr>
      <td>Value 1</td>
      <td>Value 2</td>
      <td>Value 3</td>
    </tr>
  </TableElement>
</template>

<script setup lang="ts">
import TableElement from "./TableElement.vue";

const headers: Array<string> = ["First", "Second", "Third"];
</script>
