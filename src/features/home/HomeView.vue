<template>
  <p>Home!</p>
  <div>
    <label :for="idInput">Id:</label>
    <input :id="idInput" type="text" @input="handleId" />
  </div>
  <div>
    <button @click="routeToDetails">Go!</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { Guid } from "js-guid";
import { sprocketDetailsRoute } from "../sprockets/routes/Sprockets.routes";
import useState from "@/common/hooks/use-state/UseState";

const router = useRouter();

const idInput = Math.random().toString();

const [id, setId] = useState<Guid>(new Guid(Guid.EMPTY));

const handleId = (event: Event): void => {
  const id = new Guid((event.target as HTMLInputElement).value);

  setId(id);
};

const routeToDetails = (): void => {
  void router.push(sprocketDetailsRoute(id.value));
};
</script>
