<template>
  <form>
    <div>
      <label class="form-label" :for="userNameId">UserName:</label>
      <div>
        <input
          :id="userNameId"
          type="text"
          class="form-control"
          :value="userName"
          required
          @input="handleUpdateUserName"
        />
      </div>
    </div>
    <div>
      <label class="form-label" :for="passwordId">Password:</label>
      <div>
        <input
          :id="passwordId"
          type="password"
          class="form-control"
          :value="password"
          required
          @input="handleUpdatePassword"
        />
      </div>
    </div>
    <button class="btn btn-primary" type="submit" @click="handleSubmitLogIn">
      LogIn
    </button>
  </form>
</template>

<script setup lang="ts">
import { ValueDefaults } from "@/common";
import { useAuthorization, useId, useState } from "@/common/hooks";
import { eventToString } from "@/common/utilities/event-helpers/EventHelpers";

const { logIn } = useAuthorization();

const userNameId = useId();
const [userName, setUserName] = useState<string>(ValueDefaults.String);
const handleUpdateUserName = (event: Event): void => {
  setUserName(eventToString(event));
};

const passwordId = useId();
const [password, setPassword] = useState<string>(ValueDefaults.String);
const handleUpdatePassword = (event: Event): void => {
  setPassword(eventToString(event));
};

const handleSubmitLogIn = (event: Event): void => {
  event.preventDefault();

  void logIn(userName.value, password.value);
};
</script>
