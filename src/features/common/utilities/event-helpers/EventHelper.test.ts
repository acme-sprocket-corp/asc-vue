import { render, screen } from "@testing-library/vue";
import EventHelpersTestBed from "./EventHelpersTestBed.vue";
import userEvent from "@testing-library/user-event";

describe("eventHelpers", () => {
  it("toString returns correct value", async () => {
    const user = userEvent.setup();

    render(EventHelpersTestBed);

    await user.click(screen.getByLabelText(/string/i));

    const value = "abc";

    await user.keyboard(value);

    await expect(screen.findByLabelText(/string/i)).resolves.toHaveValue(value);
  });

  it("toNumber returns correct value", async () => {
    const user = userEvent.setup();

    render(EventHelpersTestBed);

    await user.click(screen.getByLabelText(/number/i));

    const value = 123;

    await user.keyboard("{1}{2}{3}");

    await expect(screen.findByLabelText(/number/i)).resolves.toHaveValue(value);
  });

  it("toDate returns correct value", async () => {
    const user = userEvent.setup({ delay: 100 });

    render(EventHelpersTestBed);

    const input = await screen.findByLabelText(/date/i);

    const value = "2100-08-08";

    await user.tripleClick(input);

    await user.keyboard(value);

    expect(input).toHaveValue(value);
  });
});
