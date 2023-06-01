<template>
  <ContainerElement>
    <BoxElement>
      <form>
        <InputField>
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
        </InputField>
        <InputField>
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
        </InputField>
        <InputField>
          <button
            class="btn btn-primary"
            type="submit"
            @click="handleSubmitLogIn"
          >
            LogIn
          </button>
        </InputField>
      </form>
    </BoxElement>
  </ContainerElement>
</template>

<script setup lang="ts">
import { useAuthorization, useId, useState } from "@/common/hooks";
import { BoxElement, ContainerElement, InputField } from "@/common/components";
import { ValueDefaults, eventToString } from "@/common/utilities";

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
