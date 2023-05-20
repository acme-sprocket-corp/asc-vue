<template>
  <header>
    <nav class="d-flex justify-content-end">
      <p v-if="store.state.isLoggedIn">Hello {{ store.state.user }}</p>
      <button v-if="!store.state.isLoggedIn" @click="handleLogIn">
        Log In
      </button>
      <button v-else @click="handleLogOut">Log Out</button>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
import { useApplicationStore } from "./stores/UseApplicationStore";
import { logInAction, logOutAction } from "./stores/actions";

const store = useApplicationStore();

const handleLogIn = (): void => {
  store.dispatcher(logInAction("mike"));
};

const handleLogOut = (): void => {
  store.dispatcher(logOutAction());
};
</script>
