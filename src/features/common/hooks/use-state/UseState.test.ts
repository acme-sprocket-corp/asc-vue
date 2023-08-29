import { render, screen } from "@testing-library/vue";
import UseStateTestBed from "./UseStateTestBed.vue";
import userEvent from "@testing-library/user-event";

describe("useState", () => {
  it("has correct default state", () => {
    render(UseStateTestBed);

    expect(screen.getByLabelText("label")).toHaveValue("defaultValue");
  });

  it("updates state correctly", async () => {
    const user = userEvent.setup();

    render(UseStateTestBed);

    await user.tripleClick(screen.getByLabelText("label"));

    await user.keyboard("newState");

    await expect(screen.findByLabelText("label")).resolves.toHaveValue(
      "newState",
    );
  });
});
