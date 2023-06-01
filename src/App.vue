<template>
  <header>
    <ContainerElement>
      <nav class="navbar">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" :to="homeRoute"
            >Acme Sprocket Co.</RouterLink
          >
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav"></ul>
          </div>
          <div v-if="store.state.isLoggedIn">
            <p>Hello {{ store.state.user }}</p>
            <button class="btn btn-primary" @click="handleLogOut">
              Log Out
            </button>
          </div>
          <div v-else class="d-flex gap-2">
            <button class="btn btn-primary" @click="handleLogIn">Log In</button>
            <button class="btn btn-outline-info" @click="handleRegister">
              Register
            </button>
          </div>
        </div>
      </nav>
    </ContainerElement>
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { homeRoute } from "./features/home/Home.routes";
import { ContainerElement } from "./common/components";
import { useAuthorization } from "./common/hooks";
import { useApplicationStore } from "./stores/UseApplicationStore";

const store = useApplicationStore();
const authorization = useAuthorization();
const router = useRouter();

const handleLogIn = (): void => {
  void router.push({ name: "logIn" });
};

const handleRegister = (): void => {
  void router.push({ name: "register" });
};

const handleLogOut = (): void => {
  void authorization.logOut();
};
</script>
