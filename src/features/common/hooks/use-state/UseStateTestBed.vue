<template>
  <label :for="inputId">
    label
    <input
      :id="inputId"
      type="text"
      :value="state"
      @input="handleUpdateInput"
    />
  </label>
</template>

<script setup lang="ts">
import { useId, useState } from "..";
import { eventToString } from "../../utilities";

const inputId = useId();
const [state, setState] = useState<string>("defaultValue");

const handleUpdateInput = (event: Event): void => {
  setState(eventToString(event));
};
</script>
