<template>
  <div>
    <label :for="stringId">String</label>
    <input
      :id="stringId"
      type="text"
      :value="string"
      @input="(event): void => setString(eventToString(event))"
    />
  </div>
  <div>
    <label :for="numberId">Number</label>
    <input
      :id="numberId"
      type="number"
      :value="number"
      @input="(event): void => setNumber(eventToNumber(event))"
    />
  </div>
  <div>
    <label :for="dateId">Date</label>
    <input
      :id="dateId"
      type="date"
      :value="formatDate"
      @input="(event): void => setDate(eventToDate(event))"
    />
  </div>
</template>

<script setup lang="ts">
import useState from "@/common/hooks/use-state/UseState";
import { eventToString, eventToNumber, eventToDate } from "./EventHelpers";
import { computed } from "vue";

const stringId = Math.random().toString();
const [string, setString] = useState<string>("");

const numberId = Math.random().toString();
const [number, setNumber] = useState<number>(0);

const dateId = Math.random().toString();
const [date, setDate] = useState<Date>(new Date());

const formatDate = computed<string>(() => {
  return date.value.toISOString().slice(0, 10);
});
</script>
