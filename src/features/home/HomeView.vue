<template>
  <p>Home!</p>
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
import { useRouter } from "vue-router";
import useState from "@/common/hooks/use-state/UseState";
import { ValueDefaults } from "@/common";
import useId from "@/common/hooks/use-id/UseId";
import { eventToString } from "@/common/utilities/event-helpers/EventHelpers";
import apiClient from "@/data/ApiClient";
import { StatusCodes } from "@/common/hooks/use-data-fetch/StatusCodes";
import { useApplicationStore } from "@/stores/UseApplicationStore";
import { logInAction } from "@/stores/actions";
import jwt_decode from "jwt-decode";
import type AccessTokenPayload from "@/data/AccessTokenPayload";

const router = useRouter();
const store = useApplicationStore();

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

  apiClient()
    .api.logIn({
      userName: userName.value,
      password: password.value,
    })
    .then((response) => {
      console.log(response);

      if (response.status === (StatusCodes.Success as number)) {
        const decoded = jwt_decode<AccessTokenPayload>(
          response.data.accessToken
        );

        return store.dispatcher(
          logInAction(decoded.UserName, response.data.accessToken)
        );
      } else {
        return;
      }
    })
    .catch((error: string) => {
      console.log(error);
    });
};
</script>
