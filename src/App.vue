<template>
  <header>
    <nav class="d-flex justify-content-end">
      <p v-if="store.state.isLoggedIn">Hello {{ store.state.user }}</p>
      <button
        v-if="!store.state.isLoggedIn"
        class="btn btn-primary"
        @click="handleLogIn"
      >
        Log In
      </button>
      <button v-else class="btn btn-primary" @click="handleLogOut">
        Log Out
      </button>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useApplicationStore } from "./stores/UseApplicationStore";
import { logOutAction } from "./stores/actions";

const store = useApplicationStore();
const router = useRouter();

const handleLogIn = (): void => {
  void router.push({ name: "logIn" });
};

const handleLogOut = (): void => {
  store.dispatcher(logOutAction());
};
</script>
