import { render, screen } from "@testing-library/vue";
import ErrorPage from "./ErrorPage.vue";

describe("errorPage", () => {
  it("renders correctly", () => {
    render(ErrorPage);

    expect(
      screen.getByText(/sorry, something bad happened/i),
    ).toBeInTheDocument();
  });
});
